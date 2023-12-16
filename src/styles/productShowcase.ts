import { styled } from '.'

export const ProductShowcaseWrapper = styled('div', {
  marginTop: 30,

  '& > strong': {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: '$xl',
    color: '$indigo800',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    gap: '2rem',
    marginTop: '2rem',
    marginBottom: '2rem',

    '@desktop': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      justifyItems: 'start',
      display: 'grid',
    },
  },

  '& > img': {
    marginTop: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    '@desktop': {
      display: 'none',
    },
  },

  '@desktop': {
    marginTop: 150,
  },
})

export const ProductSingleCard = styled('div', {
  maxWidth: '375px',
  width: '100%',
  borderRadius: '0 0 10px 10px',
  backgroundColor: '$white',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  fontFamily: 'var(--font-roboto), sans-serif',

  '& > div': {
    padding: '18px',

    '& strong': {
      color: '$sunsetOrange',
      fontSize: '$lg',
      fontWeight: '500',
    },

    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      '& span:first-child': {
        color: '$gray400',
        fontSize: '$xs',
      },

      '& span:last-child': {
        color: '$sunsetOrange',
        fontSize: '$lg',
        fontWeight: '500',
      },
    },
  },

  '& > img': {
    borderRadius: '10px 10px 0 0',
    width: '376px',
    height: '178px',
    objectFit: 'cover',
  },
})
