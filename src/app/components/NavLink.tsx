import Link from "next/link"

export interface NavLinkProps {
  href: string
  title: string
}

export default function NavLink(props: NavLinkProps) {
  return (
    <Link
      href={props.href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-8 hover:text-white"
    >
      {props.title}
    </Link>
  )
}
