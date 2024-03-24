'use server'

import * as z from 'zod'
import { LoginSchema } from '@/schemas'

export const loginAction = (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: 'Invalid fields' }
    }
}
