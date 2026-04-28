export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          About
        </p>
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Main intro */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6 text-white">
              만드는 것이
              <br />
              <span className="text-gradient-gold">배움의 방식입니다.</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              <p>
                AI를 단순히 쓰는 것에 그치지 않고, 개발과 콘텐츠 제작 과정에
                녹여 실제 결과물로 만드는 것을 좋아합니다.
              </p>
              <p>
                Codex를 활용해 코드를 만들고, 미니게임, 자산 대시보드, 생산성
                도구, 콘텐츠 기획 도구 같은 작은 프로젝트를 꾸준히 실험하고
                있습니다.
              </p>
              <p>
                완벽한 결과물보다 직접 만들고 개선하는 과정을 중요하게
                생각합니다. 작게 시작하고, 실제로 쓰면서 고쳐나가는 방식으로
                성장합니다.
              </p>
            </div>
          </div>

          {/* Right: Tags / Identity */}
          <div className="space-y-6">
            <div className="card-dark rounded-xl p-6 transition-all duration-300">
              <p className="text-xs font-mono text-gold-500 tracking-widest mb-3">
                IDENTITY
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "개발자",
                  "크리에이터",
                  "AI 실험가",
                  "콘텐츠 기획자",
                  "미니게임 메이커",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full border border-dark-400 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-dark rounded-xl p-6 transition-all duration-300">
              <p className="text-xs font-mono text-gold-500 tracking-widest mb-3">
                INTERESTS
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                {[
                  "AI 활용과 자동화 실험",
                  "미니게임 제작 및 배포",
                  "개인 자산 포트폴리오 시각화",
                  "세컨드 브레인 & 생산성 시스템",
                  "인스타 카드뉴스 콘텐츠 제작",
                  "글쓰기와 생각 정리",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 block w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark rounded-xl p-6 transition-all duration-300">
              <p className="text-xs font-mono text-gold-500 tracking-widest mb-3">
                PHILOSOPHY
              </p>
              <p className="text-sm text-gray-400 leading-relaxed italic">
                "완벽하지 않아도 공개한다. 배움은 만드는 과정에 있다."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
