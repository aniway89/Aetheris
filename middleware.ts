import { createServerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  let res = NextResponse.next()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials')
    return res
  }

  const cookieStore = await cookies()

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { session },
  } = await supabase.auth.getSession()
  const { pathname } = req.nextUrl

  const publicPaths = ['/Login', '/Register', '/AccountSetup']

  if (publicPaths.some(path => pathname.startsWith(path))) {
    if (session) return NextResponse.redirect(new URL('/me', req.url))
    return res
  }

  const privatePaths = ['/me', '/chat/dm']
  if (privatePaths.some(path => pathname.startsWith(path))) {
    if (!session) return NextResponse.redirect(new URL('/Login', req.url))
  }

  return res
}

export const config = {
  matcher: ['/Login', '/Register', '/AccountSetup', '/me', '/chat/:path*'],
}