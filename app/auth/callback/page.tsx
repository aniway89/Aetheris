'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { firebaseClient } from '@/lib/firebase/client';
import Link from 'next/link';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState<string>('Processing authentication...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processAuthCallback = async () => {
      try {
        console.log('Processing auth callback...');
        
        // Get the redirect result
        const result = await firebaseClient.getRedirectResult();
        
        if (result?.user) {
          console.log('Auth successful for user:', result.user.email);
          setStatus('success');
          setMessage('Authentication successful! Redirecting to your dashboard...');
          
          // Redirect to dashboard after 2 seconds
          setTimeout(() => {
            router.push('/dashboard');
          }, 2000);
        } else {
          // No result means we should redirect to register/login
          console.log('No auth result found, redirecting to register');
          router.push('/register');
        }
      } catch (error: any) {
        console.error('Auth callback error:', error);
        setStatus('error');
        
        // User-friendly error messages
        switch (error.code) {
          case 'auth/account-exists-with-different-credential':
            setError('An account already exists with this email. Please sign in with email instead.');
            break;
          case 'auth/popup-closed-by-user':
          case 'auth/cancelled-popup-request':
            setError('Authentication was cancelled. Please try again.');
            break;
          case 'auth/unauthorized-domain':
            setError('This domain is not authorized for authentication.');
            break;
          default:
            setError(`Authentication failed: ${error.message || 'Unknown error'}`);
        }
      }
    };

    processAuthCallback();
  }, [router]);

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center bg-black text-white">
      <div className="w-full max-w-md px-6 py-8 text-center">
        {status === 'loading' && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h1 className="text-2xl font-bold">Completing Authentication</h1>
            <p className="text-gray-400">{message}</p>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/50 rounded-full">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold">Success!</h1>
            <p className="text-gray-300">{message}</p>
            <div className="pt-4">
              <div className="text-sm text-gray-400">
                Redirecting in 2 seconds...
              </div>
              <Link 
                href="/dashboard" 
                className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                Go to Dashboard Now
              </Link>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-900/50 rounded-full">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold">Authentication Failed</h1>
            <p className="text-red-300">{error}</p>
            <div className="pt-4 space-y-3">
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
        )}
      </div>
    </div>
  );
}