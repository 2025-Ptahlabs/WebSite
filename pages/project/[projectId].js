import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../src/components/layouts/Header'
import Footer from '../../src/components/layouts/Footer'
import ProjectDetail from '../../src/components/ProjectDetail'

export default function ProjectPage() {
  const router = useRouter()
  const { projectId } = router.query

  // projectId가 로드되지 않았을 때
  if (!projectId) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{projectId} - PTAHLABS</title>
        <meta name="description" content={`${projectId} 프로젝트 상세 정보`} />
        <link rel="canonical" href={`https://ptahlabs.co.kr/project/${projectId}/`} />
      </Head>

      <div className="App">
        <Header />
        <ProjectDetail />
        <Footer />
      </div>
    </>
  )
}
