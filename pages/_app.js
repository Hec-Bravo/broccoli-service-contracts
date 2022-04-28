import '../styles/globals.css'
import { MoralisProvider } from "react-moralis"


function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="SXd06lCabGL2vEMiUGo6ltcHQmVB1r8kabTVomOm"
      serverUrl="https://btos2ep69nlf.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
