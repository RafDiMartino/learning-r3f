import Head from 'next/head'
import { Hero } from '../components/hero/Hero'

export default function Home() {

  return (
    <>
      <Head>
        <title>Raf Di Martino | Portfolio</title>
        <meta name="description" content="Raf Di Martino | Web Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
        
      {/* <div className="w-full text-center font-josefin ">Homepage</div> */}
      <Hero />
    </> 
  )
}
