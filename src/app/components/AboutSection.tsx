"use client"
import Image from "next/image"
import { SetStateAction, useState, useTransition } from "react"
import TabButton from "./TabButton"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Kotlin</li>
        <li>JAVA</li>
        <li>Spring</li>
        <li>Typescript</li>
        <li>React</li>
        <li>NextJS</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack academy of Code</li>
        <li>University Federal of Minas Gerais</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Android Developer </li>
        <li>Fullstack Superior Developer</li>
      </ul>
    )
  }
]

export default function AboutSection() {
  const [tab, setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id: SetStateAction<string>) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpeg"
          width={500}
          height={500}
          alt={""}
          className="border border-gray-600 rounded-[52px] hover:opacity-80"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            earum, minima quam beatae pariatur veniam nemo dicta. Unde ratione
            nostrum voluptas! Mollitia aliquid impedit dolorem sit veniam at,
            deserunt corrupti.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((item, index) => (
              <TabButton
                key={index}
                selectTab={() => handleTabChange(item.id)}
                active={tab === item.id}
              >
                {item.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}
