import { Layout } from 'component/components/layout/Layout'
import 'component/styles/globals.css'
import type { AppProps } from 'next/app'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans'
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${josefinSans.variable} ${playfairDisplay.variable} flex flex-col justify-center items-center h-screen`} >
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </div>
  )
}
