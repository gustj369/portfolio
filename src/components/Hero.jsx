export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#d4a843 1px, transparent 1px), linear-gradient(90deg, #d4a843 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full pt-24">
        {/* Label */}
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-6 animate-fade-in">
          Developer · Creator
        </p>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight mb-6 animate-slide-up">
          AI와 개발로
          <br />
          <span className="text-gradient-gold">작은 결과물을</span>
          <br />
          만드는 개발자
        </h1>

        {/* Sub heading */}
        <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed mb-10 animate-slide-up">
          코드, 콘텐츠, 일상의 문제를 연결해
          <br className="hidden sm:block" />
          직접 만들고 실험합니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-dark-900 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,168,67,0.3)]"
          >
            프로젝트 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="https://github.com/gustj369"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-dark-400 hover:border-gold-500/60 text-gray-300 hover:text-gold-400 text-sm font-medium rounded-lg transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub 보기
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 hidden md:flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-500" />
          <span className="text-xs font-mono text-gold-500 tracking-widest rotate-90 origin-left translate-y-6">
            SCROLL
          </span>
        </div>
      </div>
    </section>
  );
}
