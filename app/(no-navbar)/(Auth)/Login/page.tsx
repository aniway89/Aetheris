'use client'
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"
import { useState } from "react"
import { supabase } from "@/lib/supabase/client"
const Page = () => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleLogin(formData: FormData) {
    setError(null)
    setLoading(true)

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) setError(error.message)
    setLoading(false)
  }

  const googleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    })
  }

  

  return (
    <div className="flex h-[100dvh] w-full flex-col bg-black text-white font-sans relative overflow-hidden">
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <p className="text-5xl font-semibold Fls">Aetheris</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-0 scale-90 sm:scale-100">
        <div className="w-full max-w-[400px] space-y-8">
          <div className="text-left space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">Welcome Back!</h1>
            <p className="text-sm text-gray-400">
              Login into your <span className="Astehtic">Aetheris.</span>
            </p>
          </div>

          {/* SINGLE FORM */}
          <form  action={handleLogin} className="mt-8 space-y-4">
           {error && <p className="text-red-400/60">{error}</p>}
            <div className="space-y-4">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="block w-full rounded-xl bg-[#1C1C1C] px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20"
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                className="block w-full rounded-xl bg-[#1C1C1C] px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20"
              />
            </div>

            <button
             disabled={loading}
          
              className="flex w-full justify-center rounded-xl bg-white px-4 py-3.5 text-black font-semibold hover:bg-gray-200 disabled:opacity-50"
            >
            {loading ? 'Logging in…' : 'Login'}
            </button>
          </form>


          <div className="flex items-center justify-center p-3 gap-3">
            <div className="sap w-full h-[1px] bg-gray-800"></div>
            or
            <div className="sap w-full h-[1px] bg-gray-800"></div>
          </div>
          <button
            onClick={googleSignIn}
            className="flex w-full justify-center items-center gap-2 rounded-xl cursor-pointer bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
          >
            <FcGoogle className="text-2xl" /> Continue with Google
          </button>
          <div className="text-center text-sm text-gray-500 pt-4">
            Don't have an account?
            <Link href="/Register" className="pl-2 text-white hover:text-blue-500">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
