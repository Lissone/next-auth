import { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'

import '../styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
