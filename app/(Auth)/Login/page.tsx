
const Page = () => {
  return (
    <div className="AuthLogin  flex min-h-screen items-center justify-center dark:bg-black">
      <div className="Logo absolute top-5 left-5 text-xl font-semibold text-gradient">
        Aestheris
      </div>

      <div className="AuthForm border p-10  flex flex-col items-center">
        <div className="Auth-title text-2xl font-semibold mb-8">
          Welcome Back
        </div>

        <div className="AuthInput-feild w-full">
          <div className="AuthInput-Title ">Email <span className="text-red-300">*</span></div>
          <input type="email" className="AuthInput-box text-sm font-extralight" required />
        </div>

        <div className="AuthInput-feild w-full">
          <div className="AuthInput-Title ">Password <span className="text-red-300">*</span></div>
          <input type="password" className="AuthInput-box text-sm font-extralight" required />
        </div>
        
      </div>
    </div>
  )
}

export default Page