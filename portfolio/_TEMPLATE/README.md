# 프로젝트 추가 가이드

**개발자가 아니어도 쉽게 포트폴리오를 추가/수정할 수 있습니다!**

---

## 간단 요약

1. 이 폴더(`_TEMPLATE`)를 **복사**해서 새 프로젝트 이름으로 변경
2. `data.json` 파일 수정
3. 이미지 파일 추가
4. 완료!

---

## 상세 가이드

### 1단계: 폴더 복사 및 이름 변경

```
public/portfolio/ 폴더에서:

_TEMPLATE 폴더 전체를 복사 → 붙여넣기
폴더 이름을 변경: 2025_YourProject
```

**폴더명 규칙:**
- `연도_프로젝트명` 형식 (예: `2025_Seoul_Museum`)
- 영문과 숫자, 언더스코어(_)만 사용
- 공백 사용 금지

---

### 2단계: data.json 파일 수정

폴더 안의 `data.json` 파일을 텍스트 에디터로 열어서 수정합니다.

#### 필수 항목 (반드시 수정해야 함)

```json
{
  "id": "2025_YourProject",           ← 폴더명과 동일하게!
  "title": "프로젝트 제목",             ← 웹사이트에 표시될 제목
  "thumbnail": "main.jpg",            ← 대표 이미지 파일명
}
```

#### 전체 항목 설명

| 항목 | 설명 | 예시 |
|------|------|------|
| **id** | 폴더명과 동일 | `"2025_Seoul_Museum"` |
| **title** | 프로젝트 제목 | `"서울 박물관 전시"` |
| **category** | 카테고리 | `"전시"`, `"솔루션"`, `"과학전시"` |
| **tags** | 태그 (배열) | `["exhibition", "interactive"]` |
| **images** | 이미지 파일명 (배열) | `["main.jpg", "photo2.jpg"]` |
| **thumbnail** | 대표 이미지 | `"main.jpg"` |
| **description** | 짧은 설명 (1-2줄) | `"박물관 인터랙티브 전시"` |
| **detailedDescription** | 상세 설명 (여러 단락) | 아래 참조 |
| **year** | 연도 | `"2025"` |
| **client** | 클라이언트 | `"서울시"` |
| **location** | 위치 | `"서울, 대한민국"` |
| **country** | 국가 코드 | `"KR"` (한국) |
| **link** | 링크 | `"/project/2025_Seoul_Museum"` |
| **lastmod** | 마지막 수정일 | `"2025-01-30"` |

#### 상세 설명 작성 방법

```json
"detailedDescription": "첫 번째 단락입니다.\n\n두 번째 단락입니다.\n\n세 번째 단락입니다."
```

- `\n\n` 사용하면 줄바꿈 (단락 나누기)
- 따옴표(`"`) 주의!

#### 태그 종류

**자주 사용하는 태그:**
- `exhibition` - 전시
- `interactive` - 인터랙티브
- `media-art` - 미디어아트
- `kiosk` - 키오스크
- `history` - 역사
- `science` - 과학
- `photo` - 포토
- `game` - 게임

**새 태그 추가 가능:** 영문 소문자, 하이픈(-)만 사용

---

### 3단계: 이미지 파일 추가

1. 프로젝트 폴더에 이미지 파일 복사
2. `data.json`에서 이미지 파일명 정확히 입력

**이미지 규칙:**
- 파일명: 영문, 숫자, 언더스코어(_), 하이픈(-) 사용
- 확장자: `.jpg`, `.png`, `.webp`, `.avif` 권장
- 대표 이미지를 `thumbnail`에 지정

**예시:**
```
2025_Seoul_Museum/
├── data.json
├── main.jpg          ← 대표 이미지
├── photo1.jpg
├── photo2.jpg
└── kiosk.png
```

```json
{
  "thumbnail": "main.jpg",
  "images": [
    "main.jpg",
    "photo1.jpg",
    "photo2.jpg",
    "kiosk.png"
  ]
}
```

---

### 4단계: exhibits 전시물 추가 (선택사항)

프로젝트에 여러 개의 전시물이 있다면 `exhibits` 배열에 추가:

```json
"exhibits": [
  {
    "title": "안내 키오스크",
    "description": "터치스크린 기반 안내 시스템",
    "tags": ["kiosk", "touchscreen"],
    "images": ["kiosk1.jpg", "kiosk2.jpg"]
  },
  {
    "title": "인터랙티브 게임",
    "description": "체험형 게임 콘텐츠",
    "tags": ["game", "interactive"],
    "images": ["game1.jpg"]
  }
]
```

필요 없으면 삭제 가능:
```json
"lastmod": "2025-01-30"
// "exhibits" 항목 전체 삭제
```

---

## 완료 후 확인사항

### 체크리스트

- [ ] 폴더명과 `id`가 동일한가?
- [ ] `thumbnail`에 지정한 이미지 파일이 폴더에 있는가?
- [ ] `images` 배열의 모든 파일이 폴더에 있는가?
- [ ] JSON 문법 오류가 없는가? (따옴표, 쉼표 확인)
- [ ] `year`, `lastmod` 날짜가 정확한가?

### JSON 문법 검사

**온라인 도구 사용:**
- https://jsonlint.com/
- data.json 내용 복사 → 붙여넣기 → Validate 클릭

**자주 하는 실수:**
```json
// ❌ 잘못된 예
{
  "title": "프로젝트",    ← 마지막 항목에 쉼표 X
}

// ✅ 올바른 예
{
  "title": "프로젝트"
}
```

```json
// ❌ 잘못된 예
{
  "images": [
    "photo1.jpg"
    "photo2.jpg"    ← 쉼표 누락
  ]
}

// ✅ 올바른 예
{
  "images": [
    "photo1.jpg",
    "photo2.jpg"
  ]
}
```

---

## 배포하기

프로젝트 추가/수정 후:

```bash
npm run build
git add .
git commit -m "새 프로젝트 추가: 프로젝트명"
git push origin main
```

GitHub Actions가 자동으로 배포합니다 (약 2-3분 소요).

---

## 문제 해결

### 이미지가 안 보여요
- 파일명이 `data.json`에 정확히 입력되었는지 확인
- 파일 확장자 확인 (대소문자 구분: `.jpg` ≠ `.JPG`)

### JSON 오류가 나요
- https://jsonlint.com/ 에서 검사
- 따옴표(`"`) 누락 확인
- 쉼표(`,`) 위치 확인

### 프로젝트가 안 보여요
- `id`가 폴더명과 동일한지 확인
- 빌드 후 배포했는지 확인

---

## 예시 프로젝트

`public/portfolio/2024_Jecheon_Jummal/` 폴더를 참고하세요!

---

**이 가이드대로 하면 누구나 쉽게 포트폴리오를 관리할 수 있습니다!**
