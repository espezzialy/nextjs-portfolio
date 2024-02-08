import { Resend } from "resend"
import * as React from "react"
import EmailTemplate from "@/app/components/EmailTemplate"

const resend = new Resend(process.env.RESEND_API_KEY)
const fromEmail = process.env.FROM_EMAIL as string

export async function POST(req: any, res: any) {
  const { body } = req.json()
  const { email, subject, message } = body

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["espezzialy@outlook.com", email],
      subject: subject,
      //TODO add here, subject as header
      react: EmailTemplate({ firstName: message }) as React.ReactElement
    })

    if (error) {
      return Response.json({ error })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error })
  }
}
