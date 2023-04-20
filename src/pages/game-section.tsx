import Head from 'next/head'
import { Game } from 'component/components/game/Game'

export default function GameSection() {
  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="description" content="Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Game />
    </> 
  )
}