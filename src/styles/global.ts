import { globalCss } from '.'

export const globalStyles = globalCss({
  '*, *::after, *::before': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  '*:focus': {
    outline: 0,
    boxShadow: '0 0 0 2px #84C4EA',
  },

  '::-webkit-scrollbar': {
    width: '10px ' /* Largura da scrollbar */,
  },

  /* Cor de fundo da scrollbar */
  '::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },

  /* Cor do botão da scrollbar */
  '::-webkit-scrollbar-thumb': {
    background: '$sunsetOrange',
    borderRadius: 5,
  },

  '.overflow-hidden': {
    overflow: 'hidden !important',
  },

  html: {
    overflowX: 'hidden',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    'text-rendering': 'optimizelegibility',
    fontFamily: 'var(--font-dm-sans), sans-serif',
    overflowX: 'hidden',
  },

  li: {
    listStyle: 'none',
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },

  button: {
    outline: 'none',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: 0,
    fontFamily: 'var(--font-dm-sans), sans-serif',
  },

  img: {
    maxWidth: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    fontStyle: 'italic',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    shapeMargin: '1rem',
  },
})
