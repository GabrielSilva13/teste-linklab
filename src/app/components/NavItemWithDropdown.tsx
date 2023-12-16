'use client'
import { useEffect, useState } from 'react'

import { NavItemWithDropdownProps } from '@/@types/NavItemProps'
import { NavItemWithDropdownWrapper } from '@/styles/app'
import Image from 'next/image'
import { DropdownWrapperComponent } from './DropdownWrapper'

export const NavItemWithDropdown: React.FC<NavItemWithDropdownProps> = ({
  title,
}) => {
  const [isShowing, setIsShowing] = useState(false)

  const handleOpenDropdownMenu = () => {
    setIsShowing((prevState) => !prevState)
  }

  const handleCloseOnEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsShowing(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseOnEscape)

    return () => {
      document.removeEventListener('keydown', handleCloseOnEscape)
    }
  }, [])

  return (
    <>
      <NavItemWithDropdownWrapper onClick={handleOpenDropdownMenu}>
        <span style={{ color: isShowing ? '#F5643D' : '#fff' }}>{title}</span>
        <Image
          style={{
            transition: 'transform 0.3s ease-in-out',
            transform: isShowing ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          src={isShowing ? '/arrow-up-icon.svg' : '/arrow-down-icon.svg'}
          alt="Ícone de seta"
          width={9}
          height={9}
        />
      </NavItemWithDropdownWrapper>

      {isShowing && <DropdownWrapperComponent isShowing={isShowing} />}
    </>
  )
}
