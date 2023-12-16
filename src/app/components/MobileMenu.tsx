'use client'
import { useState } from 'react'

import {
  MobileCatalogWrapper,
  MobileMenuButton,
  MobileMenuContentWrapper,
} from '@/styles/app'
import Image from 'next/image'
import { NavItem } from './NavItem'
import Link from 'next/link'
import useIsMobile from '@/hooks/useIsMobile'

const MobileMenuContent = () => (
  <MobileMenuContentWrapper>
    <strong>
      Navegue por <br />
      nosso site
    </strong>

    <nav>
      <NavItem href="" title="Início" />
      <NavItem href="" title="Laudos" />
      <NavItem href="" title="Sobre Nós" />
      <NavItem href="" title="Certificações" />
      <NavItem href="" title="Contato" />
    </nav>

    <strong>
      Catálogo completo
      <br /> de itens para você
    </strong>

    <MobileCatalogWrapper>
      <strong>Laboratório</strong>

      <nav>
        <Link href="">
          <Image src="/settings-slide-icon.svg" alt="" width={20} height={20} />
          Equipamentos
        </Link>

        <Link href="">
          <Image src="/thermostat-icon.svg" alt="" width={20} height={20} />
          Termômetros
        </Link>

        <Link href="">
          <Image src="/acessories-icon.svg" alt="" width={20} height={20} />
          Acessórios
        </Link>
      </nav>
    </MobileCatalogWrapper>

    <MobileCatalogWrapper>
      <strong>Utensílios</strong>

      <nav>
        <Link href="">
          <Image src="/metal-icon.svg" alt="" width={20} height={20} />
          Inox e Ferragens
        </Link>

        <Link href="">
          <Image src="/glasses-icon.svg" alt="" width={20} height={20} />
          Vidrarias
        </Link>

        <Link href="">
          <Image src="/plastic-icon.svg" alt="" width={20} height={20} />
          Plásticos
        </Link>

        <Link href="">
          <Image src="/porcelain-icon.svg" alt="" width={20} height={20} />
          Porcelanas
        </Link>
      </nav>
    </MobileCatalogWrapper>
  </MobileMenuContentWrapper>
)

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()

  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState)
    document.getElementById('root')?.classList.toggle('overflow-hidden')
  }

  return (
    <>
      {isMobile && (
        <MobileMenuButton onClick={handleToggleMenu}>
          <Image src="/hamburger-icon.svg" alt="" width={35} height={35} />
        </MobileMenuButton>
      )}

      {isOpen && <MobileMenuContent />}
    </>
  )
}
