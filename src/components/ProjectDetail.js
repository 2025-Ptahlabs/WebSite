import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ProjectDetail = () => {
  const router = useRouter();
  const { projectId } = router.query;
  const [project, setProject] = useState(null);
  const [tagsData, setTagsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [exhibitImageIndexes, setExhibitImageIndexes] = useState({});

  // 런타임에 프로젝트 데이터와 태그 정의 로드
  useEffect(() => {
    const loadProject = async () => {
      try {
        // 태그 정의 로드
        const tagsRes = await fetch('./portfolio/tags.json');
        const tags = await tagsRes.json();
        setTagsData(tags);

        const res = await fetch(`./portfolio/${projectId}/data.json`);
        if (!res.ok) throw new Error('프로젝트를 찾을 수 없습니다.');

        const data = await res.json();

        // 이미지 경로를 절대 경로로 변환
        const projectData = {
          ...data,
          images: data.images?.map(img => `./portfolio/${projectId}/${img}`) || [],
          thumbnail: data.thumbnail ? `./portfolio/${projectId}/${data.thumbnail}` : '',
          detailedDescription: data.detailedDescription?.map(item => {
            if (typeof item === 'object' && item.type === 'image') {
              return {
                ...item,
                src: `./portfolio/${projectId}/${item.src}`
              };
            }
            return item;
          }) || data.detailedDescription,
          exhibits: data.exhibits?.map(exhibit => ({
            ...exhibit,
            images: exhibit.images?.map(img => `./portfolio/${projectId}/${img}`) || []
          })) || []
        };

        setProject(projectData);
      } catch (error) {
        console.error('프로젝트 로드 실패:', error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [projectId]);

  // 태그를 한글명으로 변환
  const getTagLabel = (tag) => {
    if (tagsData && tagsData.tags[tag]) {
      return tagsData.tags[tag].name;
    }
    return tag;
  };

  if (loading) {
    return (
      <div className="project-detail-container">
        <div className="container">
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="container">
          <h2>프로젝트를 찾을 수 없습니다.</h2>
          <button className="btn" onClick={() => router.push('/')}>
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="container">
        <div className="project-detail-content">
          <div className="project-header">
            <h1 className="project-detail-title">{project.title}</h1>
            <button className="btn-back" onClick={() => router.push('/')}>
              ← 포트폴리오로 돌아가기
            </button>
          </div>

          <div className="project-detail-meta">
            <span className="project-meta-item">
              <strong>년도:</strong> {project.year}
            </span>
            <span className="project-meta-item">
              <strong>위치:</strong> {project.location}
            </span>
            <div className="project-detail-tags">
              {project.tags.filter(tag => tag !== 'solution').map(tag => (
                <span key={tag} className="project-detail-tag">#{getTagLabel(tag)}</span>
              ))}
            </div>
          </div>

          {project.thumbnail && (
            <div className="project-thumbnail">
              <img src={project.thumbnail} alt={project.title} />
            </div>
          )}

          <div className="project-detail-description">
            {project.descriptionTitle && (
              <h4 className="project-subtitle">{project.descriptionTitle}</h4>
            )}
            {project.detailedDescription && (
              <div className="detailed-content">
                {Array.isArray(project.detailedDescription) ? (
                  project.detailedDescription.map((item, index) => {
                    // 새로운 구조: {type: "text"|"image", content|src: "..."}
                    if (typeof item === 'object' && item.type) {
                      if (item.type === 'text') {
                        return <p key={index}>{item.content}</p>;
                      } else if (item.type === 'image') {
                        return (
                          <div key={index} className="detailed-image">
                            <img src={item.src} alt={`상세 이미지 ${index + 1}`} />
                          </div>
                        );
                      }
                    }
                    // 기존 구조 호환: 문자열
                    return <p key={index}>{item}</p>;
                  })
                ) : (
                  project.detailedDescription.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                )}
              </div>
            )}
          </div>

          {project.exhibits && project.exhibits.length > 0 && (
            <div className="project-exhibits">
              <h3>전시물</h3>
              <div className="exhibits-grid">
                {project.exhibits.map((exhibit, index) => {
                  const currentImageIndex = exhibitImageIndexes[index] || 0;

                  return (
                    <div key={index} className="exhibit-card">
                      {exhibit.images && exhibit.images.length > 0 && (
                        <div className="exhibit-image-wrapper">
                          <div className="exhibit-image-container">
                            <img
                              src={exhibit.images[currentImageIndex]}
                              alt={`${exhibit.title} - ${currentImageIndex + 1}`}
                            />
                          </div>
                          {exhibit.images.length > 1 && (
                            <div className="exhibit-image-controls">
                              <button
                                className="exhibit-image-btn prev"
                                onClick={() => setExhibitImageIndexes(prev => ({
                                  ...prev,
                                  [index]: currentImageIndex === 0 ? exhibit.images.length - 1 : currentImageIndex - 1
                                }))}
                              >
                                ‹
                              </button>
                              <span className="exhibit-image-counter">
                                {currentImageIndex + 1} / {exhibit.images.length}
                              </span>
                              <button
                                className="exhibit-image-btn next"
                                onClick={() => setExhibitImageIndexes(prev => ({
                                  ...prev,
                                  [index]: currentImageIndex === exhibit.images.length - 1 ? 0 : currentImageIndex + 1
                                }))}
                              >
                                ›
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="exhibit-content">
                        <h4>{exhibit.title}</h4>
                        <p>{exhibit.description}</p>
                        {exhibit.tags && (
                          <div className="exhibit-tags">
                            {exhibit.tags.map(tag => (
                              <span key={tag} className="exhibit-tag">#{getTagLabel(tag)}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;