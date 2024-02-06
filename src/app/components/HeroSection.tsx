import Image from "next/image"

/* eslint-disable react/no-unescaped-entities */
export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
          <h1 className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Hello, I'm Espezzialy
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            eligendi debitis alias excepturi odit esse sapiente porro tenetur
            numquam? Iste sint tenetur corporis obcaecati voluptate, praesentium
            in rem repudiandae quaerat.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bh-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="Espezzialy Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
