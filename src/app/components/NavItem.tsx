import { NavItemProps } from '@/@types/NavItemProps'
import Link from 'next/link'
import { NavItemWithDropdown } from './NavItemWithDropdown'

export const NavItem: React.FC<NavItemProps> = ({ title, href, hasIcon }) => {
  return (
    <>
      {hasIcon ? (
        <NavItemWithDropdown title={title} />
      ) : (
        <Link href={href}>{title}</Link>
      )}
    </>
  )
}
