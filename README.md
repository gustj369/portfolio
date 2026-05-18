# Personal Portfolio

AI와 개발로 작은 결과물을 만드는 개발자의 포트폴리오 웹사이트.<br>
제가 만든 프로젝트와 기록을 한곳에 정리하기 위해 제작하였습니다.

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
│   ├── favicon.svg       # 브라우저 아이콘
│   └── og-image.png      # 공유 미리보기 이미지
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
