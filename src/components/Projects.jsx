import { projects } from "../data/projects";

const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const statusConfig = {
  Playable:  "text-gold-400 border-gold-500/30 bg-gold-500/8",
  Live:      "text-gold-400 border-gold-500/30 bg-gold-500/8",
  Completed: "text-gold-400 border-gold-500/30 bg-gold-500/8",
  Prototype:   "text-violet-400 border-violet-500/30 bg-violet-500/8",
  "In Progress": "text-violet-400 border-violet-500/30 bg-violet-500/8",
  Archive:   "text-gray-500 border-dark-400 bg-dark-600/30",
};

function StatusPill({ status }) {
  const cls = statusConfig[status] || statusConfig.Archive;
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-xs font-mono rounded border ${cls}`}>
      {status}
    </span>
  );
}

function ProjectCard({ project }) {
  const { featured, color, status, title, sublabel, description, keyBuild, tags, github, demo, demoLabel } = project;
  const isSlate = color === "slate";
  const isViolet = color === "violet";

  const cardBase = "rounded-2xl p-6 flex flex-col gap-3.5 border transition-all duration-300 group hover:-translate-y-1";
  const cardAccent = featured
    ? "border-gold-500/25 bg-dark-800/60 hover:border-gold-500/45 hover:shadow-[0_0_24px_rgba(212,168,67,0.07)]"
    : isSlate
    ? "border-dark-400/40 bg-dark-800/20 hover:border-dark-300/40"
    : isViolet
    ? "border-dark-500/50 bg-dark-800/50 hover:border-violet-500/25"
    : "border-dark-500/50 bg-dark-800/50 hover:border-gold-500/25";

  const titleAccent = isSlate
    ? "text-gray-500"
    : isViolet
    ? "text-gray-100 group-hover:text-violet-400"
    : "text-gray-100 group-hover:text-gold-400";

  const primaryHref = demo || github;
  const showSecondaryGithub = !!demo && !!github && !isSlate;

  return (
    <div className={`${cardBase} ${cardAccent}`}>
      {/* Status row */}
      <div className="flex items-center justify-between">
        <StatusPill status={status} />
        {!isSlate && !!github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} on GitHub`}
            className="p-1.5 rounded-lg border border-dark-400 hover:border-gold-500/60 text-gray-500 hover:text-gold-400 transition-all duration-200"
          >
            <GitHubIcon />
          </a>
        )}
      </div>

      {/* Title */}
      <h3 className={`text-base font-semibold leading-snug transition-colors duration-200 ${titleAccent}`}>
        {title}
      </h3>

      {/* Sublabel — 한 줄 소개 */}
      {sublabel && (
        <p className={`text-xs leading-relaxed -mt-1 ${
          isSlate ? "text-gray-600" : isViolet ? "text-violet-400/60" : "text-gold-500/60"
        }`}>
          {sublabel}
        </p>
      )}

      {/* Description */}
      <p className={`text-sm leading-relaxed flex-1 ${isSlate ? "text-gray-600" : "text-gray-500"}`}>
        {description}
      </p>

      {/* Key Build */}
      {keyBuild && (
        <p className={`text-[10px] font-mono leading-relaxed border-t pt-2.5 -mt-0.5 ${
          isSlate
            ? "text-gray-700 border-dark-600/25"
            : "text-gray-600 border-dark-600/50"
        }`}>
          {keyBuild}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-0.5 text-xs rounded border ${
              isSlate ? "border-dark-500/50 text-gray-600" : "border-dark-400/60 text-gray-500"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div className={`border-t ${isSlate ? "border-dark-600/30" : "border-dark-600/60"}`} />

      {/* Action links */}
      <div className="flex items-center gap-5">
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ${
            isSlate ? "text-gray-500 hover:text-gray-300" : "text-gray-300 hover:text-gold-400"
          }`}
        >
          {demoLabel || "자세히 보기"}
          <ArrowIcon />
        </a>
        {showSecondaryGithub && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-400 transition-colors duration-200"
          >
            코드 보기
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          Projects
        </p>
        <div className="section-divider mb-10" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              직접 만든
              <br />
              <span className="text-gradient-gold">작은 결과물들</span>
            </h2>
            <p className="mt-3 text-xs font-mono text-gray-600 tracking-widest">
              Live 3 · Playable 1 · In Progress 1
            </p>
          </div>
          <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            아이디어에서 멈추지 않고,
            <br />
            실제로 작동하는 형태까지 만듭니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
