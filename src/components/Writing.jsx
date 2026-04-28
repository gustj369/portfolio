import { writingTopics } from "../data/projects";

const stats = [
  {
    value: "9 MONTHS",
    label: "퇴근 후에도 이어온 기록",
    color: "gold",
  },
  {
    value: "2 CHANNELS",
    label: "Threads · Instagram",
    color: "violet",
  },
  {
    value: "6 THEMES",
    label: "성장 · AI · 공부 · 콘텐츠 · 일상 · 카드뉴스",
    color: "slate",
  },
];

function WritingCard({ topic }) {
  const isGold = topic.accent === "gold";
  const isViolet = topic.accent === "violet";

  const cardClass = isGold
    ? "border-gold-500/30 bg-dark-800/60 hover:border-gold-500/45"
    : isViolet
    ? "border-violet-500/30 bg-dark-800/60 hover:border-violet-500/45"
    : "border-dark-500/50 bg-dark-800/40 hover:border-dark-400/70";

  const iconClass = isGold
    ? "text-gold-400 bg-gold-500/10"
    : isViolet
    ? "text-violet-400 bg-violet-500/10"
    : "text-gray-500 bg-dark-600/60";

  const titleClass = isGold
    ? "text-gold-400"
    : isViolet
    ? "text-violet-400"
    : "text-gray-200";

  return (
    <div
      className={`rounded-xl p-5 border flex flex-col gap-3 transition-all duration-300 group backdrop-blur-sm hover:-translate-y-0.5 ${cardClass}`}
    >
      {/* Icon */}
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono flex-shrink-0 ${iconClass}`}>
        {topic.icon}
      </div>

      {/* Title + sublabel */}
      <div>
        <h3 className={`text-sm font-semibold leading-snug mb-0.5 ${titleClass}`}>
          {topic.title}
        </h3>
        {topic.sublabel && (
          <span className="text-[10px] font-mono text-gray-600 tracking-[0.2em]">
            {topic.sublabel}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed">
        {topic.description}
      </p>
    </div>
  );
}

export default function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          Writing · Growth Log
        </p>
        <div className="section-divider mb-10" />

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
          {/* Title + description */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-5">
              <span className="text-gradient-gold">9개월</span>의 기록이
              <br />
              저를 성장시켰습니다.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              지난 9개월 동안 퇴근 후의 생각과 시도를 기록해왔습니다.
              <br />
              직장인 성장, AI 활용, 콘텐츠 제작, 일상 속 깨달음을 중심으로
              <br />
              완벽한 성공담보다 매일 조금씩 나아지는 과정을 남기고 있습니다.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 flex-shrink-0">
            <p className="text-xs text-gray-600 font-mono tracking-widest">
              기록은 여기에서 이어가고 있습니다.
            </p>
            <a
              href="https://www.instagram.com/94hyeonseo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dark-400 hover:border-gold-500/50 text-gray-400 hover:text-gold-400 text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram 보기
            </a>
            <a
              href="https://www.threads.com/@94hyeonseo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dark-400 hover:border-gold-500/50 text-gray-400 hover:text-gold-400 text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.852 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 012.076.175V12c0-.91-.244-1.612-.753-2.129-.51-.517-1.24-.78-2.211-.801-1.275.025-2.22.625-2.67 1.478l-1.776-1.075c.713-1.348 2.105-2.157 3.976-2.226 1.64.001 2.98.489 3.908 1.41.903.896 1.372 2.16 1.372 3.68v.1c.493.23.96.497 1.393.806 1.34.96 2.152 2.336 2.43 3.907.375 2.104-.175 4.29-1.647 5.96-1.701 1.93-4.137 2.836-7.36 2.86h-.007z" />
              </svg>
              Threads 보기
            </a>
          </div>
        </div>

        {/* Stat pills */}
        <div className="flex flex-col sm:flex-row gap-3 mb-14">
          {stats.map((stat) => {
            const borderClass =
              stat.color === "gold"
                ? "border-gold-500/20"
                : stat.color === "violet"
                ? "border-violet-500/20"
                : "border-dark-400/60";
            const valueClass =
              stat.color === "gold"
                ? "text-gold-400"
                : stat.color === "violet"
                ? "text-violet-400"
                : "text-gray-400";
            return (
              <div
                key={stat.value}
                className={`flex-1 px-5 py-3.5 rounded-xl border bg-dark-800/40 ${borderClass}`}
              >
                <p className={`text-xs font-mono font-semibold tracking-widest mb-0.5 ${valueClass}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Topic cards — 3-col desktop, 2-col tablet, 1-col mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {writingTopics.map((topic) => (
            <WritingCard key={topic.title} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
