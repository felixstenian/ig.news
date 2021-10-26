import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/global'
import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
