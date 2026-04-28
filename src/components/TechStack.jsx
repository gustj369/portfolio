import { techStack } from "../data/projects";

const labelColors = {
  gold: "text-gold-400",
  violet: "text-violet-400",
  slate: "text-slate-400",
};

function TagItem({ name, highlighted, color }) {
  if (highlighted) {
    const highlightClass =
      color === "violet"
        ? "border-violet-500/40 bg-violet-500/8 text-violet-300 hover:border-violet-400/60"
        : "border-gold-500/40 bg-gold-500/8 text-gold-300 hover:border-gold-400/60";
    return (
      <span
        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors duration-200 ${highlightClass}`}
      >
        {name}
      </span>
    );
  }
  return (
    <span className="px-3 py-1.5 text-sm rounded-lg border border-dark-400 text-gray-400 hover:border-dark-300 hover:text-gray-300 transition-colors duration-200">
      {name}
    </span>
  );
}

function StackCard({ stack }) {
  return (
    <div className="card-dark rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 group">
      {/* Label */}
      <p className={`text-xs font-mono tracking-widest ${labelColors[stack.color] || "text-gold-400"}`}>
        {stack.category}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed -mt-1">
        {stack.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {stack.items.map((item) => (
          <TagItem
            key={item}
            name={item}
            highlighted={stack.highlight.includes(item)}
            color={stack.color}
          />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32 px-6 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          Tech Stack
        </p>
        <div className="section-divider mb-10" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            아이디어를 구현하는
            <br />
            <span className="text-gradient-gold">기술과 도구</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            도구를 배우는 것보다 도구로 무언가를 만드는 데 집중합니다.
          </p>
        </div>

        {/* 2-column grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {techStack.map((stack) => (
            <StackCard key={stack.category} stack={stack} />
          ))}
        </div>

        {/* Currently Exploring — full width */}
        <div className="card-dark rounded-xl p-6 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 gap-4">
            <div className="sm:w-64 flex-shrink-0">
              <p className="text-xs font-mono text-violet-400 tracking-widest mb-2">
                CURRENTLY EXPLORING
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                디자인 감각과 게임 개발 능력을 확장하고 있습니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 pt-0.5">
              {["Figma", "Game Dev"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-lg border border-violet-500/25 bg-violet-500/5 text-violet-400/80 hover:border-violet-500/50 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
