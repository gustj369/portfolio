import { meta, openToItems } from "../data/projects";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  ThreadsIcon,
} from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-mono text-gold-500 tracking-[0.3em] uppercase mb-4">
          Contact
        </p>
        <div className="section-divider mb-12 md:mb-16" />

        {/* 2-column layout */}
        <div className="grid md:grid-cols-[minmax(0,1fr)_320px] gap-12 md:gap-16 items-start">

          {/* Left: Title + description + buttons */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
              함께 만들고 싶은 게 있다면
              <br />
              <span className="text-gradient-gold">편하게 이야기해주세요.</span>
            </h2>

            {/* Body copy */}
            <div className="space-y-3 text-gray-400 text-base leading-relaxed mb-3">
              <p>
                같이 작게 시작해서 실제로 돌아가는 걸 만드는 과정을 좋아해요.
                <br className="hidden sm:block" />
                포트폴리오, 사이드 프로젝트, 콘텐츠 실험, AI 워크플로우에 대한
                이야기를 열어두고 있습니다.
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 md:mb-10">
              완벽한 계획보다,
              작게 시작해서 실제로 만들어보는 대화를 좋아합니다.
            </p>

            {/* Contact actions: Email is the primary CTA, GitHub is secondary, SNS links stay compact on mobile. */}
            <div className="flex flex-col gap-3">

              {/* Primary CTA — full-width on mobile */}
              <div>
                {meta.email && (
                  <>
                    <a
                      href={`mailto:${meta.email}`}
                      aria-label={`메일로 연락하기: ${meta.email}`}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 px-5 py-3 rounded-xl border border-gold-500/50 text-gold-400 text-sm hover:border-gold-400 hover:bg-gold-500/8 hover:shadow-[0_0_16px_rgba(212,168,67,0.12)] transition-all duration-200 md:hover:-translate-y-0.5"
                    >
                      <MailIcon />
                      메일로 연락하기
                    </a>
                    <p className="mt-2 text-sm font-mono text-gray-500">
                      {meta.email}
                    </p>
                  </>
                )}
              </div>

              {/* Secondary CTA — development profile */}
              {meta.social.github && (
                <div>
                  <a
                    href={meta.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub 보기"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dark-400 text-gray-400 text-sm hover:border-gold-500/40 hover:text-gold-400 transition-all duration-200 md:hover:-translate-y-0.5"
                  >
                    <GitHubIcon />
                    GitHub 보기
                  </a>
                </div>
              )}

              {/* SNS link group — 2 columns on mobile, wrapping row on larger screens */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
                {meta.social.instagram && (
                  <a
                    href={meta.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram 보기"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dark-400/60 text-gray-500 text-sm hover:border-dark-300/60 hover:text-gray-400 transition-all duration-200 md:hover:-translate-y-0.5"
                  >
                    <InstagramIcon />
                    Instagram 보기
                  </a>
                )}
                {meta.social.threads && (
                  <a
                    href={meta.social.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Threads 보기"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dark-400/60 text-gray-500 text-sm hover:border-dark-300/60 hover:text-gray-400 transition-all duration-200 md:hover:-translate-y-0.5"
                  >
                    <ThreadsIcon />
                    Threads 보기
                  </a>
                )}
                {meta.social.linkedin && (
                  <a
                    href={meta.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn 보기"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-dark-400/60 text-gray-500 text-sm hover:border-dark-300/60 hover:text-gray-400 transition-all duration-200 md:hover:-translate-y-0.5"
                  >
                    <LinkedInIcon />
                    LinkedIn 보기
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right: OPEN TO card */}
          <div className="md:pt-2">
            <div className="rounded-xl border border-dark-400/60 bg-dark-800/50 p-5 md:p-6">
              <p className="text-xs font-mono text-gold-500/80 tracking-widest mb-1.5">
                OPEN TO
              </p>
              <p className="text-[10px] text-gray-700 mb-4 leading-relaxed">
                이런 작업에 관심이 있습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {openToItems.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs rounded-lg border border-dark-400/60 text-gray-500 bg-dark-700/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 md:mt-24 pt-8 border-t border-dark-600/50">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <span className="text-gray-500 leading-relaxed text-center sm:text-left">
            작게 만들고, 직접 써보고, 계속 고쳐갑니다.
          </span>
          <span className="font-mono tracking-widest text-gray-700 whitespace-nowrap">
            © {new Date().getFullYear()} DRAMATIC LIFE · {meta.social.handle}
          </span>
        </div>
      </div>
    </section>
  );
}
