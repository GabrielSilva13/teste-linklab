import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      offWhite: '#F9F0EE',
      lightWhite: 'rgba(255, 255, 255, 0.75)',
      darkWhite: 'rgba(255, 255, 255, 0.09)',
      orange600: '#F5643D',
      sunsetOrange: 'rgba(245, 100, 61, 0.80)',
      blue200: '#84C4EA',
      indigo800: '#323351',
      gray300: '#E0E0E0',
      gray400: '#A1A1A1',
    },
    fontSizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.5rem', // 24px
      '2xl': '2rem', // 32px
      '3xl': '2.25rem', // 36px
    },
  },
  media: {
    desktop: '(min-width: 1080px)',
  },
  utils: {
    cardHeight: (value: number | string) => ({
      height: value,
    }),
    cardBackgroundColor: (value: string) => ({
      backgroundColor: value,
    }),
  },
})
