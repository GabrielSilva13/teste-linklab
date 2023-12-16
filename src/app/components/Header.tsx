import {
  BudgetButton,
  BudgetButtonMobile,
  DotsWrapper,
  DotsWrapperMobile,
  Header,
  HeaderContainer,
  MobileOnlyTextWrapper,
  ScienceWrapper,
} from '@/styles/app'
import Image from 'next/image'

import { NavItem } from './NavItem'
import { MobileMenu } from './MobileMenu'

export const HeaderComponent = () => {
  return (
    <>
      <HeaderContainer>
        <Header>
          <nav>
            <Image src="/logo.svg" alt="" width={159} height={35} />
            <ul>
              <NavItem title="Início" href="/" />
              <NavItem title="Produtos" href="/" hasIcon />
              <NavItem title="Laudos" href="/" />
              <NavItem title="Sobre Nós" href="/" />
              <NavItem title="Certificações" href="/" />
              <NavItem title="Contato" href="/" />
            </ul>
          </nav>
          <BudgetButton>
            <Image
              src="/stream-line-icon.svg"
              alt="Ícone em especie de lista"
              width={15}
              height={15}
            />
            Orçamento
          </BudgetButton>

          <BudgetButtonMobile>
            <Image
              src="/stream-line-icon.svg"
              alt="Ícone em especie de lista"
              width={21}
              height={21}
            />
          </BudgetButtonMobile>

          <MobileMenu />

          <DotsWrapper>
            <Image src="/dots.svg" alt="" width={311} height={343} priority />
          </DotsWrapper>

          <ScienceWrapper>
            <Image
              src="/made-with-science.svg"
              alt=""
              width={186}
              height={186}
            />
          </ScienceWrapper>
        </Header>
      </HeaderContainer>

      <MobileOnlyTextWrapper>
        <strong>
          Qualidade e expertise em produtos <span>químicos e acessórios</span>
        </strong>

        <p>
          Estamos preparados para te entender e atender da melhor forma para
          suprir todas as suas demandas em químicos e similares.
        </p>
      </MobileOnlyTextWrapper>

      <DotsWrapperMobile>
        <Image
          style={{ maxWidth: 'unset' }}
          src="/dots-mobile.svg"
          alt=""
          width={311}
          height={343}
          priority
        />
      </DotsWrapperMobile>
    </>
  )
}
