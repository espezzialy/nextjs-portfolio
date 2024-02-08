"use client"
import dynamic from "next/dynamic"
import AnimatedNumbers from "react-animated-numbers"

// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers")
//   },
//   { ssr: false }
// )

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+"
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100000"
  },
  {
    metric: "Awards",
    value: "7"
  },
  {
    metric: "Years",
    value: "5"
  }
]

export default function ArchievementsSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-4 flex flex-row items-center justify-between ">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center sm:mx-4"
            >
              <h2 className="text-white  sm:text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white sm:text-4xl font-bold"
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
