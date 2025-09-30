# SEO 최적화 가이드

이 문서는 PTAHLABS 웹사이트의 검색 엔진 최적화(SEO) 설정 및 관리 가이드입니다.

## 🎯 이미 완료된 SEO 설정

### 1. 기본 SEO 설정
- ✅ sitemap.xml 생성 및 배치 (`/public/sitemap.xml`)
- ✅ robots.txt 생성 및 배치 (`/public/robots.txt`)
- ✅ 메타 태그 최적화 (description, keywords, Open Graph, Twitter Card)
- ✅ Semantic HTML (h1, section 태그 등)
- ✅ Schema.org Structured Data (JSON-LD)

### 2. 설정 내용
- **언어 설정**: `<html lang="ko">`
- **정규 URL**: `<link rel="canonical" href="https://ptahlabs.com/" />`
- **키워드**: 미디어아트, 인터랙티브 전시, 디지털 전시, XR, AR, VR 등
- **소셜 미디어 최적화**: Open Graph, Twitter Card 메타 태그

---

## 📋 검색 엔진 등록 가이드

### 1. Google Search Console 등록

#### 1단계: Google Search Console 접속
1. https://search.google.com/search-console 접속
2. Google 계정으로 로그인

#### 2단계: 속성 추가
1. "속성 추가" 클릭
2. "URL 접두어" 선택: `https://ptahlabs.com` 입력

#### 3단계: 소유권 확인
**방법 1: HTML 파일 업로드**
- Google이 제공하는 HTML 파일을 `/public` 폴더에 업로드
- 빌드 및 배포 후 확인 클릭

**방법 2: HTML 태그** (권장)
1. Google이 제공하는 메타 태그 복사
2. `/public/index.html` 파일에서 34번 줄 주석 해제:
```html
<meta name="google-site-verification" content="여기에_발급받은_코드_입력" />
```
3. 발급받은 코드로 교체
4. 빌드 및 배포 후 확인 클릭

#### 4단계: Sitemap 제출
1. 좌측 메뉴에서 "Sitemaps" 클릭
2. 새 사이트맵 추가: `https://ptahlabs.com/sitemap.xml`
3. "제출" 클릭

### 2. 네이버 서치 어드바이저 등록

#### 1단계: 네이버 서치 어드바이저 접속
1. https://searchadvisor.naver.com/ 접속
2. 네이버 계정으로 로그인

#### 2단계: 사이트 등록
1. "웹마스터 도구" 클릭
2. 사이트 URL 입력: `https://ptahlabs.com`
3. "추가" 클릭

#### 3단계: 소유권 확인
**HTML 태그 방식** (권장)
1. 네이버가 제공하는 메타 태그 복사
2. `/public/index.html` 파일에서 31번 줄 주석 해제:
```html
<meta name="naver-site-verification" content="여기에_발급받은_코드_입력" />
```
3. 발급받은 코드로 교체
4. 빌드 및 배포 후 "소유확인" 클릭

#### 4단계: Sitemap 제출
1. 좌측 메뉴에서 "요청" > "사이트맵 제출" 클릭
2. 사이트맵 URL 입력: `https://ptahlabs.com/sitemap.xml`
3. "확인" 클릭

#### 5단계: RSS 제출 (선택사항)
- 블로그나 뉴스가 있는 경우 RSS 피드 제출

### 3. 다음(Daum) 검색 등록

#### 방법 1: 자동 등록 (권장)
- robots.txt와 sitemap.xml이 있으면 자동으로 크롤링됨
- 별도 등록 불필요

#### 방법 2: 수동 등록
1. https://register.search.daum.net/index.daum 접속
2. 사이트 URL 입력 및 제출

---

## 🚀 배포 후 체크리스트

### 배포 직후
- [ ] Google Search Console에 사이트 등록
- [ ] 네이버 서치 어드바이저에 사이트 등록
- [ ] Sitemap 제출 (Google, 네이버)
- [ ] robots.txt 접근 확인: `https://ptahlabs.com/robots.txt`
- [ ] sitemap.xml 접근 확인: `https://ptahlabs.com/sitemap.xml`

