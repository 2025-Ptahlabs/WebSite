const fs = require('fs');
const path = require('path');

// projects.json 읽기
const projectsData = require('../src/data/projects.json');

// 현재 날짜를 YYYY-MM-DD 형식으로
const today = new Date().toISOString().split('T')[0];

// Sitemap XML 생성
const generateSitemap = () => {
  const baseUrl = 'https://ptahlabs.co.kr';

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#portfolio</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#ci</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;

  // 프로젝트 페이지들 추가
  projectsData.forEach(project => {
    sitemap += `  <url>
    <loc>${baseUrl}/#${project.link}</loc>
    <lastmod>${project.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  sitemap += `</urlset>`;

  // public/sitemap.xml에 저장
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');

  console.log('✅ Sitemap이 성공적으로 생성되었습니다:', sitemapPath);
};

generateSitemap();