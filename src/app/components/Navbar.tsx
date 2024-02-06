import Link from "next/link"
import NavLink from "./NavLink"

const navLinks = [
  {
    href: "#about",
    title: "About"
  },
  {
    href: "#projects",
    title: "Projects"
  },
  {
    href: "#contact",
    title: "Contact"
  }
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className=" text-3xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((item, index) => (
              <li key={index}>
                <NavLink href={item.href} title={item.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
