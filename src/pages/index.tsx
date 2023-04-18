import Head from 'next/head'
import { Hero } from 'component/components/hero/Hero'
import { Hero3JS } from 'component/components/hero/Hero3JS'
import { Portal } from 'component/components/portal/Portal'

export default function Home() {

  return (
    <>
      <Head>
        <title>Raf Di Martino | Portfolio</title>
        <meta name="description" content="Raf Di Martino | Web Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/test7.png" />
      </Head>
        
      <Hero3JS />
      {/* <div className="w-full text-center font-josefin ">Homepage</div> */}
      {/* <Hero /> */}
    </> 
  )
}
