import Head from 'next/head'
import {Physic} from "component/components/physics/Physic"

export default function Physics() {
  return (
    <>
      <Head>
        <title>Portal Scene</title>
        <meta name="description" content="Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Physic />
    </> 
  )
}