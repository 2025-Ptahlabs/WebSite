import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projectsData, setProjectsData] = useState([]);
  const [tagsData, setTagsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 런타임에 프로젝트 데이터와 태그 정의 로드
  useEffect(() => {
    const loadProjects = async () => {
      try {
        // 1. 태그 정의 로드
        const tagsRes = await fetch('./portfolio/tags.json');
        const tags = await tagsRes.json();
        setTagsData(tags);

        // 2. 프로젝트 목록 가져오기
        const indexRes = await fetch('./portfolio/index.json');
        const projectIds = await indexRes.json();

        // 3. 각 프로젝트의 data.json 로드
        const projectPromises = projectIds.map(async (id) => {
          const res = await fetch(`./portfolio/${id}/data.json`);
          const data = await res.json();

          // 이미지 경로를 절대 경로로 변환
          return {
            ...data,
            images: data.images?.map(img => `./portfolio/${id}/${img}`) || [],
            thumbnail: data.thumbnail ? `./portfolio/${id}/${data.thumbnail}` : '',
            exhibits: data.exhibits?.map(exhibit => ({
              ...exhibit,
              images: exhibit.images?.map(img => `./portfolio/${id}/${img}`) || []
            })) || [],
            link: `/project/${id}`
          };
        });

        const projects = await Promise.all(projectPromises);

        // 연도 내림차순 정렬
        projects.sort((a, b) => {
          const yearA = parseInt(a.year) || 0;
          const yearB = parseInt(b.year) || 0;
          if (yearB !== yearA) return yearB - yearA;
          return b.id.localeCompare(a.id);
        });

        setProjectsData(projects);
      } catch (error) {
        console.error('프로젝트 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // JSON 데이터에서 모든 고유 태그 추출 (solution 제외)
  const allTags = [...new Set(projectsData.flatMap(project =>
    (project.tags || []).filter(tag => tag !== 'solution')
  ))];

  // 카테고리별로 태그 그룹화
  const getTagsByCategory = () => {
    if (!tagsData) return {};

    const grouped = {};
    allTags.forEach(tag => {
      const tagInfo = tagsData.tags[tag];
      if (tagInfo) {
        const category = tagInfo.category;
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(tag);
      }
    });
    return grouped;
  };

  const tagsByCategory = getTagsByCategory();

  // 태그를 한글명으로 변환
  const getTagLabel = (tag) => {
    if (tagsData && tagsData.tags[tag]) {
      return tagsData.tags[tag].name;
    }
    return tag;
  };

  // 카테고리명 가져오기
  const getCategoryName = (category) => {
    if (tagsData && tagsData.categories[category]) {
      return tagsData.categories[category].name;
    }
    return category;
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleProjectClick = (link) => {
    navigate(link);
  };

  const filteredItems = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.tags?.includes(activeFilter));

  if (loading) {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title">포트폴리오</h2>
          <p>로딩 중...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">포트폴리오</h2>

        <div className="portfolio-filter">
          {/* 전체 버튼 */}
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            전체
          </button>

          {/* 카테고리별 필터 */}
          {Object.entries(tagsByCategory).map(([category, tags]) => {
            // 태그 개수에 따른 애니메이션 속도 계산 (태그당 4초, 최소 20초)
            const duration = Math.max(20, tags.length * 4);

            return (
              <div key={category} className="filter-category">
                <span className="category-label">{getCategoryName(category)}</span>
                <div className="filter-category-scroll-wrapper">
                  <div
                    className="filter-category-scroll"
                    style={{ animationDuration: `${duration}s` }}
                  >
                    {[...tags, ...tags, ...tags].map((tag, index) => (
                      <button
                        key={`${tag}-${index}`}
                        className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
                        onClick={() => handleFilterChange(tag)}
                      >
                        {getTagLabel(tag)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
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
                <div className="portfolio-tags">
                  {item.tags.filter(tag => tag !== 'solution').map(tag => (
                    <span key={tag} className="portfolio-tag">#{getTagLabel(tag)}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;