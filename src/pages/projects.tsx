import Head from 'next/head'
import {Portal} from "component/components/portal/Portal"

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal Scene</title>
        <meta name="description" content="Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <div className="flex-grow text-center font-josefin">Projects</div> */}

      <Portal />
    </> 
  )
}
