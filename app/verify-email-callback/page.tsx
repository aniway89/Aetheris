'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { firebaseClient } from '@/lib/firebase/client';
import Link from 'next/link';

export default function VerifyEmailCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Get the action code from URL parameters
        const oobCode = searchParams.get('oobCode');
        const mode = searchParams.get('mode');
        const apiKey = searchParams.get('apiKey');
        const continueUrl = searchParams.get('continueUrl');

        console.log('Email verification params:', { oobCode, mode, apiKey, continueUrl });

        if (!oobCode) {
          throw new Error('Invalid verification link. Missing verification code.');
        }

        if (mode !== 'verifyEmail') {
          throw new Error('Invalid verification link. This link is for email verification.');
        }

        // Verify the email with the action code
        await firebaseClient.verifyEmailWithCode(oobCode);
        
        setSuccess(true);
        
        // Optional: Automatically sign in the user if they're not already signed in
        // You can redirect to login or dashboard
        setTimeout(() => {
          router.push('/login?verified=true');
        }, 3000);

      } catch (error: any) {
        console.error('Email verification error:', error);
        
        switch (error.code) {
          case 'auth/expired-action-code':
            setError('This verification link has expired. Please request a new verification email.');
            break;
          case 'auth/invalid-action-code':
            setError('Invalid verification link. The link may have already been used.');
            break;
          case 'auth/user-disabled':
            setError('This account has been disabled. Please contact support.');
            break;
          case 'auth/user-not-found':
            setError('No account found with this email.');
            break;
          default:
            setError(error.message || 'Failed to verify email. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center text-white bg-black">
      <div className="w-full max-w-md px-6 py-8 text-center">
        {loading ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-xl font-semibold">Verifying your email...</p>
            <p className="text-gray-400">Please wait while we confirm your email address</p>
          </div>
        ) : error ? (
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-900/50 rounded-full">
              <span className="text-3xl">⚠️</span>
            </div>
            <div>
              <p className="text-red-400 text-lg font-semibold">Verification Failed</p>
              <p className="text-gray-300 mt-2">{error}</p>
            </div>
            <div className="space-y-3 pt-4">
              <Link 
                href="/register" 
                className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Back to Register
              </Link>
              <p className="text-gray-400 text-sm">
                Need help?{' '}
                <a 
                  href="mailto:support@aetheris.com" 
                  className="text-white underline hover:no-underline"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        ) : success ? (
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/50 rounded-full">
              <span className="text-3xl">✅</span>
            </div>
            <div>
              <p className="text-green-400 text-lg font-semibold">Email Verified Successfully!</p>
              <p className="text-gray-300 mt-2">
                Your email has been verified. You can now log in to your account.
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <div className="text-center text-sm text-gray-400">
                Redirecting to login page in 3 seconds...
              </div>
              <Link 
                href="/login" 
                className="inline-block px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Go to Login
              </Link>
            </div>
          </div>
        ) : (
          <p>Redirecting...</p>
        )}
      </div>
    </div>
  );
}