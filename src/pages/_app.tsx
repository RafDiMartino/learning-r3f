import { Layout } from 'component/components/layout/Layout'
import 'component/styles/globals.css'
import type { AppProps } from 'next/app'
import { Josefin_Sans, Playfair_Display, Fira_Mono } from 'next/font/google'

export const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans'
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display'
})

export const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  subsets: ['latin'],
  variable: '--font-fira-mono'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${josefinSans.variable} ${playfairDisplay.variable} ${firaMono.variable} flex flex-col justify-center items-center min-h-screen`} >
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </div>
  )
}
