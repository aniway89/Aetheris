
import Link from "next/link"

const Page = () => {
  return (
    <div className="flex h-[100dvh] w-full flex-col bg-black text-white font-sans relative overflow-hidden">
      {/* Logo Placeholder - Top Left */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <p className="text-5xl font-semibold Fls">Aetheris</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-0 scale-90 sm:scale-100 ">
        <div className="w-full max-w-[400px] space-y-8">
          <div className="text-left space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">Welcome Back!</h1>
            <p className="text-sm text-gray-400">Login into your <span className="Astehtic">Aetheris.</span></p>
          </div>

          <form className="mt-8 space-y-4">
            <div className="space-y-4">
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
              <div className="relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-black hover:bg-gray-200 transition-colors duration-200"
            >
              Login
            </button>
          </form>

          <div className="text-center">
            <Link href="#" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Forgot Password?
            </Link>
          </div>



          <div className="text-center text-sm text-gray-500 pt-4">
            Don't have an account?
            <Link href="/Register" className="pl-2 text-white hover:text-blue-500 transition-colors">
              Create account
            </Link>
          </div>


        </div>
      </div>
    </div>
  )
}
export default Page
