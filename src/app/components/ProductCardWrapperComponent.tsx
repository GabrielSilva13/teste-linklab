'use client'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setCategory } from '@/store/productSlice'

import useIsMobile from '@/hooks/useIsMobile'

import { Card } from './ProductCard'
import { ProductWrapper } from '@/styles/product'
import { customData } from '@/const'

export const ProductCardWrapperComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const dispatch = useDispatch()
  const isMobile = useIsMobile()

  const handleCardClick = useCallback(
    (index: number) => {
      setActiveIndex(index)
      dispatch(setCategory(customData[index].description))
    },
    [dispatch],
  )

  return (
    <ProductWrapper>
      {customData.map((data, index) => (
        <Card
          key={index}
          onClick={() => handleCardClick(index)}
          isActive={index === activeIndex}
          isMobile={isMobile}
          {...data}
        />
      ))}
    </ProductWrapper>
  )
}
