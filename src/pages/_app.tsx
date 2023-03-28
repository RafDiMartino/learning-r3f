import { Layout } from 'component/components/layout/Layout'
import 'component/styles/globals.css'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </div>
  )
}
