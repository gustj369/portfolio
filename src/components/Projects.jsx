import { projects } from "../data/projects";

const tagColors = {
  gold: "bg-gold-500/10 text-gold-400 border-gold-500/20",
  violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

function ProjectCard({ project }) {
  const accentClass = tagColors[project.color] || tagColors.gold;

  return (
    <div className="card-dark rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 group cursor-default">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
            project.color === "violet"
              ? "bg-violet-500/10"
              : "bg-gold-500/10"
          }`}
        >
          {project.color === "violet" ? "⬡" : "◈"}
        </div>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border border-dark-400 hover:border-gold-500/60 text-gray-500 hover:text-gold-400 transition-all duration-200"
            title="GitHub"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3
          className={`text-base font-semibold mb-2 ${
            project.color === "violet"
              ? "group-hover:text-violet-400"
              : "group-hover:text-gold-400"
          } transition-colors duration-200`}
        >
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`px-2 py-0.5 text-xs rounded border ${accentClass}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={project.demoLabel && project.demo !== "#" ? project.demo : project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gold-400 transition-colors duration-200"
      >
        {project.demoLabel || "자세히 보기"}
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
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
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            직접 만든
            <br />
            <span className="text-gradient-gold">실험들</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-xs md:text-right leading-relaxed">
            아이디어를 실제로 작동하는 결과물로 만드는 과정을 반복합니다.
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
