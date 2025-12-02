import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Solution = () => {
  const [solutionProjects, setSolutionProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 런타임에 solution 태그 프로젝트만 로드
  useEffect(() => {
    const loadSolutions = async () => {
      try {

        const indexRes = await fetch('/portfolio/index.json');
        const projectIds = await indexRes.json();

        const projectPromises = projectIds.map(async (id) => {
          const res = await fetch(`/portfolio/${id}/data.json`);
          const data = await res.json();

          // isSolution: true인 프로젝트만 필터링
          if (data.isSolution === true) {
            return {
              ...data,
              images: data.images?.map(img => `/portfolio/${id}/${img}`) || [],
              thumbnail: data.thumbnail ? `/portfolio/${id}/${data.thumbnail}` : '',
              link: `/project/${id}`
            };
          }
          return null;
        });

        const projects = (await Promise.all(projectPromises)).filter(p => p !== null);

        // hidden: true인 프로젝트 제외
        const visibleProjects = projects.filter(project => !project.hidden);

        // 연도 내림차순 정렬
        visibleProjects.sort((a, b) => {
          const yearA = parseInt(a.year) || 0;
          const yearB = parseInt(b.year) || 0;
          if (yearB !== yearA) return yearB - yearA;
          return b.id.localeCompare(a.id);
        });

        setSolutionProjects(visibleProjects);
      } catch (error) {
        console.error('솔루션 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSolutions();
  }, []);

  const handleProjectClick = (link) => {
    router.push(link);
  };

  // 파일이 비디오인지 확인
  const isVideo = (filename) => {
    if (!filename) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
    return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
  };

  if (loading) {
    return (
      <div className="solution-page">
        <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
          <h2 className="section-title">솔루션</h2>
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="solution-page">
      <div className="container" style={{ paddingTop: '200px', paddingBottom: '80px', minHeight: '100vh' }}>
        <h2 className="section-title">솔루션</h2>
        <div className="solution-intro">
          <h3 className="solution-subtitle">즉시 도입 가능한 디지털 솔루션 제품</h3>
          <p className="solution-description">
            PTAHLABS는 전시관, 박물관, 체험관을 위한 검증된 <span className="highlight">솔루션 제품</span>을 제공합니다.<br />
            각 솔루션은 커스터마이징 옵션을 포함하고 있어 귀사의 환경에 맞게 조정할 수 있습니다.
          </p>
        </div>

        <div className="solution-grid">
          {solutionProjects.map((item) => (
            <div
              key={item.id}
              className="solution-card"
              onClick={() => handleProjectClick(item.link)}
            >
              <div className="solution-card-image">
                {item.thumbnail ? (
                  isVideo(item.thumbnail) ? (
                    <video
                      src={item.thumbnail}
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  ) : (
                    <img src={item.thumbnail} alt={item.title} />
                  )
                ) : (
                  <div className="solution-card-placeholder">
                    <span>{item.title}</span>
                  </div>
                )}
              </div>
              <div className="solution-card-content">
                <h3 className="solution-card-title">{item.title}</h3>
                <p className="solution-card-description">{item.description}</p>
                <span className="solution-card-link">자세히 보기 →</span>
              </div>
            </div>
          ))}
        </div>

        {solutionProjects.length === 0 && (
          <p style={{ textAlign: 'center', padding: '40px 0' }}>
            등록된 솔루션이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
};

export default Solution;
