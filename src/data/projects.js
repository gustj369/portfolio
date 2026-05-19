// Shared site metadata
export const meta = {
  writingStartDate: "2025-08-01",
  email: "gustj258@gmail.com",
  social: {
    github:      "https://github.com/gustj369",
    instagram:   "https://www.instagram.com/94hyeonseo",
    threads:     "https://www.threads.com/@94hyeonseo",
    handle:      "@94hyeonseo",
    githubLabel: "github.com/gustj369",
    linkedin:    "https://www.linkedin.com/in/94hyeonseo",
  },
};

export function getWritingMonths() {
  // YYYY-MM-DD 형식을 직접 파싱하여 타임존 오프셋 영향을 제거
  const [sy, sm] = meta.writingStartDate.split("-").map(Number);
  const now = new Date();
  return Math.max(0, (now.getFullYear() - sy) * 12 + (now.getMonth() - (sm - 1)));
}

export function formatWritingDuration(months) {
  if (months < 12) return `${months}개월`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem === 0 ? `${years}년` : `${years}년 ${rem}개월`;
}

// Projects section data
// Projects 카드 필드 기준
// - demo: 기본 CTA 링크로 표시됩니다. 없으면 github가 기본 CTA가 됩니다.
// - github: 카드 우측 상단 아이콘과 보조 "코드 보기" 링크에 사용됩니다.
// - extraLinks: demo/github와 별개로 추가 링크를 나란히 표시합니다.
// - tags: 카드 하단의 작은 태그 칩으로 표시됩니다.
// - keyBuild: 태그 위에 작은 제작 포인트 문장으로 표시됩니다.
export const projects = [
  {
    title: "Legend League",
    status: "Archive",
    sublabel: "직접 만든 리그형 전략 미니게임",
    description:
      "리그를 직접 운영하고 싶었는데 마땅한 도구가 없었어요. 그래서 만들었습니다. JavaScript로 경기 진행, 결과 계산, 리그 흐름을 구현했고 실행 가능한 파일로 패키징했습니다.",
    keyBuild: "경기 흐름 · 결과 계산 · EXE 패키징",
    tags: ["JavaScript", "Mini Game", "League System"],
    github: "https://github.com/gustj369/my-starleague",
    demo: "https://drive.google.com/file/d/1-lXZq5kuZhap2yw6SeuB1xn-locjAM17/view?usp=drive_link",
    demoLabel: "실행하기",
    color: "gold",
    featured: true,
    workflow: true,
  },
  {
    title: "Asset Portfolio Dashboard",
    status: "Live",
    sublabel: "내 자산 흐름을 한눈에 보는 대시보드",
    description:
      "숫자만 기록하다 보니 정작 판단이 안 됐어요. 한눈에 보이는 구조가 필요했습니다. 자산의 흐름, 수익률, 배분 비율을 한 화면에서 확인할 수 있도록 만들었습니다.",
    keyBuild: "자산 흐름 · 수익률 · 배분 시각화",
    tags: ["Dashboard", "Finance", "Data Visualization"],
    github: "https://github.com/gustj369/portfolio-report",
    demo: "https://portfolio-report-roan.vercel.app",
    demoLabel: "라이브 보기",
    color: "violet",
    featured: true,
    workflow: true,
  },
  {
    title: "Second Brain Desktop",
    status: "Archive",
    sublabel: "생각과 기록을 연결하는 개인 지식관리 앱",
    description:
      "기록은 많은데 다시 꺼내 쓴 적이 없었어요. 흩어진 메모가 연결되는 구조를 실험하고 있습니다.",
    keyBuild: "기록 연결 · 지식관리 구조 · 데스크톱 앱",
    tags: ["Desktop", "Knowledge Management", "Productivity"],
    github: "https://github.com/gustj369/second-brain-desktop",
    demo: null,
    demoLabel: "GitHub 보기",
    color: "gold",
  },
  {
    title: "퇴근 후 나를 키우는 10개의 질문",
    status: "Live",
    sublabel: "처음 만든 유료 PDF — 회고 질문 10개와 워크시트",
    description:
      "퇴근은 했는데 마음은 퇴근하지 못 한 날, 저한테 질문을 던졌어요. 하루를 그냥 흘려보내지 않기 위한 회고 질문 10개와 워크시트를 작은 PDF로 정리했습니다. 처음으로 만든 유료 PDF예요.",
    keyBuild: "회고 질문 10개 · 워크시트 · 유료 PDF",
    tags: ["PDF", "Self Growth", "Worksheet", "1,900원"],
    github: null,
    demo: "https://litt.ly/94hyeonseo/sale/qUbQ2o8",
    demoLabel: "구매하기",
    color: "gold",
    featured: true,
  },
  {
    title: "AI 영상 캐릭터 고정",
    status: "Live",
    sublabel: "AI 영상에서 캐릭터를 일관되게 유지하는 실전 가이드",
    description:
      "AI 영상 제작 과정에서 캐릭터의 외형과 분위기를 일관되게 고정하는 방법을 정리한 문서입니다. 실제 작업 흐름에서 얻은 노하우를 PDF로 기록했습니다.",
    keyBuild: "AI 영상 · 캐릭터 고정 · 실전 가이드 PDF",
    tags: ["AI", "Video", "Character", "PDF"],
    github: null,
    demo: "https://drive.google.com/file/d/13uu992m6ACvNXPj4TuIPK5EN1FcxIAOS/view?usp=drive_link",
    demoLabel: "PDF 보기",
    extraLinks: [
      {
        href: "https://drive.google.com/file/d/1SUiIRC822KPhJpXWw3h2mVLr07V6wJ2A/view?usp=drive_link",
        label: "워크북 보기",
      },
    ],
    color: "violet",
  },
  {
    title: "DEV·CREATOR Portfolio",
    status: "Live",
    sublabel: "AI와 개발 자산을 정리한 개인 포트폴리오",
    description:
      "AI 활용, 개발 자산, 콘텐츠 기록을 한곳에 정리하기 위해 만든 개인 포트폴리오입니다. React와 Tailwind CSS 기반으로 화면 구조와 브랜드 톤을 직접 설계했습니다.",
    keyBuild: "React UI · Tailwind CSS · AI Coding Workflow",
    tags: ["React", "Tailwind CSS", "Portfolio", "AI Coding"],
    github: "https://github.com/gustj369/portfolio",
    demo: "https://portfolio-mu-ten-64.vercel.app/",
    demoLabel: "사이트 보기",
    color: "gold",
    featured: true,
    workflow: true,
  },
  {
    title: "More on GitHub",
    status: "Archive",
    sublabel: "계속 쌓아가는 작은 코드 자산",
    description:
      "작은 실험과 코드 자산을 GitHub에 정리하고 있습니다. 완성된 프로젝트뿐 아니라, 배운 것과 시도한 흔적까지 기록합니다.",
    keyBuild: "실험 기록 · 코드 자산 · 지속 개선",
    tags: ["GitHub", "Experiments", "Code Assets"],
    github: "https://github.com/gustj369",
    demo: null,
    demoLabel: "GitHub 전체 보기",
    color: "slate",
  },
];

