import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="SfMAKqEEK519WUxMlTuj1ZPbeNTdckKnKWtILykp"
      serverUrl="https://tobkm26zyzah.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
