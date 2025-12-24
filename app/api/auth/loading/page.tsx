// app/auth/loading/page.tsx
export default function AuthLoadingPage() {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center text-white bg-black">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-xl font-semibold">Completing Google Sign-in...</p>
        <p className="text-gray-400 text-sm">You will be redirected shortly</p>
      </div>
    </div>
  );
}