### 1주일 후
- [ ] Google Search Console에서 색인 생성 상태 확인
- [ ] 네이버 서치 어드바이저에서 수집 현황 확인
- [ ] "site:ptahlabs.com" 검색으로 구글 색인 확인
- [ ] 네이버에서 "프타랩스" 검색으로 노출 확인

### 1개월 후
- [ ] 검색 성능 리포트 확인 (클릭수, 노출수, CTR)
- [ ] 주요 키워드 순위 확인
- [ ] 크롤링 오류 확인 및 수정

---

## 📊 SEO 성과 모니터링

### Google Search Console에서 확인할 지표
1. **실적 리포트**
   - 총 클릭수
   - 총 노출수
   - 평균 CTR
   - 평균 게재순위

2. **URL 검사**
   - 특정 페이지의 색인 상태 확인
   - 색인 생성 요청

3. **커버리지**
   - 색인 생성된 페이지 수
   - 제외된 페이지 및 이유

### 네이버 서치 어드바이저에서 확인할 지표
1. **수집 현황**
   - 전체 URL 수집 현황
   - 수집 대기/완료/제외 URL

2. **검색 반영**
   - 웹문서 수집 통계
   - 사이트 최적화 분석

---

## 💡 추가 SEO 최적화 팁

### 1. 콘텐츠 품질 향상
- 각 프로젝트 페이지에 상세한 설명 추가
- 고유하고 가치 있는 콘텐츠 작성
- 키워드를 자연스럽게 포함

### 2. 이미지 최적화
- 모든 이미지에 alt 텍스트 추가
- 이미지 파일명을 의미 있게 작성 (예: `busan-democracy-exhibition.jpg`)
- WebP 포맷 사용으로 용량 최적화

### 3. 페이지 속도 개선
- Google PageSpeed Insights로 속도 측정
- 이미지 압축 및 지연 로딩
- 불필요한 JavaScript 제거

### 4. 내부 링크 구조
- 관련 프로젝트 간 링크 추가
- 중요한 페이지로 향하는 링크 증가
- Breadcrumb 네비게이션 추가

### 5. 모바일 최적화
- 반응형 디자인 확인
- 모바일에서 터치 요소 크기 확인
- 모바일 페이지 속도 개선

### 6. 지속적인 콘텐츠 업데이트
- 새로운 프로젝트 정기적으로 추가
- 프로젝트 상세 설명 업데이트
- 블로그/뉴스 섹션 추가 고려

### 7. 소셜 미디어 활용
- 프로젝트를 소셜 미디어에 공유
- 백링크 확보
- 온라인 커뮤니티 참여

---

## 🔍 주요 타겟 키워드

### 핵심 키워드
- 미디어아트
- 인터랙티브 전시
- 디지털 전시 솔루션
- XR 전시
- AR/VR 콘텐츠

### 지역 키워드
- 부산 미디어아트
- 경주 디지털 전시
- 원주 인터랙티브 전시
- 제천 전시 솔루션

### 롱테일 키워드
- 미디어아트 전시 제작
- 인터랙티브 전시 개발
- 디지털 전시 시스템 구축
- 전시 프로그래밍 솔루션

---

## ⚙️ Sitemap 업데이트 방법

프로젝트를 추가하거나 수정할 때마다 `/public/sitemap.xml`을 업데이트해야 합니다.

### 새 프로젝트 추가 시
```xml
<url>
  <loc>https://ptahlabs.com/#/project/프로젝트ID</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### 업데이트 후
1. Google Search Console에서 "Sitemaps" 메뉴 접속
2. 업데이트된 sitemap 재제출
3. 네이버 서치 어드바이저에서도 동일하게 재제출

---

## 📞 문의사항

SEO 관련 문의나 추가 최적화가 필요한 경우 웹 개발팀에 문의하세요.

**마지막 업데이트**: 2025년 1월 30일