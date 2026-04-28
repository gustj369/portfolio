const identityTags = [
  { label: "개발자", accent: "gold" },
  { label: "AI 워크플로우 빌더", accent: "violet" },
  { label: "콘텐츠 크리에이터", accent: null },
  { label: "작은 제품을 만드는 사람", accent: null },
  { label: "기록하는 사람", accent: null },
];

const focusAreas = [
  "AI 활용과 자동화 도구",
  "미니게임 제작과 배포",
  "개인 자산 대시보드",
  "세컨드 브레인과 생산성 시스템",
  "인스타 카드뉴스 콘텐츠",
  "글쓰기와 생각 정리",
];

function IdentityTag({ label, accent }) {
  const cls =
    accent === "gold"
      ? "border-gold-500/40 bg-gold-500/8 text-gold-300"
      : accent === "violet"
      ? "border-violet-500/40 bg-violet-500/8 text-violet-300"
      : "border-dark-400 text-gray-300";
  return (
    <span className={`px-3 py-1 text-xs rounded-full border ${cls}`}>
      {label}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          About
        </p>
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Main intro */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-8 text-white">
              저는 만들면서
              <br />
              <span className="text-gradient-gold">배웁니다.</span>
            </h2>
            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                AI를 단순히 쓰는 데서 멈추지 않고,
                <br />
                개발과 콘텐츠 제작 과정에 연결해 작은 결과물로 만듭니다.
              </p>
              <p>
                Codex로 코드의 구조를 잡고, ChatGPT로 아이디어와 문장을 정리하며,
                <br />
                미니게임, 자산 대시보드, 생산성 도구, 카드뉴스 같은 프로젝트를
                꾸준히 쌓아가고 있습니다.
              </p>
              <p>
                완벽해질 때까지 미루기보다 작게 만들고,
                <br />
                직접 써보고, 공개하며, 계속 고쳐가는 방식을 선택합니다.
              </p>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="space-y-5">
            {/* IDENTITY */}
            <div className="card-dark rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5">
              <p className="text-xs font-mono text-gold-500 tracking-widest mb-4">
                IDENTITY
              </p>
              <div className="flex flex-wrap gap-2">
                {identityTags.map((tag) => (
                  <IdentityTag key={tag.label} {...tag} />
                ))}
              </div>
            </div>

            {/* FOCUS AREAS */}
            <div className="card-dark rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5">
              <p className="text-xs font-mono text-gold-500 tracking-widest mb-4">
                FOCUS AREAS
              </p>
              <ul className="space-y-2.5 text-sm text-gray-400">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 block w-1 h-1 rounded-full bg-gold-500/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PHILOSOPHY */}
            <div className="card-dark rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5">
              <p className="text-xs font-mono text-gold-500 tracking-widest mb-4">
                PHILOSOPHY
              </p>
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "
                <span className="text-gold-400 not-italic font-medium">작게</span>{" "}
                만들고,{" "}
                <span className="text-gold-400 not-italic font-medium">공개</span>하며,{" "}
                계속 고쳐갑니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
