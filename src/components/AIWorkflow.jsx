import { flowSteps, workflowResultProjects, workflowSteps, workflowTools } from "../data/projects";

export default function AIWorkflow() {
  return (
    <section id="workflow" className="scroll-mt-20 py-20 md:py-32 px-6 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          AI Workflow
        </p>
        <div className="section-divider mb-8 md:mb-10" />

        {/* Header + process panel */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] gap-8 lg:gap-12 mb-10 md:mb-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              AI로 시작하지만,
              <br />
              <span className="text-gradient-gold">완성은 직접 합니다.</span>
            </h2>
            <p className="mt-4 md:mt-5 text-sm text-gray-500 max-w-xs leading-relaxed">
              프롬프트보다 중요한 건,
              <br />
              작게 만들고 끝까지 다듬는 과정이라고 생각합니다.
            </p>
          </div>

          <div className="rounded-xl border border-dark-400/50 bg-dark-900/30 p-4 sm:p-5">
            {/* Flow pill */}
            <div className="mb-5">
              <div className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1.5 px-3.5 py-1.5 rounded-lg border border-dark-400/50 bg-dark-800/30">
                {flowSteps.map((step, i) => (
                  <span key={step} className="inline-flex items-center gap-2">
                    <span className="text-xs font-mono text-gray-500">{step}</span>
                    {i < flowSteps.length - 1 && (
                      <span className="text-gold-500/50 text-xs">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools row */}
            <div>
              <span className="block text-xs font-mono text-gray-700 tracking-widest mb-3">
                TOOLS USED
              </span>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {workflowTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="px-3 py-2 rounded-lg border border-dark-400/50 bg-dark-800/40"
                  >
                    <p className="text-xs font-mono text-gray-400 leading-none mb-1">
                      {tool.name}
                    </p>
                    <p className="text-[10px] text-gray-700 leading-none whitespace-nowrap">
                      {tool.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Workflow cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {workflowSteps.map((step) => (
            <div
              key={step.step}
              className="card-dark rounded-xl p-5 md:p-6 transition-all duration-300 group hover:border-gold-500/20 hover:-translate-y-0.5"
            >
              {/* Step number + flow line */}
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <span className="text-xs font-mono text-gold-500/70 tracking-widest flex-shrink-0 group-hover:text-gold-400 transition-colors duration-200">
                  {step.step}
                </span>
                <div className="flex-1 h-px bg-dark-400/50 group-hover:bg-gold-500/25 transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-gray-100 mb-2 group-hover:text-gold-400 transition-colors duration-200">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Result projects row */}
        <div className="flex items-center gap-3 mt-7 md:mt-8 flex-wrap">
          <span className="text-xs font-mono text-gray-700 tracking-widest">
            이 흐름으로 만든 결과물들
          </span>
          <div className="w-3 h-px bg-dark-500/60 hidden sm:block" />
          <div className="flex gap-2 flex-wrap">
            {workflowResultProjects.map((p) => (
              <a
                key={p.name}
                href={p.href}
                className="px-2.5 py-1 text-xs font-mono rounded border border-dark-400/50 text-gray-600 hover:text-gray-400 hover:border-dark-300/50 transition-colors duration-200"
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-8 md:mt-10 p-5 md:p-6 rounded-xl border border-gold-500/15 bg-gold-500/5">
          <p className="text-sm text-gray-400 leading-relaxed text-center">
            <span className="text-gold-400 font-medium">핵심은 완성입니다.</span>{" "}
            AI는 도와주지만, 끝까지 만드는 건 결국 사람의 판단과 끈기라고 생각합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
