interface TabButtonProps {
  selectTab: () => void
  active: Boolean
  children: any
}

export default function TabButton(props: TabButtonProps) {
  const buttonClasses = props.active
    ? "text-white border-b border-blue-600"
    : "text-[#ADB7BE]"
  return (
    <div>
      <button onClick={props.selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
          {props.children}
        </p>
      </button>
    </div>
  )
}