// Tech Stack section data
export const techStack = [
  {
    category: "FRONTEND",
    description: "포트폴리오와 대시보드 화면을 구성하고 반응형 UI로 구현합니다.",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    highlight: ["JavaScript", "React", "Tailwind CSS"],
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
    description: "아이디어 정리, 코드 작성, 콘텐츠 제작에 AI를 작업 흐름으로 연결합니다.",
    items: ["ChatGPT", "Codex", "GitHub", "Prompt Design"],
    highlight: ["ChatGPT", "Codex", "GitHub"],
    color: "violet",
  },
  {
    category: "CONTENT & BRANDING",
    description: "글과 이미지 기반 콘텐츠로 생각과 프로젝트를 정리하고 공유합니다.",
    items: ["Instagram", "Threads", "Portfolio"],
    highlight: [],
    color: "slate",
  },
];

// Writing section data
export const writingTopics = [
  {
    icon: "↗",
    title: "직장인 성장",
    description: "퇴근 후의 공부, 운동, 기록처럼 작은 루틴이 사람을 어떻게 바꾸는지 씁니다. 월요일 아침마다 그만두고 싶었던 이유도요.",
    tags: ["Routine", "Growth"],
    accent: "gold",
    featured: true,
  },
  {
    icon: "◎",
    title: "AI 활용 기록",
    description: "ChatGPT, Codex 같은 AI 도구를 일상과 작업 흐름에 어떻게 연결하는지 기록합니다.",
    tags: ["AI Tools", "Workflow"],
    accent: "violet",
  },
  {
    icon: "○",
    title: "퇴근 후 공부",
    description: "피곤할 때 공부를 다시 시작하는 방법은 딱 하나였어요. 그 이야기를 씁니다.",
    tags: ["Study", "After Work"],
    accent: null,
  },
  {
    icon: "▣",
    title: "콘텐츠 제작 실험",
    description: "Threads 글쓰기와 인스타 카드뉴스를 통해 생각을 짧고 선명하게 전하는 방식을 실험합니다.",
    tags: ["Threads", "Instagram"],
    accent: null,
  },
  {
    icon: "◇",
    title: "일상의 인사이트",
    description: "회사, 관계, 루틴, 감정처럼 지나치기 쉬운 순간에서 작은 생각을 건져 올립니다.",
    tags: ["Daily", "Insight"],
    accent: null,
  },
  {
    icon: "✦",
    title: "드라마틱 라이프",
    description: "평범한 직장인의 하루를 조금 더 솔직하고 차분한 이야기로 남깁니다.",
    tags: ["Dramatic Life", "Story"],
    accent: null,
    sublabel: "DRAMATIC LIFE",
  },
];

