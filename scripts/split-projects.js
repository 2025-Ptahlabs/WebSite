const fs = require('fs');
const path = require('path');

/**
 * src/data/projects.json을 읽어서
 * public/portfolio/각 프로젝트 폴더로 분리하는 스크립트
 */

const PROJECTS_FILE = path.join(__dirname, '../src/data/projects.json');
const PORTFOLIO_DIR = path.join(__dirname, '../public/portfolio');

function splitProjects() {
  console.log('📦 프로젝트 데이터를 분리 중...\n');

  // projects.json 읽기
  if (!fs.existsSync(PROJECTS_FILE)) {
    console.error('❌ src/data/projects.json 파일이 없습니다.');
    process.exit(1);
  }

  const projectsData = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf-8'));

  // portfolio 폴더 확인 (없으면 생성)
  if (!fs.existsSync(PORTFOLIO_DIR)) {
    fs.mkdirSync(PORTFOLIO_DIR, { recursive: true });
  }

  projectsData.forEach((project) => {
    const projectFolder = path.join(PORTFOLIO_DIR, project.id);

    // 폴더 생성 (이미 있어도 무시)
    if (!fs.existsSync(projectFolder)) {
      fs.mkdirSync(projectFolder, { recursive: true });
      console.log(`📁 폴더 생성: ${project.id}/`);
    } else {
      console.log(`📁 폴더 존재: ${project.id}/`);
    }

    // 이미지 경로를 상대 경로로 변환
    const cleanProject = { ...project };

    // link 필드 제거 (불필요)
    delete cleanProject.link;

    // images 경로 변환: ./images/portfolio/폴더명/파일명 → 파일명
    if (cleanProject.images) {
      cleanProject.images = cleanProject.images.map((img) => {
        const fileName = path.basename(img);
        return fileName;
      });
    }

    // thumbnail 경로 변환
    if (cleanProject.thumbnail) {
      const fileName = path.basename(cleanProject.thumbnail);
      cleanProject.thumbnail = fileName;
    }

    // exhibits 이미지 경로 변환
    if (cleanProject.exhibits) {
      cleanProject.exhibits = cleanProject.exhibits.map((exhibit) => ({
        ...exhibit,
        images: exhibit.images.map((img) => path.basename(img)),
      }));
    }

    // data.json 파일 생성
    const dataFilePath = path.join(projectFolder, 'data.json');
    fs.writeFileSync(dataFilePath, JSON.stringify(cleanProject, null, 2), 'utf-8');
    console.log(`✅ ${project.id}/data.json 생성 완료\n`);
  });

  console.log(`\n✨ 총 ${projectsData.length}개 프로젝트가 분리되었습니다.`);
  console.log(`📂 위치: ${PORTFOLIO_DIR}\n`);
}

// 실행
try {
  splitProjects();
} catch (error) {
  console.error('❌ 오류 발생:', error);
  process.exit(1);
}
