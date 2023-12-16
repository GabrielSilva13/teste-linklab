'use client'

import React from 'react'
import Image from 'next/image'

import useProducts from '@/hooks/useProducts'

import { ProductShowcaseWrapper } from '@/styles/productShowcase'
import { Loader } from '@/styles/app'

import { ProductSingleCardComponent } from './ProductSingleCard'

export const ProductShowcase = () => {
  const { categoriesData, isLoading } = useProducts()

  return (
    <ProductShowcaseWrapper>
      <strong>produtos</strong>

      <div>
        {categoriesData?.map((data) => (
          <React.Fragment
            key={`This is the products for the category: ${data.category}`}
          >
            {data.products?.map((product, index) => (
              <>
                {isLoading ? (
                  <Loader />
                ) : (
                  <ProductSingleCardComponent
                    key={index + 1}
                    name={product.name}
                    imageSource={product.image}
                    price={product.price}
                    rating={product.rating}
                  />
                )}
              </>
            ))}
          </React.Fragment>
        ))}
      </div>

      <Image src="/made-with-science.svg" alt="" width={186} height={186} />
    </ProductShowcaseWrapper>
  )
}
