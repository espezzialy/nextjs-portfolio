interface ProjectTagProps {
  name: string
  onClick: (tag: string) => void
  isSelected: boolean
}

export default function ProjectTag(props: ProjectTagProps) {
  const buttonStyles = props.isSelected
    ? "text-white border-blue-500 bg-slate-800"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"

  return (
    <div>
      <button
        className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-xl cursor-pointer`}
        onClick={() => props.onClick(props.name)}
      >
        {props.name}
      </button>
    </div>
  )
}
