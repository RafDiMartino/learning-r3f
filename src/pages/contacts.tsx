import Head from 'next/head'
import { MouseEvents } from 'component/components/mouse-events/MouseEvents'

export default function Home() {
  return (
    <>
      <Head>
        <title>Raf Di Martino | Contacts</title>
        <meta name="description" content="Raf Di Martino | Web Development Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <MouseEvents/>
    </> 
  )
}
