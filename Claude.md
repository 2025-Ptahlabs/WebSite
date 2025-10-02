# PTAHLABS 웹사이트 개발 문서

**프로젝트명**: PTAHLABS 공식 웹사이트
**개발 기간**: 2025년 1월
**최종 업데이트**: 2025년 10월 2일 (태그 시스템 추가)
**기술 스택**: React, React Router, GitHub Pages

---

## 📋 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [주요 기능](#주요-기능)
5. [개발 가이드](#개발-가이드)
6. [배포 가이드](#배포-가이드)
7. [SEO 설정](#seo-설정)
8. [유지보수 가이드](#유지보수-가이드)

---

## 🎯 프로젝트 개요

PTAHLABS는 미디어아트와 디지털 전시 솔루션 전문 기업의 공식 웹사이트입니다.

### 주요 목적
- 회사 및 서비스 소개
- 프로젝트 포트폴리오 전시
- CI(Corporate Identity) 소개
- 고객 문의 접수

### 타겟 사용자
- 전시 기획자
- 박물관 및 미술관 관계자
- 문화 콘텐츠 제작자
- B2B 클라이언트

---

## 🛠 기술 스택

### Frontend
- **React** 19.1.0
- **React Router DOM** 7.8.2 (HashRouter)
- **CSS3** (순수 CSS, no framework)

### 빌드 & 배포
- **React Scripts** 5.0.1
- **GitHub Pages**
- **GitHub Actions** (자동 배포)

### 주요 라이브러리
- Font Awesome 6.4.0
- Google Fonts (Inter, Pretendard)

---

## 📁 프로젝트 구조

```
WebSite/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 배포 설정
├── public/
│   ├── images/
│   │   └── logo/               # 로고 이미지
│   ├── portfolio/              # 프로젝트 데이터 관리
│   │   ├── _TEMPLATE/          # 템플릿 폴더
│   │   │   ├── data.json       # 데이터 템플릿
│   │   │   └── README.md       # 상세 가이드
│   │   ├── 2024_Jecheon_Jummal/
│   │   │   ├── data.json       # 프로젝트 데이터
│   │   │   └── (이미지들)
│   │   ├── index.json          # 프로젝트 목록 (자동 생성)
│   │   ├── tags.json           # 태그 정의 및 카테고리
│   │   └── README.md           # 간단 가이드
│   ├── index.html              # HTML 템플릿 (SEO 메타 태그 포함)
│   ├── sitemap.xml             # 검색 엔진 sitemap (자동 생성)
│   └── robots.txt              # 크롤러 설정
├── scripts/
│   ├── generate-index.js       # 프로젝트 인덱스 자동 생성
│   ├── generate-sitemap.js     # Sitemap 자동 생성
│   ├── split-projects.js       # 프로젝트 분리 (1회용)
│   └── copy-images.js          # 이미지 복사 (1회용)
├── src/
│   ├── components/
│   │   ├── layouts/
│   │   │   ├── Header.js       # 네비게이션 헤더
│   │   │   └── Footer.js       # 푸터
│   │   ├── 1_Hero.js           # 메인 배너
│   │   ├── 2_Portfolio.js      # 포트폴리오 섹션
│   │   ├── 4_CI.js             # CI 소개 섹션
│   │   ├── 5_Contact.js        # 연락처 섹션
│   │   └── ProjectDetail.js    # 프로젝트 상세 페이지
│   ├── data/                   # (더 이상 사용 안 함)
│   ├── App.js                  # 라우팅 설정
│   ├── App.css                 # 전체 스타일
│   └── index.js                # React 엔트리 포인트
├── SEO_가이드.md               # SEO 최적화 가이드
├── Claude.md                   # 이 문서
├── README.md                   # 배포 가이드
└── package.json                # 의존성 및 스크립트

```

---

## ✨ 주요 기능

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 완벽 지원
- 햄버거 메뉴 (모바일)
- clamp() 함수로 유동적인 폰트 크기

### 2. 동적 포트폴리오
- **런타임 동적 로드**: 각 프로젝트의 data.json을 실시간으로 불러옴
- **폴더 기반 관리**: 프로젝트별 독립 폴더 (`public/portfolio/프로젝트명/`)
- **태그 시스템**: tags.json으로 중앙 관리, 한글명 자동 표시
- 태그 기반 필터링 (인터랙티브, 전시, 역사 등)
- 프로젝트 클릭 시 상세 페이지로 이동
- 위치 정보 표시

### 3. 라우팅
- **HashRouter** 사용 (GitHub Pages 호환)
- 메인 페이지: `/`
- 프로젝트 상세: `/#/project/:projectId`

### 4. SEO 최적화
- 메타 태그 (description, keywords, Open Graph, Twitter Card)
- Schema.org Structured Data (JSON-LD)
- Sitemap.xml 자동 생성
- robots.txt 설정

### 5. 자동 배포
- GitHub Actions를 통한 main 브랜치 자동 배포
- 프로젝트 인덱스 빌드 시 자동 생성
- Sitemap 빌드 시 자동 생성

---

## 💻 개발 가이드

### 설치

```bash
# 저장소 클론
git clone https://github.com/2025-Ptahlabs/ptahlabs.git
cd WebSite

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm start
```
- 로컬 서버: http://localhost:3000

### 빌드

```bash
npm run build
```
- 프로젝트 인덱스와 Sitemap이 자동으로 생성되고, build 폴더에 정적 파일 생성

### Sitemap 수동 생성

```bash
npm run sitemap
```

---

## 🚀 배포 가이드

### 자동 배포 (GitHub Actions)

**main 브랜치에 푸시하면 자동으로 배포됩니다.**

```bash
git add .
git commit -m "커밋 메시지"
git push origin main
```

GitHub Actions가 자동으로:
1. 의존성 설치
2. 프로젝트 인덱스 생성 (index.json)
3. Sitemap 생성
4. 프로젝트 빌드
5. gh-pages 브랜치에 배포

### 수동 배포

```bash
npm run deploy
```

---

## 🔍 SEO 설정

### 이미 완료된 설정
✅ sitemap.xml
✅ robots.txt
✅ Meta tags (description, keywords)
✅ Open Graph tags
✅ Twitter Card tags
✅ Schema.org JSON-LD
✅ Canonical URL

### 검색 엔진 등록 필요
아직 완료되지 않은 작업:

1. **Google Search Console 등록**
   - `/public/index.html` 34번 줄 주석 해제
   - Google verification 코드 입력

2. **네이버 서치 어드바이저 등록**
   - `/public/index.html` 31번 줄 주석 해제
   - 네이버 verification 코드 입력

3. **Sitemap 제출**
   - Google: https://search.google.com/search-console
   - 네이버: https://searchadvisor.naver.com/

자세한 내용은 `SEO_가이드.md`를 참고하세요.

---

## 🔧 유지보수 가이드

### 새 프로젝트 추가하기 (비개발자용)

**이제 개발 지식 없이도 쉽게 프로젝트를 추가할 수 있습니다!**

#### 1단계: 템플릿 복사
`/public/portfolio/_TEMPLATE/` 폴더를 복사해서 새 프로젝트 이름으로 변경
- 폴더명 형식: `2025_ProjectName` (연도_프로젝트명)

#### 2단계: data.json 수정
복사한 폴더의 `data.json` 파일을 텍스트 에디터로 열어서 수정:

```json
{
  "id": "2025_ProjectName",
  "title": "프로젝트 제목",
  "category": "전시",
  "tags": ["exhibition", "interactive"],
  "images": ["image1.jpg", "image2.jpg"],
  "thumbnail": "image1.jpg",
  "description": "짧은 설명",
  "year": "2025",
  "client": "클라이언트명",
  "location": "도시, 대한민국",
  "country": "KR",
  "lastmod": "2025-10-01"
}
```

**중요**:
- `id`는 폴더명과 동일하게!
- 이미지 경로는 파일명만 입력 (예: `"image1.jpg"`)
- **태그는 영문으로 입력**: `tags.json`에 정의된 태그 사용 (자동으로 한글 표시됨)
  - 예: `"interactive"` → 화면에 "인터랙티브"로 표시
  - 사용 가능한 태그: `interactive`, `media-art`, `kiosk`, `exhibition`, `history` 등
  - 새 태그 추가 시 `/public/portfolio/tags.json` 수정 필요

#### 3단계: 이미지 추가
프로젝트 폴더에 이미지 파일 복사

#### 4단계: 빌드 및 배포
```bash
npm run build           # 빌드 (index.json 자동 생성)
git add .
git commit -m "새 프로젝트 추가: 프로젝트명"
git push origin main
```

**자세한 가이드**: `/public/portfolio/README.md` 참고

### CI 정보 수정

`/src/components/4_CI.js` 파일 수정

### 연락처 수정

`/src/components/5_Contact.js` 파일 수정

### 스타일 수정

`/src/App.css` 파일에서 전역 스타일 수정

#### 주요 CSS 변수:
```css
:root {
  --primary-color: #28391A;    /* 진한 카키 */
  --secondary-color: #C2B8A3;  /* 베이지 */
  --accent-color: #7A845C;     /* 연한 카키 */
  --light-color: #FAF9F6;      /* 배경색 */
  --text-color: #2C2C2C;       /* 텍스트 */
}
```

---

## 🌈 디자인 시스템

### 색상 팔레트
- **Primary (진한 카키)**: #28391A - 로고, 제목, 버튼
- **Secondary (베이지)**: #C2B8A3 - 테두리, 서브 요소
- **Accent (연한 카키)**: #7A845C - 강조, 호버 상태
- **Light (배경)**: #FAF9F6 - 기본 배경
- **Text**: #2C2C2C - 본문 텍스트

### 타이포그래피
- **제목**: Inter (영문), Pretendard (한글)
- **본문**: Pretendard
- **크기**: clamp()로 반응형 처리

### 애니메이션
- **Transition**: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
- **Hover**: translateY, scale, box-shadow 효과

---

## 📊 성능 최적화

### 이미지 최적화
- WebP 포맷 권장
- 적절한 해상도로 압축
- Lazy loading 적용 고려

### 코드 최적화
- CSS는 모듈화되어 있지 않음 (필요시 CSS Modules로 전환 가능)
- React.memo 사용 고려
- 번들 크기 모니터링

---

## 🐛 알려진 이슈

### HashRouter 사용
- URL에 `#` 포함 (예: `https://ptahlabs.co.kr/#/project/xxx`)
- SEO에 약간 불리하지만, GitHub Pages에서 가장 안정적

### 대안
- BrowserRouter + 404.html 리다이렉트 (더 복잡함)
- 커스텀 도메인 + 서버 설정 (추천)

---

## 📞 문의 및 지원

- **개발 담당**: Claude (AI Assistant)
- **이슈 보고**: GitHub Issues
- **배포 문제**: GitHub Actions 로그 확인

---

## 📝 변경 이력

### 2025-10-02 (오후)
- **태그 시스템 중앙 관리**
- `tags.json` 추가: 모든 태그 정의를 중앙에서 관리
- 태그 카테고리: 기술(technology), 분야(genre), 솔루션(solution), 체험(experience)
- 각 태그에 한글명, 설명 추가 (예: `interactive` → `인터랙티브`)
- Portfolio/ProjectDetail/Solution 컴포넌트에서 한글명 자동 표시
- 솔루션 페이지 별도 분리 (`/solution`)
- 비콘 도슨트 솔루션 추가

### 2025-10-02 (오전)
- **런타임 동적 로드 방식으로 전환**
- 빌드 시 병합 불필요: 각 프로젝트 data.json을 런타임에 fetch
- `generate-index.js` 추가: 프로젝트 목록 자동 생성
- `merge-projects.js` 삭제: 더 이상 병합 과정 불필요
- `public/images/portfolio` 삭제: 이미지가 각 프로젝트 폴더로 이동
- Portfolio/ProjectDetail 컴포넌트: useEffect로 동적 로드
- Sitemap 스크립트: portfolio 폴더 직접 스캔으로 변경
- 프로젝트 추가 시 폴더만 생성하면 자동 인식

### 2025-10-01
- **비개발자용 포트폴리오 관리 시스템 구축**
- `/public/portfolio/` 폴더 구조로 개편
- 각 프로젝트가 독립 폴더로 관리 (data.json + 이미지)
- `merge-projects.js` 스크립트 추가 (자동 병합)
- 프로젝트 템플릿 및 가이드 작성
- 비개발자도 쉽게 프로젝트 추가/수정 가능

### 2025-01-30
- 초기 개발 완료
- 포트폴리오 시스템 구현
- JSON 기반 프로젝트 관리
- 태그 필터링 기능
- 프로젝트 상세 페이지
- SEO 최적화 완료
- 자동 배포 설정
- 동적 Sitemap 생성기

---

## 🎓 참고 자료

- [React 공식 문서](https://react.dev/)
- [React Router 문서](https://reactrouter.com/)
- [GitHub Pages 가이드](https://pages.github.com/)
- [SEO 가이드](./SEO_가이드.md)
- [배포 가이드](./README.md)

---

**이 문서는 Claude AI가 작성했습니다.**
**최종 검토**: 2025년 10월 2일