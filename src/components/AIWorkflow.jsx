import { workflowSteps } from "../data/projects";

export default function AIWorkflow() {
  return (
    <section id="workflow" className="py-24 md:py-32 px-6 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          AI Workflow
        </p>
        <div className="section-divider mb-10" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            AI를 도구로,
            <br />
            <span className="text-gradient-gold">결과물로 말합니다.</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            AI를 잘 쓰는 것보다, AI를 활용해 실제로 완성하는 것에 집중합니다.
          </p>
        </div>

        {/* Workflow steps */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/40 via-violet-500/20 to-transparent hidden md:block" />

          <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {workflowSteps.map((step, i) => (
              <div
                key={step.step}
                className="card-dark rounded-xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-mono text-gold-500/60 tracking-widest">
                    {step.step}
                  </span>
                  <div className="flex-1 h-px bg-dark-400/60" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 p-6 rounded-xl border border-gold-500/10 bg-gold-500/5">
          <p className="text-sm text-gray-400 leading-relaxed text-center">
            <span className="text-gold-400 font-medium">핵심은 완성입니다.</span>{" "}
            AI는 속도를 높여주지만, 결국 결과물을 만드는 건 판단력과 끈기입니다.
          </p>
        </div>
      </div>
    </section>
  );
}
