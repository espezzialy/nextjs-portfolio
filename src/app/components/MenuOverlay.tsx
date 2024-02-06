import NavLink, { NavLinkProps } from "./NavLink"

interface MenuOverlayProps {
  links: NavLinkProps[]
}

export default function MenuOverlay(props: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {props.links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  )
}
