# Personal Portfolio

AI와 개발로 작은 결과물을 만드는 개발자의 포트폴리오 웹사이트.

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
- 데이터 수정: Projects 카드 수, 상태 카운트, 외부 링크 버튼이 의도대로 보이는지 확인합니다.
- 스타일 수정: 데스크톱과 모바일 폭에서 텍스트 줄바꿈, 간격, 버튼 영역을 확인합니다.
- 배포 전: `npm run build`를 실행하고, 필요하면 `npm run preview`로 빌드 결과를 확인합니다.

## 프로젝트 구조

```
src/
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
├── App.jsx
├── index.jsx
└── index.css
```

## 커스터마이즈

### 프로젝트 수정
`src/data/projects.js`의 `projects` 배열을 수정하면 Projects 섹션이 자동으로 업데이트됩니다.

프로젝트 항목은 아래 필드를 기준으로 관리합니다.

- 필수: `id`, `title`, `status`, `description`, `tags`, `color`
- 선택: `sublabel`, `keyBuild`, `github`, `demo`, `demoLabel`, `featured`
- `status`는 `Live`, `Playable`, `In Progress`, `Prototype`, `Completed`, `Archive` 기준으로 사용합니다.
- `Archive` 상태는 Hero의 프로젝트 수와 Projects 상태 카운트에서 제외됩니다.

### 링크 교체
기본 링크와 이메일은 `src/data/projects.js`의 `meta` 객체에서 관리합니다.

- `Contact.jsx` — `meta` 기반 GitHub / Instagram / Threads / Email 링크
- `Hero.jsx` — `meta.social.github` 기반 GitHub 버튼 링크
- `Projects.jsx` — 각 프로젝트의 `github`, `demo` 링크

### 메타태그 수정
페이지 타이틀, description, Open Graph, Twitter Card 정보는 루트 `index.html`에서 관리합니다.
배포 주소나 대표 이미지가 바뀌면 `og:url`, `og:image`, `twitter:image`, `<title>`, description을 함께 확인합니다.

### 색상 테마
`tailwind.config.js`의 `colors` 섹션에서 골드(`gold`)와 바이올렛(`violet`) 컬러를 조정할 수 있습니다.
