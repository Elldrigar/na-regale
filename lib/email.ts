import { Resend } from 'resend'

const resend = new Resend(process.env.EMAIL_SERVER_PASSWORD)

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Potwierdz email',
        html: `<p>Kliknij <a href="${confirmLink}">tukej</a> aby potwierdzić email.</p>` // TODO: custom template
    })
}
