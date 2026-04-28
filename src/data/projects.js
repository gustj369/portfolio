export const projects = [
  {
    id: 1,
    title: "My StarLeague",
    status: "Completed",
    description:
      "스타크래프트 감성의 미니게임을 JavaScript로 구현하고, 실행 가능한 exe 파일까지 패키징한 프로젝트.",
    tags: ["JavaScript", "Game", "EXE Packaging", "AI Coding"],
    github: "https://github.com/gustj369/my-starleague",
    demo: "https://drive.google.com/file/d/1VES7V1eHAdyd9ffJ3psmgsXPclXHLSkE/view?usp=drive_link",
    demoLabel: "Download",
    color: "gold",
  },
  {
    id: 2,
    title: "Asset Portfolio Dashboard",
    status: "Live",
    description:
      "개인 자산 흐름과 수익률, 배분 비율을 한눈에 확인할 수 있도록 만든 자산 관리 대시보드.",
    tags: ["Dashboard", "Finance", "Data Visualization"],
    github: "https://github.com/gustj369/portfolio-report",
    demo: "https://portfolio-report-roan.vercel.app",
    demoLabel: "Live 보기",
    color: "violet",
    featured: true,
  },
  {
    id: 3,
    title: "Second Brain Desktop",
    status: "Prototype",
    description:
      "독서 기록, 아이디어, 콘텐츠 글감을 연결해 관리하기 위한 개인 지식 관리 데스크탑 앱.",
    tags: ["Desktop", "Knowledge Management", "Productivity"],
    github: "https://github.com/gustj369/second-brain-desktop",
    demo: null,
    demoLabel: "Project Note",
    color: "gold",
  },
  {
    id: 4,
    title: "Quest — 직장인 일일퀘스트",
    status: "Prototype",
    description:
      "직장인의 하루 루틴을 퀘스트처럼 기록하고 작은 성취를 쌓도록 설계한 생산성 앱.",
    tags: ["Productivity", "Gamification", "Daily Routine"],
    github: "https://github.com/gustj369/Quest",
    demo: null,
    demoLabel: "Project Note",
    color: "violet",
  },
  {
    id: 5,
    title: "DEV·CREATOR Portfolio",
    status: "Live",
    description:
      "React와 Tailwind CSS로 만든 개인 포트폴리오 웹사이트. AI 활용, 개발 자산, 콘텐츠 기록을 한곳에 정리.",
    tags: ["React", "Tailwind CSS", "Portfolio", "AI Coding"],
    github: "https://github.com/gustj369/portfolio",
    demo: "https://portfolio-mu-ten-64.vercel.app/",
    demoLabel: "Live 보기",
    color: "gold",
    featured: true,
  },
  {
    id: 6,
    title: "More on GitHub",
    status: "Archive",
    description:
      "작은 실험과 코드 자산은 계속 GitHub에 정리하고 있습니다.",
    tags: ["GitHub", "Experiments", "Code Assets"],
    github: "https://github.com/gustj369",
    demo: null,
    demoLabel: "GitHub 전체 보기",
    color: "slate",
  },
];

export const techStack = [
  {
    category: "FRONTEND",
    description: "웹 화면을 구성하고 반응형 UI를 구현합니다.",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    highlight: ["React", "Tailwind CSS"],
    color: "gold",
  },
  {
    category: "PROGRAMMING & AUTOMATION",
    description: "반복 업무를 줄이고 작은 자동화 도구를 만듭니다.",
    items: ["Python", "VBA", "Automation"],
    highlight: ["Python"],
    color: "gold",
  },
  {
    category: "AI WORKFLOW",
    description: "아이디어 정리, 코드 작성, 콘텐츠 제작에 AI를 활용합니다.",
    items: ["ChatGPT", "Codex", "Prompt Design"],
    highlight: ["ChatGPT", "Codex"],
    color: "violet",
  },
  {
    category: "CONTENT & BRANDING",
    description: "글과 이미지 기반 콘텐츠로 생각을 정리하고 공유합니다.",
    items: ["Instagram", "Threads", "Portfolio"],
    highlight: [],
    color: "slate",
  },
];

export const writingTopics = [
  {
    icon: "↗",
    title: "직장인 성장",
    description: "회사 생활에서 배운 태도, 관계, 일하는 방식의 기록",
    accent: "gold",
  },
  {
    icon: "◎",
    title: "AI 활용 기록",
    description: "ChatGPT와 Codex를 활용해 아이디어를 결과물로 만드는 과정",
    accent: "violet",
  },
  {
    icon: "○",
    title: "퇴근 후 공부",
    description: "하루 30분씩 쌓아가는 학습과 루틴의 기록",
    accent: null,
  },
  {
    icon: "▣",
    title: "콘텐츠 제작 실험",
    description: "카드뉴스, 글쓰기, 프롬프트 설계 과정을 실험하고 기록",
    accent: null,
  },
  {
    icon: "◇",
    title: "일상의 인사이트",
    description: "평범한 하루에서 발견한 생각과 감정의 조각들",
    accent: null,
  },
  {
    icon: "✦",
    title: "드라마틱 라이프",
    description: "평범한 일상을 다른 시선으로 바라보는 카드뉴스 시리즈",
    accent: null,
    sublabel: "DRAMATIC LIFE",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "아이디어 정리",
    description:
      "막연한 아이디어를 기능, 화면, 콘텐츠 단위로 나눕니다.",
  },
  {
    step: "02",
    title: "구조 설계",
    description:
      "Codex와 함께 초기 구조를 만들고, 필요한 기능의 흐름을 먼저 잡습니다.",
  },
  {
    step: "03",
    title: "실행과 검증",
    description:
      "직접 실행하며 오류를 확인하고, 예상과 다른 부분을 기록합니다.",
  },
  {
    step: "04",
    title: "기능 단위 개선",
    description:
      "한 번에 크게 바꾸기보다, 작은 단위로 요청하고 수정하며 완성도를 높입니다.",
  },
  {
    step: "05",
    title: "문서화와 콘텐츠화",
    description:
      "README, 사용 설명, 제작 과정을 정리하고 콘텐츠로도 확장합니다.",
  },
  {
    step: "06",
    title: "공개와 개선",
    description:
      "GitHub와 포트폴리오에 결과물을 올리고, 부족한 부분은 다시 개선합니다.",
  },
];
