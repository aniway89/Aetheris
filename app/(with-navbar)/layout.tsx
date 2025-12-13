'use client'

import Navbar from "../components/Element/Navbar"


export default function WithNavbarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative max-h-[100dvh] bg-black">
      {/* STATIC NAVBAR */}
      <Navbar />

      {/* CONTENT AREA */}
      <main className="">
        {children}
      </main>
    </div>
  )
}
