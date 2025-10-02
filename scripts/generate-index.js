const fs = require('fs');
const path = require('path');

/**
 * public/portfolio 폴더를 스캔해서
 * index.json을 자동 생성하는 스크립트
 */

const PORTFOLIO_DIR = path.join(__dirname, '../public/portfolio');
const OUTPUT_FILE = path.join(PORTFOLIO_DIR, 'index.json');

function generateIndex() {
  console.log('프로젝트 인덱스 생성 중...');

  if (!fs.existsSync(PORTFOLIO_DIR)) {
    console.error('public/portfolio 폴더가 없습니다.');
    process.exit(1);
  }

  const folders = fs.readdirSync(PORTFOLIO_DIR);
  const projectIds = [];

  folders.forEach((folder) => {
    // _로 시작하는 폴더와 파일 제외
    if (folder.startsWith('_') || folder === 'index.json' || folder === 'README.md') {
      return;
    }

    const folderPath = path.join(PORTFOLIO_DIR, folder);

    // 폴더가 아니면 제외
    if (!fs.statSync(folderPath).isDirectory()) {
      return;
    }

    // data.json이 있는 폴더만 포함
    const dataFilePath = path.join(folderPath, 'data.json');
    if (fs.existsSync(dataFilePath)) {
      projectIds.push(folder);
    }
  });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(projectIds, null, 2), 'utf-8');
  console.log(`${projectIds.length}개 프로젝트 인덱스 생성 완료: ${OUTPUT_FILE}`);
}

try {
  generateIndex();
} catch (error) {
  console.error('오류 발생:', error);
  process.exit(1);
}
