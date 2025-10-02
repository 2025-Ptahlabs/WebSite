const fs = require('fs');
const path = require('path');

/**
 * public/portfolio 폴더의 모든 data.json 파일을 읽어서
 * src/data/projects.json으로 병합하는 스크립트
 */

const PORTFOLIO_DIR = path.join(__dirname, '../public/portfolio');
const OUTPUT_FILE = path.join(__dirname, '../src/data/projects.json');

function mergeProjects() {
  console.log(' 프로젝트 데이터를 검색 중...');

  // portfolio 폴더가 없으면 종료
  if (!fs.existsSync(PORTFOLIO_DIR)) {
    console.error('public/portfolio 폴더가 없습니다.');
    process.exit(1);
  }

  const projects = [];
  const folders = fs.readdirSync(PORTFOLIO_DIR);

  folders.forEach((folder) => {
    // _TEMPLATE 폴더는 제외
    if (folder.startsWith('_')) {
      console.log(`⏭️  ${folder} 건너뜀 (템플릿 폴더)`);
      return;
    }

    const folderPath = path.join(PORTFOLIO_DIR, folder);
    const dataFilePath = path.join(folderPath, 'data.json');

    // 폴더가 아니면 건너뜀
    if (!fs.statSync(folderPath).isDirectory()) {
      console.log(`⏭️  ${folder} 건너뜀 (폴더가 아님)`);
      return;
    }

    // data.json 파일이 없으면 경고
    if (!fs.existsSync(dataFilePath)) {
      console.warn(`⚠️  ${folder}/data.json 파일이 없습니다.`);
      return;
    }

    try {
      const rawData = fs.readFileSync(dataFilePath, 'utf-8');
      const projectData = JSON.parse(rawData);

      // 이미지 경로 변환: 상대 경로 → 절대 경로
      if (projectData.images) {
        projectData.images = projectData.images.map((img) =>
          `./images/portfolio/${folder}/${img}`
        );
      }

      if (projectData.thumbnail) {
        projectData.thumbnail = `./images/portfolio/${folder}/${projectData.thumbnail}`;
      }

      // exhibits 이미지 경로도 변환
      if (projectData.exhibits) {
        projectData.exhibits = projectData.exhibits.map((exhibit) => ({
          ...exhibit,
          images: exhibit.images.map((img) =>
            `./images/portfolio/${folder}/${img}`
          ),
        }));
      }

      projects.push(projectData);
      console.log(`✅ ${folder} 추가됨`);
    } catch (error) {
      console.error(`❌ ${folder}/data.json 파싱 오류:`, error.message);
    }
  });

  // 연도 내림차순 정렬 (최신 프로젝트가 먼저)
  projects.sort((a, b) => {
    const yearA = parseInt(a.year) || 0;
    const yearB = parseInt(b.year) || 0;
    if (yearB !== yearA) return yearB - yearA;

    // 같은 연도면 id로 정렬
    return b.id.localeCompare(a.id);
  });

  // JSON 파일로 저장
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projects, null, 2), 'utf-8');

  console.log(`\n✨ 총 ${projects.length}개 프로젝트가 병합되었습니다.`);
  console.log(`📝 출력 파일: ${OUTPUT_FILE}\n`);
}

// 실행
try {
  mergeProjects();
} catch (error) {
  console.error('❌ 오류 발생:', error);
  process.exit(1);
}
