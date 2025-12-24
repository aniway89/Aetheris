'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { auth } from '@/lib/firebase/client';
import { supabase } from '@/lib/supabase/client';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ----------------- Email / Password Login -----------------
  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Check email verification
      if (!userCredential.user.emailVerified) {
        setError('Please verify your email before logging in.');
        setLoading(false);
        return;
      }

      // Check Supabase for profile
      const { data: userData } = await supabase
        .from('users')
        .select('profile_complete')
        .eq('email', email)
        .maybeSingle();

      if (!userData || !userData.profile_complete) {
        router.replace('/AccountSetup');
      } else {
        const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
        router.replace(isMobile ? '/chat/dm' : '/me');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ----------------- Google Login -----------------
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    await signInWithRedirect(auth, provider);
  };

  // ----------------- Handle Redirect Result -----------------
  useEffect(() => {
    const handleRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (!result?.user) return;

        const user = result.user;
        const idToken = await user.getIdToken(true);

        // Sign in Supabase with Firebase token
        await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: idToken,
        });

        // Check Supabase for user profile
        const { data: existingUser } = await supabase
          .from('users')
          .select('id, profile_complete')
          .eq('email', user.email)
          .maybeSingle();

        if (!existingUser || !existingUser.profile_complete) {
          router.replace('/AccountSetup');
          return;
        }

        const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);
        router.replace(isMobile ? '/chat/dm' : '/me');
      } catch (err) {
        console.error('Google login failed:', err);
        setError('Google login failed. Try again.');
      }
    };

    handleRedirect();
  }, [router]);

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

          {/* Email / Password Form */}
          <form onSubmit={handleEmailLogin} className="mt-8 space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="block w-full rounded-xl bg-[#1C1C1C] px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="block w-full rounded-xl bg-[#1C1C1C] px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20"
              />
            </div>
            <button
              type="submit"
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

          {/* Google Login */}
          <button
            onClick={handleGoogleSignIn}
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
  );
}
