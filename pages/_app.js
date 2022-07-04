import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider
        appId="tuGwyQy8jr63Ay4LWDtmbouozYBI4U8BzzkV72wA"
        serverUrl="https://a50xlxfmkgex.usemoralis.com:2053/server"
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>

  )
}

export default MyApp
