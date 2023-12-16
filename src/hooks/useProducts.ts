import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { ProductDataProps } from '@/@types/ProductsDataProps'
import { api } from '@/services/api'
import { RootState } from '@/store'

const useProducts = () => {
  const category = useSelector((state: RootState) => state.product.category)

  const {
    data: categoriesData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['products', category],
    queryFn: async () => {
      try {
        const response = await api.get<ProductDataProps>('')
        const { data } = response
        const filteredData = data.categories.filter(
          (product) => product.category === category,
        )
        return filteredData
      } catch (error) {
        console.error(error)
        throw new Error('Erro ao buscar dados dos produtos')
      }
    },
  })

  return { categoriesData, isLoading, error }
}

export default useProducts
