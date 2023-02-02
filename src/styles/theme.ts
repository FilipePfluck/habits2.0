import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    background: '#09090A',
    gray: {
      800: '#18181B',
      700: '#27272A',
    },
    purple: {
      900: '#4C1D95',
      800: '#5B21B6',
      700: '#6D28D9',
      600: '#7C3AED',
      500: '#8B5CF6',
      400: '#C4B5FD',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: 'gray.100',
        bg: 'background',
        lineHeight: 'base',
      },
      '*::placeholder': {
        color: 'gray.400',
      },
      '*, *::before, &::after': {
        borderColor: 'gray.200',
        wordWrap: 'break-word',
      },
      '*': {
        boxSizing: 'border-box',
      },
    }),
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: 'purple.600',
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          h: '8',
          w: '8',
          border: '2px',
          borderColor: 'gray.700',
          bg: 'gray.800',
          rounded: 'lg',
        },
        label: {
          color: 'white',
        },
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: 'gray.800',
          p: '6',
          pb: '8',
          borderRadius: 'lg',
        },
        header: {
          fontSize: '3xl',
          fontWeight: 'extrabold',
        },
      },
    },
  },
})
