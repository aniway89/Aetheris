import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const username = searchParams.get('u')

    if (!username) {
      return NextResponse.json({ error: 'Username required' }, { status: 400 })
    }

    // Basic validation
    const regex = /^[a-z0-9_]{3,16}$/
    if (!regex.test(username)) {
      return NextResponse.json({ 
        data: { 
          exists: false, 
          message: 'Invalid username format' 
        } 
      })
    }

    const supabase = await createClient()

    // Check if username exists in database
    const { data, error } = await supabase
      .from('users')
      .select('id')
      .eq('username', username)
      .limit(1)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      data: {
        exists: data && data.length > 0,
      },
    })
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err?.message || 'Internal server error') },
      { status: 500 }
    )
  }
}
