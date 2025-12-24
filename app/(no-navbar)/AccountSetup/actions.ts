'use server'

import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'

export async function completeOnboarding(formData: FormData) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated' }

  // Avatar upload
  let avatar_url: string | null = null
  const file = formData.get('avatar') as File | null

  if (file && file.size > 0) {
    const ext = file.name.split('.').pop()
    const path = `${user.id}/avatar.${ext}`

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(path, file, { upsert: true })

    if (uploadError) return { error: 'Avatar upload failed' }

    const { data } = supabase.storage.from('avatars').getPublicUrl(path)
    avatar_url = data.publicUrl
  }

  const dob = `${formData.get('yyyy')}-${formData.get('mm')}-${formData.get('dd')}`

  // UPSERT user - Create new user record attached to authenticated user email
  const { error } = await supabase.from('users').upsert(
    {
      id: user.id,
      email: user.email!,
      username: formData.get('username') as string,
      display_name: formData.get('display_name') as string,
      avatar_url,
      date_of_birth: dob,
      profile_complete: true,
    },
    { onConflict: 'id' }
  )

  if (error) return { error: error.message }

  // Device-based redirect
  const ua = (await headers()).get('user-agent') || ''
  const isMobile = /android|iphone|ipad|ipod/i.test(ua)

  return {
    success: true,
    redirect: isMobile ? '/chat/dm' : '/me',
  }
}
