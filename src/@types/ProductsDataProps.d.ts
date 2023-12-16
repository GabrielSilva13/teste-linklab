export type Product = {
  image: string
  name: string
  price: number
  rating: number
}

type ProductData = {
  category: string
  products: Product[]
}

export interface ProductDataProps {
  categories: ProductData[]
}
