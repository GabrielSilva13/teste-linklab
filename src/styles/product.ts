import { styled } from '.'

export const ProductWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0',
  flexDirection: 'column',
  zIndex: 2,
  position: 'relative',

  '@desktop': {
    marginTop: '-318px',
    flexDirection: 'row',
  },
})

export const ProductCard = styled('div', {
  maxWidth: '361px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  padding: '43px 28px 43px 35px',
  height: '115px',
  position: 'relative',

  '& > strong': {
    fontSize: '$lg',
    textTransform: 'uppercase',
    fontWeight: '700',
    display: 'none',

    '@desktop': {
      display: 'block',
    },
  },

  '& div': {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.875rem',
    alignItems: 'center',

    '& strong': {
      fontSize: '$lg',
      fontWeight: '400',
      maxWidth: '129px',

      '@desktop': {
        fontSize: '$3xl',
        maxWidth: 'unset',
      },
    },

    '@desktop': {
      maxWidth: '433px',
      flexDirection: 'column',
      marginTop: 'auto',
      alignItems: 'flex-start',
    },
  },

  '@desktop': {
    flexDirection: 'column',
    padding: '91px 69px 41px 69px',
    height: '509px',
  },
})

export const ProductCardDotsWrapper = styled('div', {
  position: 'absolute',
  right: 5,
  top: '50%',
  transform: 'translateY(-50%)',

  '@desktop': {
    display: 'none !important',
  },
})
