"use client"
import Link from "next/link"
import NavLink from "./NavLink"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay"

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
  const [navbarOpen, setNavBarOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 border border-[#33353F] border-r-transparent border-l-transparent right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap  items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className=" text-3xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3  py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:bg-white"
            >
              <Bars3Icon className="h-5 w-5"></Bars3Icon>
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3  py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:bg-white"
            >
              <XMarkIcon className="h-5 w-5"></XMarkIcon>
            </button>
          )}
        </div>
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
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}
