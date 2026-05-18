# Personal Portfolio

AI와 개발로 작은 결과물을 만드는 개발자의 포트폴리오 웹사이트.
제가 만든 프로젝트들, 기록, 실험을 한곳에 정리하기 위해 제작하였습니다.

## 기술 스택

- **React** — 컴포넌트 기반 UI
- **Tailwind CSS v3** — 유틸리티 퍼스트 스타일링
- **Vite** — 개발 서버와 빌드 도구

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 수정 후 확인

- 공통: `npm start`로 실행 후 Hero, Projects, AI Workflow, Writing, Tech Stack, Contact 섹션을 확인합니다.
- 내비게이션: 상단 메뉴를 클릭했을 때 각 섹션 제목이 고정 헤더에 가리지 않고 자연스럽게 보이는지 확인합니다.
- 데이터 수정: Projects 카드 수, 상태 카운트, 외부 링크 버튼이 의도대로 보이는지 확인합니다.
- 스타일 수정: 데스크톱과 모바일 폭에서 텍스트 줄바꿈, 간격, 버튼 영역을 확인합니다.
- 배포 전: `npm run build`를 실행하고, 필요하면 `npm run preview`로 빌드 결과를 확인합니다.

### 모바일 밀도 확인 기준

- 모바일 섹션 여백은 넓게 보이되, 카드가 길게 반복되는 구간은 과하게 늘리지 않습니다.
- 카드 내부 여백은 내용량에 맞춰 조절하고, AI Workflow·Projects·Tech Stack처럼 카드가 많은 섹션은 스크롤 피로를 줄입니다.
- 주요 CTA는 한 줄 전체 폭을 사용할 수 있지만, 보조 SNS 링크는 2열 또는 작은 버튼 묶음으로 확인합니다.
- 모바일 확인 시 Projects 카드, AI Workflow 단계 카드, Tech Stack 카드, Contact 버튼 배열을 우선 점검합니다.

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


- 바로 분리하기보다 `Projects.jsx`, `AIWorkflow.jsx`, `Writing.jsx`, `TechStack.jsx`, `
