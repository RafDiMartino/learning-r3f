import { Portfolio } from 'component/components/portfolio/Portfolio'
import PortfolioExperience from 'component/components/portfolio/PortfolioExperience'
import Head from 'next/head'

export default function SimplePortfolio() {
  return (
    <>
      <Head>
        <title>Simple Portfolio</title>
        <meta name="description" content="Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* <div className="flex-grow text-center font-josefin">Projects</div> */}

      <Portfolio/>
    </> 
  )
}