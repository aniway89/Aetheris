'use client';
import Link from "next/link"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { supabase } from "@/lib/supabase/client";


const Page = () => {
 const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setError(null);
  setLoading(true);

  const formData = new FormData(e.currentTarget);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirm-password') as string;

  if (!email) {
    setError("Email is required");
    setLoading(false);
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match");
    setLoading(false);
    return;
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/api/auth/callback`,
    },
  });

  if (error) {
    setError(error.message);
  } else {
    alert("Check your email to confirm your account.");
  }
  setLoading(false);
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
      {/* Logo Placeholder - Top Left */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <p className="text-5xl font-semibold Fls">Aetheris</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-0 py-12 scale-90 sm:scale-100">
        <div className="w-full max-w-[380px] space-y-8">
          <div className="text-left space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">Create Account</h1>
            <p className="text-sm text-gray-400">Create an account to start using Aetheris.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="space-y-4">

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm"
                  placeholder="Email Address"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm pr-10"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {/* Confirm Password Input */}
              <div className="relative">
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm pr-10"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? < FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-gray-600 non text-white  focus:ring-white/20 focus:ring-offset-0"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-400">
                  By creating an account, you agree to our{' '}
                  <Link href="#" className="font-medium text-white  decoration-gray-500 underline-offset-2 hover:decoration-white">
                    Terms of Use
                  </Link>{' '}
                  and{' '}
                  <Link href="#" className="font-medium text-white  decoration-gray-500 underline-offset-2 hover:decoration-white">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>
            </div>

            <button
              
              disabled={loading}
              className="flex w-full justify-center rounded-xl cursor-pointer bg-white px-4 py-3.5 text-sm font-semibold text-black hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <div className="text-center text-sm text-gray-500 pt-4">
            Already have an account?
            <Link href="/Login" className="pl-2 text-white">
              Login
            </Link>
          </div>
          <div className="flex items-center justify-center p-3 gap-3">
            <div className="sap w-full h-[1px] bg-gray-600"></div>
            or
            <div className="sap w-full h-[1px] bg-gray-600"></div>
          </div>
          <button
           onClick={googleSignIn}
            className="flex w-full justify-center items-center gap-2 rounded-xl cursor-pointer bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
          >
            <FcGoogle className="text-2xl" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page