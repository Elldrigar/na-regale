import { db } from '@/lib/db'
import { currentUser } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
    const { title, desc } = req.json()

    if (!title || !desc) {
        return NextResponse.json({ error: 'Missing title' }, { status: 500 })
    }
    const user = await currentUser()
    if (!user) {
        return NextResponse.json({ error: 'Brak usera!' }, { status: 401 })
    }
    const {} = await req.json()
}
