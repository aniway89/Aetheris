'use client'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()

  async function logout() {
    await supabase.auth.signOut()
    router.replace('/Login')
  }

  return (
    <button
      onClick={logout}
      className="px-4 py-2 rounded-lg bg-red-500 text-white"
    >
      Logout
    </button>
  )
}
