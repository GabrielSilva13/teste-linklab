export interface ProductCardProps {
  title: string
  icon: string
  description: string
  isActive?: boolean
  activeIcon: string
  onClick: () => void
  isMobile: boolean
}
