import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.jpeg"
          width={500}
          height={500}
          alt={""}
          className="border border-gray-600 rounded-[52px]"
        />
        <div>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            earum, minima quam beatae pariatur veniam nemo dicta. Unde ratione
            nostrum voluptas! Mollitia aliquid impedit dolorem sit veniam at,
            deserunt corrupti.
          </p>
        </div>
      </div>
    </section>
  )
}
