import { identityTags, focusAreas } from "../data/projects";

function IdentityTag({ label, accent }) {
  const cls =
    accent === "gold"
      ? "border-gold-500/40 bg-gold-500/8 text-gold-300"
      : accent === "violet"
      ? "border-violet-500/40 bg-violet-500/8 text-violet-300"
      : "border-dark-400/70 text-gray-300";
  return (
    <span className={`px-3 py-1 text-xs rounded-full border ${cls}`}>
      {label}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          About
        </p>
        <div className="section-divider mb-12 md:mb-16" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: Main intro */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-7 md:mb-8 text-white">
              저는 만들면서
              <br />
              <span className="text-gradient-gold">배웁니다.</span>
            </h2>
            <div className="space-y-4 md:space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                완벽해질 때까지 미루다가 아무것도 안 만들었던 적이 있어요.
                <br />
                그때부터 방식을 바꿨습니다.
              </p>
              <p>
                6년 직장 생활을 하면서, 퇴근 후에 이걸 만들었어요.
              </p>
              <p>
                완벽해질 때까지 미루기보다 작게 만들고,
                <br />
                직접 써보고, 공개하며, 계속 고쳐가는 방식을 선택합니다.
              </p>
            </div>
          </div>

          {/* Right: Cards */}
          <div className="space-y-4 md:space-y-5">
            {/* IDENTITY */}
            <div className="card-dark rounded-xl p-5 md:p-6 transition-all duration-300 md:hover:-translate-y-0.5">
              <p className="text-xs font-mono text-gold-500 tracking-widest mb-4">
                IDENTITY
              </p>
              <div className="flex flex-wrap gap-2">
                {identityTags.map((tag) => (
                  <IdentityTag key={tag.label} {...tag} />
                ))}
              </div>
            </div>

            {/* FOCUS AREAS */}
            <div className="card-dark rounded-xl p-5 md:p-6 transition-all duration-300 md:hover:-translate-y-0.5">
              <p className="text-xs font-mono text-gold-500 tracking-widest mb-4">
                FOCUS AREAS
              </p>
              <ul className="space-y-2 md:space-y-2.5 text-sm text-gray-400">
                {focusAreas.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 block w-1 h-1 rounded-full bg-gold-500/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* PHILOSOPHY */}
            <div className="card-dark rounded-xl p-5 md:p-6 transition-all duration-300 md:hover:-translate-y-0.5">
              <p className="text-xs font-mono text-gold-500 tracking-widest mb-4">
                PHILOSOPHY
              </p>
              <p className="text-sm text-gray-300 leading-relaxed italic">
                "
                <span className="text-gold-400 not-italic font-medium">작게</span>{" "}
                만들고,{" "}
                <span className="text-gold-400 not-italic font-medium">직접 써보고</span>,
                계속 고쳐갑니다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
