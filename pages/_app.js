import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider
        appId="SfMAKqEEK519WUxMlTuj1ZPbeNTdckKnKWtILykp"
        serverUrl="https://tobkm26zyzah.usemoralis.com:2053/server"
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>

  )
}

export default MyApp
