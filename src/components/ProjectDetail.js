import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === projectId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="container">
          <h2>프로젝트를 찾을 수 없습니다.</h2>
          <button className="btn" onClick={() => navigate('/')}>
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="container">
        <button className="btn-back" onClick={() => navigate('/')}>
          ← 포트폴리오로 돌아가기
        </button>

        <div className="project-detail-content">
          <h1 className="project-detail-title">{project.title}</h1>

          <div className="project-detail-meta">
            <span className="project-meta-item">
              <strong>년도:</strong> {project.year}
            </span>
            <span className="project-meta-item">
              <strong>위치:</strong> {project.location}
            </span>
            <span className="project-meta-item">
              <strong>클라이언트:</strong> {project.client}
            </span>
            <span className="project-meta-item">
              <strong>카테고리:</strong> {project.category}
            </span>
          </div>

          <div className="project-detail-tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-detail-tag">#{tag}</span>
            ))}
          </div>

          <div className="project-detail-description">
            <h3>프로젝트 개요</h3>
            <p>{project.description}</p>
            {project.detailedDescription && (
              <div className="detailed-content">
                {project.detailedDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>

          <div className="project-detail-gallery">
            <div className="gallery-main">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - ${currentImageIndex + 1}`}
              />
              {project.images.length > 1 && (
                <div className="gallery-controls">
                  <button
                    className="gallery-btn prev"
                    onClick={() => setCurrentImageIndex(prev =>
                      prev === 0 ? project.images.length - 1 : prev - 1
                    )}
                  >
                    ‹
                  </button>
                  <span className="gallery-counter">
                    {currentImageIndex + 1} / {project.images.length}
                  </span>
                  <button
                    className="gallery-btn next"
                    onClick={() => setCurrentImageIndex(prev =>
                      prev === project.images.length - 1 ? 0 : prev + 1
                    )}
                  >
                    ›
                  </button>
                </div>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="gallery-thumbnails">
                {project.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {project.exhibits && project.exhibits.length > 0 && (
            <div className="project-exhibits">
              <h3>전시물</h3>
              <div className="exhibits-grid">
                {project.exhibits.map((exhibit, index) => (
                  <div key={index} className="exhibit-card">
                    {exhibit.images && exhibit.images.length > 0 && (
                      <div className="exhibit-image">
                        <img src={exhibit.images[0]} alt={exhibit.title} />
                      </div>
                    )}
                    <div className="exhibit-content">
                      <h4>{exhibit.title}</h4>
                      <p>{exhibit.description}</p>
                      {exhibit.tags && (
                        <div className="exhibit-tags">
                          {exhibit.tags.map(tag => (
                            <span key={tag} className="exhibit-tag">#{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;