import { Resend } from 'resend'

const resend = new Resend(process.env.EMAIL_SERVER_PASSWORD)
const domain = 'http://localhost:3000'

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Potwierdz email',
        html: `<p>Kliknij <a href="${confirmLink}">tukej</a> aby potwierdzić email.</p>` // TODO: custom template
    })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Resetowanie hasła',
        html: `<p>Kliknij <a href="${resetLink}">tukej</a> aby zresetować hasłko!</p>`
    })
}