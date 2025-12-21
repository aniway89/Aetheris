// app/AccountSetup/actions.ts
import { createClient } from "@/utils/supabase/server"

export async function completeOnboarding(formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { error: 'Not authenticated' }

    // avatar upload
    const file = formData.get('avatar') as File | null
    let avatar_url: string | null = null
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
    const { error: updateError } = await supabase
        .from('users')
        .update({
            username: formData.get('username'),
            display_name: formData.get('display_name'),
            dob,
            avatar_url,
            profile_complete: true, // Keep this line
        })
        .eq('id', user.id)

    if (updateError) return { error: 'Failed to complete profile' }

    return { success: true, avatar_url }
}