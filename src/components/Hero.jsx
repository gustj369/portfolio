import { getWritingMonths } from "../data/projects";

export default function Hero() {
  const months = getWritingMonths();

  const statCards = [
    { value: `${months} MONTHS`, label: "퇴근 후 쌓은 기록",          mono: true  },
    { value: "5 PROJECTS",       label: "직접 만들고 개선한 결과물",   mono: true  },
    { value: "AI WORKFLOW",      label: "ChatGPT · Codex · GitHub",   mono: false },
  ];

  const mobileStats = [
    { value: `${months} MONTHS`, label: "퇴근 후 기록" },
    { value: "5 PROJECTS",       label: "결과물"       },
    { value: "AI WORKFLOW",      label: null           },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#d4a843 1px, transparent 1px), linear-gradient(90deg, #d4a843 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Left glow blob */}
      <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] rounded-full bg-gold-600/6 blur-3xl pointer-events-none" />
      {/* Right glow — behind stat cards */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-64 h-64 rounded-full bg-violet-600/6 blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto w-full pt-16 pb-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: Text + CTA */}
          <div>
            <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-6 animate-fade-in">
              Developer · Creator
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-[3.5rem] font-semibold leading-[1.15] tracking-tight mb-7 animate-slide-up">
              작은 아이디어를
              <br />
              <span className="text-gradient-gold">AI와 코드로</span>
              <br />
              실제 결과물로 만듭니다.
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 animate-slide-up">
              코드와 콘텐츠, 일상의 아이디어를 연결해
              <br className="hidden sm:block" />
              작게 만들고, 직접 써보고, 계속 개선합니다.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in">
              {/* Primary */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-dark-900 text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(212,168,67,0.28)]"
              >
                프로젝트 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              {/* Secondary */}
              <a
                href="https://github.com/gustj369"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-dark-400/80 hover:border-gold-500/50 text-gray-400 hover:text-gold-400 text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub 보기
              </a>
            </div>

            {/* Mobile stat pills */}
            <div className="flex md:hidden gap-2.5 mt-10 flex-wrap">
              {mobileStats.map((s) => (
                <div
                  key={s.value}
                  className="px-3.5 py-2 rounded-lg border border-dark-400/60 bg-dark-800/60 flex items-center gap-2"
                >
                  <span className="text-xs font-mono text-gold-400">{s.value}</span>
                  {s.label && <span className="text-xs text-gray-600">{s.label}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stat cards — desktop only */}
          <div className="hidden md:flex flex-col gap-4 ml-auto w-full max-w-[260px]">
            {statCards.map((card) => (
              <div
                key={card.value}
                className="rounded-xl px-6 py-5 border border-dark-400/60 bg-dark-800/60 backdrop-blur-sm transition-all duration-200 hover:border-gold-500/30 hover:-translate-y-0.5"
              >
                {card.mono ? (
                  <p className="text-lg font-semibold font-mono text-gold-400 mb-2 leading-none">
                    {card.value}
                  </p>
                ) : (
                  <p className="text-xs font-mono text-gold-500 tracking-widest mb-2 leading-none">
                    {card.value}
                  </p>
                )}
                <p className="text-xs text-gray-500 leading-relaxed">{card.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom thin divider */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-dark-500/30 to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 hidden md:flex flex-col items-center gap-3 opacity-50">
        <div className="w-px h-8 bg-gradient-to-b from-gold-500/70 to-transparent" />
        <span
          className="text-[10px] font-mono text-gold-500 tracking-[0.25em]"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL
        </span>
        <svg
          className="w-3 h-3 text-gold-500 animate-scroll-drop"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
