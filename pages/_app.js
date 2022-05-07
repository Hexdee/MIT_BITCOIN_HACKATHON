import '../styles/globals.css'
import { initializeContract } from "../utils/near"

function MyApp({ Component, pageProps }) {
  if (typeof(window) == 'object')
    window.nearInitPromise = initializeContract();
  return <Component {...pageProps} />
}

export default MyApp
