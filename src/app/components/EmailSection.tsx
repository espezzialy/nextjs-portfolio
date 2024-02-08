"use client"
import Link from "next/link"
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"
import Image from "next/image"
import { useState } from "react"

/* eslint-disable react/no-unescaped-entities */
export default function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      subject: e.target.email.value,
      message: e.target.message.value
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = "/api/send"

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSONdata
    }

    const response = await fetch(endpoint, options)
    const resData = await response.json()
    if (response.status === 200) {
      console.log("Message sent.")
      setEmailSubmitted(true)
    }
  }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-sm absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2 "></div>
      <div className="z-20">
        <h5 className="text-xl font-bold text-white my-2 "> Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-2-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          consectetur voluptatum, labore cupiditate, odit eaque similique quas
          eos temporibus sunt beatae, quidem quae. Iste voluptas debitis, saepe
          ut dicta ducimus.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/espezzialy">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/espezzialy">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your best email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="email@provider.com"
            ></input>
          </div>
          <div className="z-20 mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi!"
            ></input>
          </div>
          <div className="mb-6 z-10">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 z-10"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full z-10"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-lg mt-2 items-center justify-center flex">
              Email sent successfully!!
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
