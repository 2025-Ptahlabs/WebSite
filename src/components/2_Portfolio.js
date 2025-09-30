import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  // JSON 데이터에서 모든 고유 태그 추출
  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];


  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleProjectClick = (link) => {
    navigate(link);
  };

  const filteredItems = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">포트폴리오</h2>

        <div className="portfolio-filter">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            전체
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => handleFilterChange(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-item"
              onClick={() => handleProjectClick(item.link)}
              style={{ cursor: 'pointer' }}
            >
              {index === 0 && (
                <div
                  className="portfolio-placeholder"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#888',
                    fontWeight: 300,
                    fontSize: '1.2rem',
                    zIndex: 1,
                  }}
                >
                  PTAH LABS<br />Exhibition Sample
                </div>
              )}
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-image"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-location">{item.location}</p>
                <p className="portfolio-category">{item.category}</p>
                <div className="portfolio-tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="portfolio-tag">#{tag}</span>
                  ))}
                </div>
                <button className="btn">자세히 보기</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;