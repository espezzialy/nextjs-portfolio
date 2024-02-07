import { Resend } from "resend"
import * as React from "react"
import EmailTemplate from "@/app/components/EmailTemplate"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Espezzialy <espezzialy@outlook.com>",
      to: ["espezzialy@outlook.com"],
      subject: "Heeey! Man",
      react: EmailTemplate({ firstName: "Espezzialy" }) as React.ReactElement
    })

    if (error) {
      return Response.json({ error })
    }

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error })
  }
}
