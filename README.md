# Personal Portfolio

AI와 개발로 작은 결과물을 만드는 개발자의 포트폴리오 웹사이트.

## 만든 이유

흩어져 있던 프로젝트들을 하나의 페이지로 정리하고<br>
제가 어떤 방향으로 성장하고 있는지 보여주기 위해 만들었습니다.

## 주요 기능
- 자기소개
- 대표 프로젝트 소개
- 외부 링크 연결
- 반응형 포트폴리오 페이지

## 기술 스택

- **React**, **Vite** — 기반 웹 프로젝트
- **Tailwind CSS v3** — 기반 UI 구성
- **Vercel** — 배포
- AI 코딩 도구를 활용한 바이브 코딩 방식으로 제작

## 실행 방법

Node.js(LTS)가 필요합니다.

```bash
npm install      # 의존성 설치 (처음 한 번)
npm start        # 개발 서버 실행 → http://localhost:5173
npm run build    # 배포용 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

배포는 Vercel에서 `npm run build` 결과(`dist/`)를 사용합니다 (`vercel.json`).

> 프로젝트가 OneDrive 폴더 안에 있으면 개발 서버가 파일 변경을 놓칠 때가 있습니다. 수정이 화면에 반영되지 않으면 개발 서버를 재시작하세요.

## 이미지 생성 스크립트

`public/hyeonseo.png`(인물 사진이 포함된 배너)와 `public/favicon.svg`를 원본으로 사용합니다. 원본을 바꾼 뒤 아래 스크립트를 다시 실행하세요.

| 명령 | 생성 파일 | 용도 |
| --- | --- | --- |
| `node generate-og.js` | `og-image.png` | 링크 공유 미리보기 (1200×630) |
| `node generate-profile.js` | `profile.webp`, `profile.jpg` | Hero 프로필 사진 |
| `node generate-icons.js` | `favicon.ico`, `logo192.png`, `logo512.png`, `apple-touch-icon.png` | 브라우저·홈 화면 아이콘 |

## 프로젝트 구조

- 실제 페이지 흐름: Hero → About → Projects → AI Workflow → Writing → Tech Stack → Contact
- 상단 내비게이션 노출: About, Projects, AI Workflow, Writing, Tech Stack, Contact
- `src/components/` — 각 섹션 화면과 상호작용을 그리는 UI 컴포넌트
- `src/data/projects.js` — 프로젝트 카드, 스택, 글쓰기, 공통 링크처럼 여러 섹션이 함께 쓰는 데이터
- `public/` — 파비콘, 프로필 이미지, OG 이미지처럼 브라우저가 그대로 제공하는 정적 파일
- `index.html` — 페이지 타이틀과 description, Open Graph 같은 문서 메타데이터

빠르게 찾기:
- 프로젝트 카드를 바꾸려면 `src/data/projects.js`
- 메타데이터를 바꾸려면 `index.html`
- 공통 스타일을 바꾸려면 `src/index.css`

```
portfolio-site/
├── public/               # 정적 파일
│   ├── favicon.svg       # 브라우저 아이콘 (아이콘 생성 원본)
│   ├── hyeonseo.png      # 인물 배너 (프로필·OG 이미지 생성 원본)
│   ├── profile.webp      # Hero 프로필 사진
│   └── og-image.png      # 공유 미리보기 이미지
├── generate-*.js         # 이미지 생성 스크립트
├── index.html            # 문서 메타데이터
└── src/
    ├── components/
    │   ├── Navbar.jsx        # 상단 내비게이션
    │   ├── Hero.jsx          # 히어로 섹션
    │   ├── About.jsx         # 소개 섹션
    │   ├── Projects.jsx      # 프로젝트 카드 섹션
    │   ├── AIWorkflow.jsx    # AI 활용 방식 섹션
    │   ├── Writing.jsx       # 글쓰기 / 콘텐츠 섹션
    │   ├── TechStack.jsx     # 기술 스택 섹션
    │   └── Contact.jsx       # 연락처 섹션
    ├── data/
    │   └── projects.js       # 프로젝트·스택·글쓰기 데이터 (배열 관리)
    ├── App.jsx            # 페이지 섹션 조립
    ├── index.jsx          # 앱 진입점
    └── index.css          # 공통 스타일
```
