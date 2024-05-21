import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
    try {
        const categories = await db.category.findMany()

        return NextResponse.json(categories)

    } catch (err) {
        console.log(err)
        return NextResponse.json('Coś poszło nie tak!')
    }
}
