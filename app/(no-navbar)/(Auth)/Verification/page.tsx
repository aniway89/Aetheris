'use client'
import React, { useEffect, useRef, useState } from 'react'

const OTP_LENGTH = 5
const RESEND_TIME = 30

export default function Page() {
  const userEmail = 'ayan****@gmail.com' // ← replace with real email from auth/session

  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''))
  const [secondsLeft, setSecondsLeft] = useState(RESEND_TIME)
  const [isResending, setIsResending] = useState(false)

  const inputsRef = useRef<HTMLInputElement[]>([])

  const focusInput = (index: number) => {
    inputsRef.current[index]?.focus()
  }

  // Countdown timer
  useEffect(() => {
    if (secondsLeft === 0) return
    const timer = setInterval(() => {
      setSecondsLeft((s) => s - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [secondsLeft])

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const updated = [...otp]
    updated[index] = value
    setOtp(updated)

    if (value && index < OTP_LENGTH - 1) {
      focusInput(index + 1)
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const updated = [...otp]
        updated[index] = ''
        setOtp(updated)
      } else if (index > 0) {
        focusInput(index - 1)
      }
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData
      .getData('text')
      .slice(0, OTP_LENGTH)

    if (!/^\d+$/.test(pasted)) return

    const filled = pasted.split('')
    setOtp([...filled, ...Array(OTP_LENGTH - filled.length).fill('')])
    focusInput(Math.min(filled.length, OTP_LENGTH - 1))
  }

  const handleResend = async () => {
    if (secondsLeft > 0) return
    setIsResending(true)

    // 🔐 trigger resend OTP here (Supabase / API)
    await new Promise((r) => setTimeout(r, 800))

    setOtp(Array(OTP_LENGTH).fill(''))
    setSecondsLeft(RESEND_TIME)
    setIsResending(false)
    focusInput(0)
  }

  const otpValue = otp.join('')
  const isValid = otpValue.length === OTP_LENGTH

  return (
    <div className="flex h-[100dvh] w-full bg-black text-white font-sans items-center justify-center">
      <div className="flex flex-col items-center max-w-md w-full px-6">

        <h1 className="text-xl font-semibold mb-2">
          Enter verification code
        </h1>

        <p className="text-sm text-neutral-400 text-center mb-6">
          We sent a {OTP_LENGTH}-digit code to <br />
          <span className="text-white font-medium">{userEmail}</span>
        </p>

        <div className="flex gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputsRef.current[index] = el
              }}
              value={digit}
              inputMode="numeric"
              type="text"
              maxLength={1}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              className="bg-neutral-900 border border-neutral-800 rounded-xl aspect-square w-14 text-center text-lg focus:outline-none focus:ring-1 focus:ring-white"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          disabled={!isValid}
          className={`w-full py-3 rounded-xl font-medium transition
            ${
              isValid
                ? 'bg-white text-black hover:opacity-90'
                : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
            }
          `}
        >
          Verify code
        </button>

        {/* Resend */}
        <div className="mt-5 text-sm text-neutral-400">
          {secondsLeft > 0 ? (
            <span>Resend code in {secondsLeft}s</span>
          ) : (
            <button
              onClick={handleResend}
              disabled={isResending}
              className="text-white hover:underline"
            >
              Resend code
            </button>
          )}
        </div>

        {/* Support hint */}
        <p className="text-xs text-neutral-600 mt-4 text-center">
          Didn’t receive the email? Check spam or try again in a moment.
        </p>
      </div>
    </div>
  )
}
