import { currentlyExploring, techStack } from "../data/projects";

const labelColors = {
  gold:   "text-gold-400",
  violet: "text-violet-400",
  slate:  "text-slate-400",
};

function TagItem({ name, highlighted, color }) {
  if (highlighted) {
    const highlightClass =
      color === "violet"
        ? "border-violet-500/40 bg-violet-500/8 text-violet-300 group-hover:border-violet-400/60"
        : "border-gold-500/40 bg-gold-500/8 text-gold-300 group-hover:border-gold-400/60";
    return (
      <span
        className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-colors duration-200 ${highlightClass}`}
      >
        {name}
      </span>
    );
  }
  return (
    <span className="px-2.5 py-1 text-xs font-mono rounded-lg border border-dark-400/60 text-gray-500 hover:border-dark-300/60 hover:text-gray-400 transition-colors duration-200">
      {name}
    </span>
  );
}

function StackCard({ stack }) {
  const items = stack.items || [];
  const highlight = stack.highlight || [];

  return (
    <div className="card-dark rounded-xl p-5 md:p-6 flex flex-col gap-3.5 md:gap-4 transition-all duration-300 group md:hover:-translate-y-0.5">
      {/* Category label */}
      <p className={`text-xs font-mono tracking-widest ${labelColors[stack.color] || "text-gold-400"}`}>
        {stack.category}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed -mt-1">
        {stack.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {items.map((item) => (
          <TagItem
            key={item}
            name={item}
            highlighted={highlight.includes(item)}
            color={stack.color}
          />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 py-20 md:py-32 px-6 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          Tech Stack
        </p>
        <div className="section-divider mb-8 md:mb-10" />

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-9 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            아이디어를 구현하는
            <br />
            <span className="text-gradient-gold">기술과 도구</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            도구를 배우는 데서 멈추지 않고,
            <br />
            작은 결과물로 연결하는 데 집중합니다.
          </p>
        </div>

        {/* Currently Exploring */}
        <div className="card-dark rounded-xl p-5 md:p-6 transition-all duration-300 group md:hover:-translate-y-0.5 mb-4 md:mb-5">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-mono text-violet-400 tracking-widest mb-2.5">
                {currentlyExploring.title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {currentlyExploring.description.split("\n").map((line, index) => (
                  <span key={`${index}-${line}`}>
                    {index > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {currentlyExploring.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg border border-violet-500/25 bg-violet-500/5 text-violet-400/80 group-hover:border-violet-500/45 group-hover:text-violet-300 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stack grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {techStack.map((stack) => (
            <StackCard key={stack.category} stack={stack} />
          ))}
        </div>
      </div>
    </section>
  );
}
