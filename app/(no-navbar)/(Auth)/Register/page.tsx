'use client';
import Link from "next/link"
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firebaseClient } from "@/lib/firebase/client";

const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  });
  const [validation, setValidation] = useState({
    email: { valid: false, touched: false },
    password: { valid: false, touched: false },
    confirmPassword: { valid: false, touched: false },
  });
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Password strength calculator
  useEffect(() => {
    if (!formData.password) {
      setPasswordStrength(0);
      return;
    }

    let strength = 0;
    if (formData.password.length >= 8) strength += 25;
    if (/[A-Z]/.test(formData.password)) strength += 15;
    if (/[a-z]/.test(formData.password)) strength += 15;
    if (/[0-9]/.test(formData.password)) strength += 15;
    if (/[^A-Za-z0-9]/.test(formData.password)) strength += 20;
    
    setPasswordStrength(Math.min(strength, 100));
  }, [formData.password]);

  // Real-time validation
  useEffect(() => {
    // Email validation
    if (validation.email.touched && formData.email) {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
      setValidation(prev => ({
        ...prev,
        email: { ...prev.email, valid: isValid }
      }));
    }

    // Password validation
    if (validation.password.touched && formData.password) {
      const isValid = formData.password.length >= 8;
      setValidation(prev => ({
        ...prev,
        password: { ...prev.password, valid: isValid }
      }));
    }

    // Confirm password validation
    if (validation.confirmPassword.touched && formData.confirmPassword) {
      const isValid = formData.password === formData.confirmPassword;
      setValidation(prev => ({
        ...prev,
        confirmPassword: { ...prev.confirmPassword, valid: isValid }
      }));
    }
  }, [formData, validation.email.touched, validation.password.touched, validation.confirmPassword.touched]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Mark field as touched when user starts typing
    if (name === 'email' && !validation.email.touched) {
      setValidation(prev => ({ ...prev, email: { ...prev.email, touched: true } }));
    }
    if (name === 'password' && !validation.password.touched) {
      setValidation(prev => ({ ...prev, password: { ...prev.password, touched: true } }));
    }
    if (name === 'confirmPassword' && !validation.confirmPassword.touched) {
      setValidation(prev => ({ ...prev, confirmPassword: { ...prev.confirmPassword, touched: true } }));
    }
    
    if (error) setError(null);
  };

  const handleBlur = (field: 'email' | 'password' | 'confirmPassword') => {
    setValidation(prev => ({ ...prev, [field]: { ...prev[field], touched: true } }));
  };

  const validateForm = (): boolean => {
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Invalid email");
      return false;
    }

    if (!formData.password || formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    if (!formData.confirmPassword || formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (!formData.terms) {
      setError("You must agree to the terms");
      return false;
    }

    return true;
  };

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError(null);
    setInfo(null);

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      await firebaseClient.sendEmailVerificationToUser();

      setFormData({ email: "", password: "", confirmPassword: "", terms: false });
      setInfo("Account created! Check email for verification.");
      
      setValidation({
        email: { valid: false, touched: false },
        password: { valid: false, touched: false },
        confirmPassword: { valid: false, touched: false },
      });
      
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          setError("Email already registered");
          break;
        case 'auth/invalid-email':
          setError("Invalid email");
          break;
        case 'auth/weak-password':
          setError("Password too weak");
          break;
        default:
          setError("Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError(null);
    setInfo(null);

    try {
      const result = await firebaseClient.signInWithGoogle();
      
      if (result?.user) {
        setInfo("Google sign-in successful!");
        
        setTimeout(() => {
          router.push("/AccountSetup");
        }, 15);
      }
    } catch (error: any) {
      switch (error.code) {
        case 'auth/popup-blocked':
          setError("Popup blocked");
          break;
        case 'auth/popup-closed-by-user':
          setError("Sign-in cancelled");
          break;
        default:
          setError("Google sign-in failed");
      }
    } finally {
      setLoading(false);
    }
  };

  // Get password strength label
  const getPasswordStrengthLabel = () => {
    if (passwordStrength < 30) return "Weak";
    if (passwordStrength < 60) return "Fair";
    if (passwordStrength < 80) return "Good";
    return "Strong";
  };

  return (
    <div className="flex h-[100dvh] w-full flex-col bg-black text-white font-sans relative overflow-hidden">
      {/* Logo Placeholder - Top Left */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <p className="text-5xl font-semibold Fls">Aetheris</p>
      </div>

      {/* Error and Info Messages */}
      {error && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-3 text-sm text-red-200">
            {error}
          </div>
        </div>
      )}
      
      {info && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
          <div className="bg-green-900/50 border border-green-700 rounded-lg p-3 text-sm text-green-200">
            {info}
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col items-center justify-center px-4 sm:px-0 py-12 scale-90 sm:scale-100">
        <div className="w-full max-w-[380px] space-y-8">
          <div className="text-left space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">Create Account</h1>
            <p className="text-sm text-gray-400">Create an account to start using Aetheris.</p>
          </div>

          <form onSubmit={handleEmailSignUp} className="mt-8 space-y-4">
       
            <div className="space-y-4">

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('email')}
                    disabled={loading}
                    className={`block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm ${
                      validation.email.touched && !validation.email.valid 
                        ? 'border border-red-600' 
                        : validation.email.valid 
                        ? 'border border-green-600'
                        : ''
                    }`}
                    placeholder="Email Address"
                  />
                  {validation.email.touched && validation.email.valid && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 text-sm">
                      ✓
                    </div>
                  )}
                  {validation.email.touched && !validation.email.valid && formData.email && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                      ✗
                    </div>
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="relative items-center">
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('password')}
                  disabled={loading}
                  className={`block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm pr-10 ${
                    validation.password.touched && !validation.password.valid 
                      ? 'border border-red-600' 
                      : validation.password.valid 
                      ? 'border border-green-600'
                      : ''
                  }`}
                  placeholder="Password"
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
                
                {/* Password Strength */}
              </div>
                {formData.password && (
                  <div className="flex items-center justify-between text-xs mt-2 px-1">
                    <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          passwordStrength < 30 ? "bg-red-500" :
                          passwordStrength < 60 ? "bg-yellow-500" :
                          passwordStrength < 80 ? "bg-green-500" : "bg-green-600"
                        }`}
                        style={{ width: `${passwordStrength}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 font-medium text-gray-300">
                      {getPasswordStrengthLabel()}
                    </span>
                  </div>
                )}

              {/* Confirm Password Input */}
              <div className="relative">
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('confirmPassword')}
                  disabled={loading}
                  className={`block w-full rounded-xl bg-[#1C1C1C] border-none px-4 py-3.5 text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 sm:text-sm pr-10 ${
                    validation.confirmPassword.touched && !validation.confirmPassword.valid 
                      ? 'border border-red-600' 
                      : validation.confirmPassword.valid 
                      ? 'border border-green-600'
                      : ''
                  }`}
                  placeholder="Confirm Password"
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={loading}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? < FaEye /> : <FaEyeSlash />}
                </button>
                
                {formData.confirmPassword && formData.password === formData.confirmPassword && (
                  <div className="text-green-400 text-xs mt-2 px-1">✓ Passwords match</div>
                )}
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
                  checked={formData.terms}
                  onChange={handleInputChange}
                  disabled={loading}
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
              type="submit"
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
            onClick={handleGoogleSignUp}
            disabled={loading}
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