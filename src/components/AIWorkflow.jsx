import { workflowSteps } from "../data/projects";

const tools = ["ChatGPT", "Codex", "GitHub", "Figma"];

export default function AIWorkflow() {
  return (
    <section id="workflow" className="py-24 md:py-32 px-6 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          AI Workflow
        </p>
        <div className="section-divider mb-10" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            AI로 시작해,
            <br />
            <span className="text-gradient-gold">결과물로 완성합니다.</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            프롬프트보다 중요한 건,
            <br />
            작게 만들고 끝까지 다듬는 과정이라고 믿습니다.
          </p>
        </div>

        {/* Tools pill row */}
        <div className="flex items-center gap-3 mb-12 flex-wrap">
          <span className="text-xs font-mono text-gray-700 tracking-widest">TOOLS USED</span>
          <div className="w-4 h-px bg-dark-500/60" />
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 text-xs font-mono rounded-lg border border-dark-400/50 text-gray-600 bg-dark-800/40"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Workflow cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {workflowSteps.map((step) => (
            <div
              key={step.step}
              className="card-dark rounded-xl p-6 transition-all duration-300 group hover:border-gold-500/20 hover:-translate-y-0.5"
            >
              {/* Step number + flow line */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-gold-500/70 tracking-widest flex-shrink-0">
                  {step.step}
                </span>
                <div className="flex-1 h-px bg-dark-400/50 group-hover:bg-gold-500/25 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-100 mb-2.5 group-hover:text-gold-400 transition-colors duration-200">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 p-6 rounded-xl border border-gold-500/15 bg-gold-500/5">
          <p className="text-sm text-gray-400 leading-relaxed text-center">
            <span className="text-gold-400 font-medium">핵심은 완성입니다.</span>{" "}
            AI는 속도를 높여주지만, 결과물을 끝까지 만드는 건 결국 판단력과 끈기입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
