"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

/* eslint-disable react/no-unescaped-entities */
export default function HeroSection() {
  return (
    <section className="md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 sm:my-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center place-items-center grid lg:place-items-start sm:text-left"
        >
          <h1 className="tex-white mb-4 text-5xl lg:text-7xl lg:leading-normal justify-self-star font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Hello, I'm <br></br>
            </span>
            <TypeAnimation
              sequence={[
                "Espezzialy",
                1000,
                "a Software Engineer",
                1000,
                "a Fullstack Developer",
                1000,
                "a Android Developer",
                1000
              ]}
              wrapper="span"
              speed={28}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            eligendi debitis alias excepturi odit esse sapiente porro tenetur
            numquam? Iste sint tenetur corporis obcaecati voluptate, praesentium
            in rem repudiandae quaerat.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 to-purple-600 bg-white hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="Espezzialy Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
