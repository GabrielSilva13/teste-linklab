import { ProductCardProps } from '@/@types/ProductCardProps'
import { ProductCard, ProductCardDotsWrapper } from '@/styles/product'
import Image from 'next/image'

export const Card: React.FC<ProductCardProps> = ({
  title,
  description,
  icon,
  activeIcon,
  isActive,
  onClick,
  isMobile,
}) => {
  return (
    <ProductCard
      onClick={onClick}
      css={{
        '@desktop': {
          cardHeight: isActive ? '541px' : '509px',
          marginTop: isActive ? '32px' : '0',
        },
        cardBackgroundColor: isActive ? '$orange600' : '$offWhite',
        color: isActive ? '$white' : '$indigo800',
        cursor: isActive ? 'default' : 'pointer',
        pointerEvents: isActive ? 'none' : 'auto',
      }}
    >
      <strong>{title}</strong>
      <div>
        {isActive ? (
          <Image src={activeIcon} alt="" width={32} height={32} />
        ) : (
          <Image src={icon} alt="" width={32} height={32} />
        )}

        <strong>{description}</strong>
      </div>

      {isMobile && (
        <ProductCardDotsWrapper>
          {isActive ? (
            <Image
              src="/card-mobile-dots-active.svg"
              alt=""
              width={100}
              height={69}
            />
          ) : (
            <Image src="/card-mobile-dots.svg" alt="" width={100} height={69} />
          )}
        </ProductCardDotsWrapper>
      )}
    </ProductCard>
  )
}
