import Image from 'next/image'
import Link from 'next/link'

import { DropdownWrapper, Divider, DropdownContentWrapper } from '@/styles/app'

export const DropdownWrapperComponent: React.FC<{
  isShowing: boolean
}> = ({ isShowing }) => {
  return (
    <DropdownWrapper
      css={{
        opacity: isShowing ? '1' : '0',
        pointerEvents: isShowing ? 'all' : 'none',
        visibility: isShowing ? 'visible' : 'hidden',
      }}
    >
      <Divider />
      <DropdownContentWrapper>
        <strong>
          Catálogo completo
          <br /> de itens para você
        </strong>
        <div>
          <strong>Laboratório</strong>

          <div>
            <Link href="">
              <Image
                src="/settings-slide-icon.svg"
                alt=""
                width={20}
                height={20}
              />
              Equipamentos
            </Link>

            <Link href="">
              <Image src="/thermostat-icon.svg" alt="" width={30} height={30} />
              Termômetros
            </Link>

            <Link href="">
              <Image src="/acessories-icon.svg" alt="" width={25} height={25} />
              Acessórios
            </Link>
          </div>
        </div>
        <div>
          <strong>Utensílios</strong>

          <div>
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
          </div>
        </div>
      </DropdownContentWrapper>
    </DropdownWrapper>
  )
}
