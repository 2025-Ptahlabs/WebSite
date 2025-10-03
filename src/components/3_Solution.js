import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Solution = () => {
  const [solutionProjects, setSolutionProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 런타임에 solution 태그 프로젝트만 로드
  useEffect(() => {
    const loadSolutions = async () => {
      try {

        const indexRes = await fetch('./portfolio/index.json');
        const projectIds = await indexRes.json();

        const projectPromises = projectIds.map(async (id) => {
          const res = await fetch(`./portfolio/${id}/data.json`);
          const data = await res.json();

          // solution 태그가 있는 프로젝트만 필터링
          if (data.tags?.includes('solution')) {
            return {
              ...data,
              images: data.images?.map(img => `./portfolio/${id}/${img}`) || [],
              thumbnail: data.thumbnail ? `./portfolio/${id}/${data.thumbnail}` : '',
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
    navigate(link);
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
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
        <h2 className="section-title">솔루션</h2>
        <p className="section-description">
          전시관을 위한 맞춤형 디지털 솔루션을 제공합니다
        </p>

        <div className="portfolio-grid">
          {solutionProjects.map((item) => (
            <div
              key={item.id}
              className="portfolio-item"
              onClick={() => handleProjectClick(item.link)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{item.title}</h3>
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
