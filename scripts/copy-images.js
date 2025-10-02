const fs = require('fs');
const path = require('path');

/**
 * public/images/portfolio 폴더의 이미지들을
 * public/portfolio/각 프로젝트 폴더로 복사
 */

const SOURCE_DIR = path.join(__dirname, '../public/images/portfolio');
const TARGET_DIR = path.join(__dirname, '../public/portfolio');

function copyImages() {
  console.log('이미지 파일을 복사 중...\n');

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error('public/images/portfolio 폴더가 없습니다.');
    process.exit(1);
  }

  const folders = fs.readdirSync(SOURCE_DIR);

  folders.forEach((folder) => {
    const sourcePath = path.join(SOURCE_DIR, folder);
    const targetPath = path.join(TARGET_DIR, folder);

    // 폴더가 아니면 건너뜀
    if (!fs.statSync(sourcePath).isDirectory()) {
      console.log(`건너뜀: ${folder} (폴더 아님)`);
      return;
    }

    // 타겟 폴더가 없으면 생성
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
      console.log(`폴더 생성: ${folder}/`);
    }

    // 이미지 파일 복사
    const files = fs.readdirSync(sourcePath);
    let copiedCount = 0;

    files.forEach((file) => {
      const sourceFile = path.join(sourcePath, file);
      const targetFile = path.join(targetPath, file);

      // 파일이면 복사
      if (fs.statSync(sourceFile).isFile()) {
        fs.copyFileSync(sourceFile, targetFile);
        copiedCount++;
      }
    });

    console.log(`${folder}: ${copiedCount}개 파일 복사 완료`);
  });

  console.log('\n이미지 복사 완료');
}

try {
  copyImages();
} catch (error) {
  console.error('오류 발생:', error);
  process.exit(1);
}
