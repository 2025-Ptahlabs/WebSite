import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === projectId);


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
            <p>{project.description}</p>
          </div>

          <div className="project-detail-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;