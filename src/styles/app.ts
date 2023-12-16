import { keyframes, styled } from '.'

export const Container = styled('div', {
  maxWidth: '1376px',
  width: '100%',
  margin: '0 auto',
  padding: '2rem',
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Header = styled('header', {
  maxWidth: '1300px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  '& nav': {
    display: 'flex',
    alignItems: 'center',
    gap: '4.063rem',
    position: 'relative',
    zIndex: 999,

    '& ul': {
      display: 'none',
      fontSize: '$base',
      color: '$white',

      '@desktop': {
        display: 'flex',
        gap: '2.813rem',
        alignItems: 'center',
      },
    },
  },
})

export const NavItemWithDropdownWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
  position: 'relative',
  cursor: 'pointer',
})

export const DropdownWrapper = styled('div', {
  top: 43,
  left: 0,
  maxWidth: '1300px',
  width: '100vw',
  backgroundColor: '$indigo800',
  position: 'absolute',
  height: 260,
  opacity: 0,
  visibility: 'hidden',
})

export const DropdownContentWrapper = styled('div', {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',

  '& > strong': {
    fontSize: '$xl',
    lineHeight: '22px',
    fontWeight: '500',
  },

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
  },

  '& > div:nth-child(2)': {
    marginRight: 44,
  },

  '& div > div:has(img)': {
    marginTop: 21,
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '1rem',

    '& a': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
  },
})

export const BudgetButton = styled('button', {
  display: 'none',

  '@desktop': {
    display: 'flex',
    gap: '0.313rem',
    maxWidth: '132px',
    width: '100%',
    height: '42px',
    borderRadius: '7px',
    color: '$white',
    fontSize: '$sm',
    backgroundColor: '$darkWhite',
    padding: '12px 18px',
    marginLeft: 'auto',
    fontWeight: '500',
  },
})

export const BudgetButtonMobile = styled('button', {
  marginLeft: 'auto',
  backgroundColor: '$orange600',
  maxWidth: '41px',
  width: '100%',
  height: '41px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  position: 'relative',
  zIndex: 999,

  '@desktop': {
    display: 'none',
  },
})

export const MobileMenuButton = styled('button', {
  marginLeft: '23px',
  display: 'block',
  position: 'relative',
  zIndex: 999,

  '@desktop': {
    display: 'none',
  },
})

export const MobileMenuContentWrapper = styled('div', {
  position: 'absolute',
  backgroundColor: '$indigo800',
  top: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
  zIndex: 998,
  width: '100vw',
  height: '100vh',

  '& strong:first-child': {
    marginTop: 86,
  },

  '& strong:nth-child(3)': {
    marginTop: 34,
  },

  '& > strong': {
    display: 'block',
    color: '$white',
    fontSize: '1.5rem',
    lineHeight: '22px',
    fontWeight: '500',
  },

  '& > nav': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: ' flex-start',
    marginTop: 34,
    color: '$white',
    gap: '19px',
    fontSize: '$base',
  },
})

export const MobileCatalogWrapper = styled('div', {
  marginTop: 46,

  '& strong': {
    fontSize: '$base',
    color: '$white',
  },

  '& nav ': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginTop: '2.188rem',

    '& > a': {
      color: '$lightWhite',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
  },
})

export const DotsWrapper = styled('div', {
  position: 'absolute',
  right: -398,
  top: -35,
  display: 'none',

  '@desktop': {
    display: 'block',
  },
})

export const DotsWrapperMobile = styled('div', {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: -182,
  display: 'block',

  '@desktop': {
    display: 'none',
  },
})

export const ScienceWrapper = styled('div', {
  position: 'absolute',
  left: -222,
  top: 250,

  display: 'none',

  '@desktop': {
    display: 'block',
  },
})

export const Divider = styled('div', {
  maxWidth: '1300px',
  width: '100%',
  height: '1px',
  backgroundColor: '$gray300',
  marginTop: '2.188rem',
  marginBottom: 65,
})

export const MobileOnlyTextWrapper = styled('div', {
  marginTop: 118,

  '& strong': {
    fontSize: '$2xl',
    color: '#E3F7FF',
    fontWeight: '400',
    maxWidth: '302px',
    display: 'block',
    lineHeight: '125.2%',

    '& span': {
      color: '#48C7F3',
    },
  },

  '& p': {
    marginTop: 10,
    color: '$white',
    fontSize: '$base',
    maxWidth: '231px',
    lineHeight: '157.7%',
  },

  '@desktop': {
    display: 'none',
  },
})

const pulsatingButton = keyframes({
  '0%': {
    backgroundColor: '$gray300',
  },
  '50%': {
    backgroundColor: '$gray400',
  },
  '100%': {
    backgroundColor: '$gray300',
  },
})

export const Loader = styled('div', {
  maxWidth: '375px',
  width: '100%',
  height: '258px',
  borderRadius: '10px',
  animation: `${pulsatingButton} 2s ease-in-out infinite`,
  backgroundColor: '$gray300',
})