// AI Workflow section data
export const workflowSteps = [
  {
    step: "01",
    title: "아이디어 정리",
    description:
      "처음엔 바로 코딩부터 했다가 중간에 방향을 잃었어요. 지금은 막연한 생각을 기능, 화면, 콘텐츠 단위로 먼저 나눕니다.",
  },
  {
    step: "02",
    title: "구조 설계",
    description:
      "구조 없이 만들다가 절반에서 다시 짠 적이 있어요.\n지금은 Codex와 함께 초기 구조를 먼저 잡습니다.",
  },
  {
    step: "03",
    title: "구현과 검증",
    description:
      "직접 실행하며 오류를 확인하고, 예상과 다른 부분을 기록합니다.",
  },
  {
    step: "04",
    title: "기능 단위 개선",
    description:
      "한 번에 다 바꾸려다 다 망가뜨린 적이 있어요. 지금은 작은 단위로 요청하고, 수정하며 완성도를 높입니다.",
  },
  {
    step: "05",
    title: "기록과 문서화",
    description:
      "나중에 보면 내가 왜 이렇게 짰는지 모르겠더라고요.\n그래서 README, 사용 설명, 제작 과정을 정리하고 다음 개선 지점을 남깁니다.",
  },
  {
    step: "06",
    title: "공개와 개선",
    description:
      "올리고 나서야 뭐가 부족한지 보였어요.\nGitHub와 포트폴리오에 결과물을 올리고, 부족한 부분은 다시 개선합니다.",
  },
];

export const flowSteps = ["생각", "구조", "구현", "검증", "기록", "공개"];

// AIWorkflow 섹션 전용 도구 목록
// techStack의 AI WORKFLOW 항목과 별개 — 도구별 역할 설명(role)이 추가된 구조
export const workflowTools = [
  { name: "Claude", role: "코드 구조 · 구현 보조" },
  { name: "Codex",  role: "코드 구조 · 구현 보조" },
];


// About 섹션 데이터
export const identityTags = [
  { label: "개발자",               accent: "gold"   },
  { label: "AI 워크플로우 빌더",   accent: "violet" },
  { label: "콘텐츠 크리에이터",    accent: null     },
  { label: "작은 서비스를 만드는 사람", accent: null },
  { label: "기록하는 사람",        accent: null     },
];

export const focusAreas = [
  "AI 활용과 자동화 도구",
  "미니게임 제작과 배포",
  "개인 자산 대시보드",
  "개인 지식관리 앱과 생산성 시스템",
  "인스타 카드뉴스 콘텐츠",
  "글쓰기와 생각 정리",
  "유료 콘텐츠 제작",
];

// Tech Stack 섹션 보조 데이터
export const currentlyExploring = {
  title: "CURRENTLY EXPLORING",
  description: "지금은 Figma로 화면을 먼저 그리고 코딩하는 순서를 실험 중이에요.\n게임 만드는 건 아직 어렵고요. 그래도 계속하고 있습니다.",
  items: ["Figma", "Game Dev"],
};

// Contact 섹션 데이터
export const openToItems = [
  "Portfolio",
  "Side Project",
  "AI Workflow",
  "Automation",
  "Content System",
  "PDF 제작",
];
