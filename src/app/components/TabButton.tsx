import { motion } from "framer-motion"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem" }
}

interface TabButtonProps {
  selectTab: () => void
  active: Boolean
  children: any
}

export default function TabButton(props: TabButtonProps) {
  const buttonClasses = props.active ? "text-white" : "text-[#ADB7BE]"
  return (
    <div>
      <button onClick={props.selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
          {props.children}
        </p>
        <motion.div
          animate={props.active ? "active" : "default"}
          variants={variants}
          className="h-1 bg-blue-600 mt-1 mr-3 rounded-md"
        ></motion.div>
      </button>
    </div>
  )
}
