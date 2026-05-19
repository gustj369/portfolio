import { writingTopics, formatWritingDuration, meta } from "../data/projects";
import { InstagramIcon, ThreadsIcon } from "./icons";

function WritingCard({ topic }) {
  const isGold   = topic.accent === "gold";
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
      className={`rounded-xl p-5 border flex flex-col gap-3 transition-all duration-300 group backdrop-blur-sm md:hover:-translate-y-0.5 ${cardClass}`}
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
      <p className="text-xs text-gray-500 leading-relaxed flex-1">
        {topic.description}
      </p>

      {/* Tags */}
      {topic.tags && topic.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {topic.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono rounded border border-dark-500/60 text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Writing({ months }) {
  const featuredTopic = writingTopics.find((t) => t.featured);
  const restTopics = writingTopics.filter((t) => !t.featured);

  return (
    <section id="writing" className="scroll-mt-20 py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          Writing · Growth Log
        </p>
        <div className="section-divider mb-8 md:mb-10" />

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-3">
          <span className="text-gradient-gold">{formatWritingDuration(months)}</span>의 기록이
          <br />
          저를 바꿨습니다.
        </h2>

        {/* Subtext */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          드라마틱 라이프({meta.social.handle}) — 평범한 직장인의 하루를 조금 더 솔직하게 남기는 기록입니다.
        </p>

        {/* Body copy */}
        <div className="text-sm text-gray-400 leading-relaxed max-w-xl mb-8 md:mb-10">
          <p>
            퇴근 후에도 글을 쓰고, AI로 실험하며,
            <br />
            나만의 성장 기록을 쌓아가고 있습니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 md:mb-14">
          {[featuredTopic, ...restTopics].filter(Boolean).map((topic) => (
            <WritingCard key={topic.title} topic={topic} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 md:gap-6 pt-7 md:pt-8 border-t border-dark-600/40">
          <p className="text-sm text-gray-500 leading-relaxed">
            기록은 아직 완성된 답이 아니라,
            <br />
            계속 고쳐가는 과정입니다.
          </p>
          <div className="grid w-full grid-cols-2 gap-2.5 sm:flex sm:w-auto sm:flex-wrap flex-shrink-0">
            {/* Primary — Threads */}
            {meta.social.threads && (
              <a
                href={meta.social.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dark-400 hover:border-gold-500/50 text-gray-400 hover:text-gold-400 text-sm transition-all duration-200 md:hover:-translate-y-0.5"
              >
                <ThreadsIcon />
                Threads 보기
              </a>
            )}
            {/* Secondary — Instagram */}
            {meta.social.instagram && (
              <a
                href={meta.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dark-400/60 hover:border-dark-300/60 text-gray-600 hover:text-gray-400 text-sm transition-all duration-200 md:hover:-translate-y-0.5"
              >
                <InstagramIcon />
                Instagram 보기
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
