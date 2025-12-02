import Head from 'next/head'
import Header from '../src/components/layouts/Header'
import History from '../src/components/6_History'
import Footer from '../src/components/layouts/Footer'

export default function HistoryPage() {
  return (
    <>
      <Head>
        <title>연혁 - PTAHLABS</title>
        <meta name="description" content="PTAHLABS의 발자취와 프로젝트 이력" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ptahlabs.co.kr/history/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ptahlabs.co.kr/history/" />
        <meta property="og:title" content="연혁 - PTAHLABS" />
        <meta property="og:description" content="PTAHLABS의 발자취와 프로젝트 이력" />
      </Head>

      <div className="App">
        <Header />
        <div style={{ paddingTop: '80px' }}>
          <History />
        </div>
        <Footer />
      </div>
    </>
  )
}
