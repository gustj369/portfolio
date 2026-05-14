import { getWritingMonths, meta, projects } from "../data/projects";
import { ArrowRightIcon, ChevronDownIcon, GitHubIcon } from "./icons";

export default function Hero() {
  const months = getWritingMonths();
  const visibleProjectCount = projects.filter((project) => project.status !== "Archive").length;

  const statCards = [
    { value: `${months} MONTHS`, label: "퇴근 후 쌓은 기록",          mono: true  },
    { value: `${visibleProjectCount} PROJECTS`, label: "직접 만들고 개선한 결과물",   mono: true  },
    { value: "AI WORKFLOW",      label: "ChatGPT · Codex · GitHub",   mono: false },
  ];

  const mobileStats = [
    { value: `${months} MONTHS`, label: "퇴근 후 기록" },
    { value: `${visibleProjectCount} PROJECTS`, label: "결과물"       },
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
              퇴근 후 {months}개월.
              <br />
              <span className="text-gradient-gold">아이디어 {visibleProjectCount}개.</span>
              <br />
              <span className="md:whitespace-nowrap">실제로 작동하는 결과물.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-10 animate-slide-up">
              어떻게 만들었는지, 아래에서 확인해보세요.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in">
              {/* Primary */}
              <a
                href="#projects"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-dark-900 text-sm font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(212,168,67,0.28)]"
              >
                프로젝트 보기
                <ArrowRightIcon />
              </a>
              {/* Secondary */}
              {meta.social.github && (
                <a
                  href={meta.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 border border-dark-400/80 hover:border-gold-500/50 text-gray-400 hover:text-gold-400 text-sm font-medium rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <GitHubIcon />
                  GitHub 보기
                </a>
              )}
            </div>

            {/* Mobile profile photo */}
            <div className="flex md:hidden items-center gap-3 mt-8 mb-2">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold-500/30 flex-shrink-0">
                <img
                  src="/hyeonseo.png"
                  alt="현서 프로필"
                  className="w-full h-full object-cover object-right"
                />
              </div>
              <span className="text-xs font-mono text-gray-600 tracking-[0.2em]">{meta.social.handle}</span>
            </div>

            {/* Mobile stat pills */}
            <div className="grid md:hidden grid-cols-2 gap-2.5 mt-3">
              {mobileStats.map((s) => (
                <div
                  key={s.value}
                  className="px-3.5 py-2 rounded-lg border border-dark-400/60 bg-dark-800/60 flex items-center gap-2 min-w-0"
                >
                  <span className="text-xs font-mono text-gold-400 whitespace-nowrap">{s.value}</span>
                  {s.label && <span className="text-xs text-gray-600 truncate">{s.label}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Profile panel — desktop only */}
          <div className="hidden md:block ml-auto w-full max-w-[300px] rounded-2xl border border-dark-400/50 bg-dark-800/35 p-4 backdrop-blur-sm">

            {/* Profile photo */}
            <div className="rounded-xl overflow-hidden border border-gold-500/20 bg-dark-800/40">
              <img
                src="/hyeonseo.png"
                alt="현서 프로필"
                width="260"
                height="347"
                className="w-full object-cover object-right"
                style={{ aspectRatio: "3 / 4", maxHeight: "320px" }}
              />
            </div>

            <div className="mt-4 grid gap-3">
              {statCards.map((card) => (
                <div
                  key={card.value}
                  className="rounded-xl px-5 py-4 border border-dark-400/60 bg-dark-800/60 transition-all duration-200 hover:border-gold-500/30 hover:-translate-y-0.5"
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
        <ChevronDownIcon className="w-3 h-3 text-gold-500 animate-scroll-drop" />
      </div>
    </section>
  );
}
