import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MoralisProvider
        appId="sOMWpKbgvRz63TbpvbBWTHSuyO0x3M8dgrKov5oU"
        serverUrl="https://p1z199cgr55t.usemoralis.com:2053/server"
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </ChakraProvider>

  )
}

export default MyApp
