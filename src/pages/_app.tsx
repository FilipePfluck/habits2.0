import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../contexts/Authcontext'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
