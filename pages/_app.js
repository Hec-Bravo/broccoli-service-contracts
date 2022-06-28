import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider
        appId="toBK0V9wq4sXDfKOhSKCZ3K88LzZo5ePgrlV8ckv"
        serverUrl="https://o805yvw97ilt.usemoralis.com:2053/server"
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>

  )
}

export default MyApp
