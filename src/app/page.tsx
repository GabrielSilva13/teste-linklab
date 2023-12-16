import { Hero } from '@/styles/hero'
import { HeaderComponent } from './components/Header'
import { Container } from '@/styles/app'
import { ProductCardWrapperComponent } from './components/ProductCardWrapperComponent'
import { ProductShowcase } from './components/ProductShowcase'

export default function Home() {
  return (
    <>
      <Hero>
        <Container>
          <HeaderComponent />
        </Container>
      </Hero>
      <Container>
        <ProductCardWrapperComponent />
        <ProductShowcase />
      </Container>
    </>
  )
}
