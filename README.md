# Personal Portfolio

AI와 개발로 작은 결과물을 만드는 개발자의 포트폴리오 웹사이트.

## 기술 스택

- **React** — 컴포넌트 기반 UI
- **Tailwind CSS v3** — 유틸리티 퍼스트 스타일링
- **Create React App** — 프로젝트 세팅

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm start

# 프로덕션 빌드
npm run build
```

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
├── App.js
└── index.css
```

## 커스터마이즈

### 프로젝트 수정
`src/data/projects.js`의 `projects` 배열을 수정하면 Projects 섹션이 자동으로 업데이트됩니다.

### 링크 교체
각 컴포넌트에서 `yourusername` 또는 `your@email.com`을 실제 값으로 교체하세요.

- `Contact.jsx` — GitHub / Instagram / Threads / Email 링크
- `Hero.jsx` — GitHub 버튼 링크
- `Projects.jsx` — 각 프로젝트의 `github`, `demo` 링크

### 색상 테마
`tailwind.config.js`의 `colors` 섹션에서 골드(`gold`)와 바이올렛(`violet`) 컬러를 조정할 수 있습니다.
