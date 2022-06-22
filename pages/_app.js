import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="Z1Vrj5PeokKV2uEuyfqqIe34MWXJrIv3b4dAyetq"
      serverUrl="https://gz8cqdwnzwll.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
