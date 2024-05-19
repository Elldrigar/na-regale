'use server'

import * as z from 'zod'
import { ResetSchema } from '@/schemas'
import { getUserByEmail } from '@/services/user/getUser'
import { sendPasswordResetEmail } from '@/lib/email'
import { generatePasswordResetToken } from '@/lib/tokens'

export const reset = async (values: z.infer<typeof ResetSchema>) => {
    const validatedFields = ResetSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: 'Nie wiesz jak wygląda email?' }
    }

    const { email } = validatedFields.data

    const existingUser = await getUserByEmail(email)

    if (!existingUser) {
        return { error: 'Nie mamy takiego emaila!' }
    }

    const passwordResetToken = await generatePasswordResetToken(email)
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    )

    return { success: 'Reset email wysłany!' }
}
