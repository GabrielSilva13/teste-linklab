import Image from 'next/image'

import { ProductSingleProps } from '@/@types/ProductSingleProps'
import { ProductSingleCard } from '@/styles/productShowcase'

export const ProductSingleCardComponent: React.FC<ProductSingleProps> = ({
  name,
  imageSource,
  price,
  rating,
}) => (
  <ProductSingleCard>
    <Image src={imageSource} alt={name} width={376} height={178} />

    <div>
      <strong>{name}</strong>
      <div>
        <span>Nota: {rating}</span>
        <span>
          {price.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          })}
        </span>
      </div>
    </div>
  </ProductSingleCard>
)
