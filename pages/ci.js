import Head from 'next/head'
import Header from '../src/components/layouts/Header'
import CI from '../src/components/4_CI'
import Footer from '../src/components/layouts/Footer'

export default function CIPage() {
  return (
    <>
      <Head>
        <title>CI 소개 - PTAHLABS</title>
        <meta name="description" content="PTAHLABS의 브랜드 아이덴티티와 철학" />
        <link rel="canonical" href="https://ptahlabs.co.kr/ci/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ptahlabs.co.kr/ci/" />
        <meta property="og:title" content="CI 소개 - PTAHLABS" />
        <meta property="og:description" content="PTAHLABS의 브랜드 아이덴티티와 철학" />
      </Head>

      <div className="App">
        <Header />
        <div style={{ paddingTop: '80px' }}>
          <CI />
        </div>
        <Footer />
      </div>
    </>
  )
}
