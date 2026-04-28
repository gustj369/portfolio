import { writingTopics } from "../data/projects";

export default function Writing() {
  return (
    <section id="writing" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          Writing · Content
        </p>
        <div className="section-divider mb-10" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            기록이
            <br />
            <span className="text-gradient-gold">성장이 됩니다.</span>
          </h2>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/94hyeonseo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gold-400 transition-colors border border-dark-400 hover:border-gold-500/40 px-3 py-1.5 rounded-lg"
            >
              Instagram
            </a>
            <a
              href="https://www.threads.com/@94hyeonseo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gold-400 transition-colors border border-dark-400 hover:border-gold-500/40 px-3 py-1.5 rounded-lg"
            >
              Threads
            </a>
          </div>
        </div>

        {/* Intro text */}
        <div className="max-w-2xl mb-12">
          <p className="text-gray-400 text-base leading-relaxed">
            스레드와 인스타를 통해 직장인 성장, AI 활용, 일상 속 깨달음, 콘텐츠
            제작 과정을 기록하고 있습니다. 거창한 성공담보다, 퇴근 후에도 조금씩
            배우고 만들며 성장하는 현실적인 이야기를 담으려 합니다.
          </p>
        </div>

        {/* Topic cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {writingTopics.map((topic) => (
            <div
              key={topic.title}
              className="card-dark rounded-xl p-5 transition-all duration-300 group"
            >
              <div className="text-2xl mb-3">{topic.icon}</div>
              <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-gold-400 transition-colors duration-200">
                {topic.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}

          {/* DRAMATIC LIFE card */}
          <div className="card-dark rounded-xl p-5 transition-all duration-300 group border-gold-500/20 col-span-full sm:col-span-1">
            <div className="text-2xl mb-3">✦</div>
            <h3 className="text-sm font-semibold text-gold-400 mb-2">
              DRAMATIC LIFE
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              평범한 일상도 시선을 바꾸면 드라마가 됩니다. 카드뉴스로 담은 일상의 순간들.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
