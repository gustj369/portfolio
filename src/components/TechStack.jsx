import { techStack } from "../data/projects";

const categoryColors = {
  Frontend: "text-gold-400",
  Tools: "text-violet-400",
  Content: "text-gold-400",
  Interest: "text-violet-400",
};

export default function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32 px-6 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          Tech Stack
        </p>
        <div className="section-divider mb-10" />

        <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-14">
          사용하는
          <br />
          <span className="text-gradient-gold">도구들</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {techStack.map((stack) => (
            <div
              key={stack.category}
              className="card-dark rounded-xl p-6 transition-all duration-300 group"
            >
              <p
                className={`text-xs font-mono tracking-widest mb-4 ${
                  categoryColors[stack.category] || "text-gold-400"
                }`}
              >
                {stack.category.toUpperCase()}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-lg border border-dark-400 group-hover:border-dark-300 text-gray-300 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div className="mt-6 card-dark rounded-xl p-6 transition-all duration-300">
          <p className="text-xs font-mono text-violet-400 tracking-widest mb-4">
            CURRENTLY EXPLORING
          </p>
          <div className="flex flex-wrap gap-2">
            {["Figma"].map(
              (item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-lg border border-violet-500/20 bg-violet-500/5 text-violet-400/80"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
