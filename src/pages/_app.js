import '@/styles/globals.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { colors } from '../../customTheme';

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='light' />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
