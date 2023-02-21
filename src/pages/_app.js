import '@/styles/globals.css'
import { useRouter } from 'next/router';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { colors } from 'customTheme';
import Navbar from '@/components/Navbar/Navbar';

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const currentRouter = router.pathname
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='light' />
      {/* {currentRouter === '/signin' ? null : <Navbar />} */}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
