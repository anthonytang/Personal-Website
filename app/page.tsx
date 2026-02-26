"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const spring = { type: "spring" as const, stiffness: 300, damping: 24 };
const springSoft = { type: "spring" as const, stiffness: 200, damping: 20 };
const nameChars = "Anthony Tang.".split("");
const taglineWords = "I build large-scale AI and web systems.".split(" ");

const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

export default function Home() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const heroSocialRef = useRef<HTMLDivElement | null>(null);
  const heroSocialInView = useInView(heroSocialRef, { amount: 0.3 });

  const handleCopy = (copyValue: string, label: string) => {
    navigator.clipboard.writeText(copyValue);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <main className="max-w-[1200px] mx-auto counter-reset-section" style={{ paddingLeft: 'clamp(24px, 5vw, 48px)', paddingRight: 'clamp(24px, 5vw, 48px)' }}>
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-start pt-[var(--nav-height)] pb-16">
        <div className="hero-row w-full flex flex-row items-start justify-between gap-6 md:gap-10 min-h-0">
          <div className="relative min-w-0 flex-shrink">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ opacity: { delay: 0.05, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }, y: { delay: 0.05, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }}
            className="text-green font-mono text-xs tracking-widest uppercase mb-5"
          >
            Hi, my name is
          </motion.p>
          <motion.h1
            className="text-[clamp(2.25rem,5.5vw,3.5rem)] font-semibold text-lightest-slate leading-[1.1] tracking-tight m-0 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={spring}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-medium text-slate/95 leading-tight mt-1.5 tracking-tight overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
              hidden: {},
            }}
          >
            {taglineWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={spring}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
            className="max-w-[500px] mt-6 text-[15px] text-slate/90 leading-[1.65]"
          >
            Student at <span className="text-green">Rice University</span> (BS CS, BA
            Statistics, Minor Data Science). Full-stack &amp; AI/ML. Prev @ <span className="text-green">WhyAI</span>. Co-authored
            <span className="text-green"> AAAI-26</span> paper on interpretability and
            LLM failures.
          </motion.p>
          <motion.div
            ref={heroSocialRef}
            className="flex items-center mt-6"
            style={{ gap: '24px' }}
            initial={{ opacity: 0, y: 16 }}
            animate={
              heroSocialInView
                ? {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.85,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      delay: 0.7,
                    },
                  }
                : {
                    opacity: 0,
                    y: 16,
                    transition: {
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }
            }
          >
            <motion.a
              href="https://github.com/anthonytang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full overflow-hidden bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 transition-opacity"
              aria-label="GitHub"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anthony-tang-69665a279/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] rounded-full overflow-hidden bg-[var(--ink)] text-[var(--bg)] hover:opacity-90 transition-opacity"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </motion.a>
          </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.25 }}
            className="hero-photo-frame shrink-0 w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] -mt-2"
          >
            <div className="hero-photo-frame-inner w-full h-full">
              <Image
                src="/anthony.png"
                alt="Anthony Tang"
                width={720}
                height={720}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-[640px]" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <motion.h2
          className="numbered-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          className="text-slate/90 text-[15px] leading-[1.8] mt-1"
        >
          I was born in Round Rock and grew up in Austin, TX. I&apos;ve always been
          curious how things work and loved building things of my own, which led me to
          CS, where I could combine problem-solving, creativity, and curiosity to
          build systems that help people. Outside of code, I enjoy reading, tennis,
          pickleball, and time with my dog! I played trombone and bass trombone for
          seven years, which taught me teamwork, discipline, and communication.
          Those experiences shape how I work: clarity, collaboration, and ownership.
          I&apos;m a fast learner and like taking on complex, large-scale systems,
          whether refactoring backends, real-time translation for wearables, or
          researching why language models fail.
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-[640px]" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <motion.h2
          className="numbered-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          Education
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-30px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
            hidden: {},
          }}
          whileHover={{ x: 6, scale: 1.02, rotateY: 2 }}
          transition={springSoft}
          style={{ transformOrigin: "left center" }}
          className="mt-1"
        >
          <motion.h3
            variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
            transition={spring}
            className="text-[15px] font-medium text-lightest-slate"
          >
            Rice University
          </motion.h3>
          <motion.p
            variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
            transition={spring}
            className="font-mono text-xs text-green/70 mt-1.5"
          >
            May 2027 · Houston, TX
          </motion.p>
          <motion.p
            variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
            transition={spring}
            className="mt-4 text-slate/90 text-[14px] leading-relaxed"
          >
            BS Computer Science, BA Statistics, Minor Data Science · GPA 3.85/4.0
          </motion.p>
          <motion.p
            variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}
            transition={spring}
            className="mt-3 text-slate/70 text-[13px]"
          >
            Coursework: Computational Thinking, Data Structures & Algorithms, Program Design, Computer Systems, Programming Languages,
            Concurrent Programming, Computer Security, Data Science, Linear Regression, Probability & Statistics, Multivariate Calculus, Linear Algebra
          </motion.p>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-[640px]" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <motion.h2
          className="numbered-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          Where I&apos;ve Worked
        </motion.h2>
        <div className="mt-1" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {[
            {
              role: "Software Engineer Intern",
              company: "WhyAI",
              location: "Houston, TX",
              period: "Oct 2025 – Jan 2026",
              bullets: [
                "Spearheaded large-scale backend refactor: migrated 70%+ of codebase to layered microservices (SOLID), eliminating technical debt.",
                "Built cloud-native CI/CD with Pytest & Playwright; 80% coverage, 99.9% deployment reliability.",
              ],
            },
            {
              role: "Software Engineer Intern",
              company: "Curriculum Associates",
              location: "Boston, MA",
              period: "May 2025 – Aug 2025",
              bullets: [
                "Optimized data viz for 500+ developers: high-performance query for 100k+ points, 50% productivity gain.",
                "Led React.js migration of mission-critical asset management; improved responsiveness and maintainability.",
                "1st place hackathon: AI transcript generator (NLP), 50% faster content creation.",
              ],
            },
            {
              role: "Software Engineer Intern",
              company: "Curriculum Associates",
              location: "Boston, MA",
              period: "May 2024 – Aug 2024",
              bullets: [
                "Agile work on enterprise CMS: API optimizations and critical bug fixes for 500+ DAU.",
                "Jira automation scripts removed 5+ hrs manual work per sprint.",
                "1st place hackathon: third-party SDK integration, 10% team efficiency gain.",
              ],
            },
          ].map((job, i) => (
            <motion.article
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{ ...spring, delay: i * 0.08 }}
              whileHover={{ x: 4, scale: 1.01 }}
              className="group"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[15px] font-medium text-lightest-slate group-hover:text-green/90 transition-colors">
                  {job.role}
                </h3>
                <span className="font-mono text-[11px] text-green/80 tabular-nums">
                  {job.period}
                </span>
              </div>
              <p className="font-mono text-xs text-green/70 mt-1">
                {job.company} · {job.location}
              </p>
              <motion.ul
                className="content-list mt-5 text-slate/90 text-[14px] leading-[1.65]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.06 } },
                  hidden: {},
                }}
              >
                {job.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={spring}
                  >
                    {b}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WORK: PROJECTS + RESEARCH */}
      <section id="work" className="max-w-[640px]" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <motion.h2
          className="numbered-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          Some Things I&apos;ve Built
        </motion.h2>

        <div className="mt-1" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {/* Research – Why It Failed */}
          <motion.article
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ ...spring, delay: 0.05 }}
            whileHover={{ x: 6, scale: 1.01, rotateY: 2 }}
            style={{ transformOrigin: "left center" }}
            className="group"
          >
            <span className="font-mono text-[11px] text-green/80 uppercase tracking-wider">
              Research · AAAI-26
            </span>
            <h3 className="text-[16px] font-medium text-lightest-slate mt-1.5 mb-3 group-hover:text-green/90 transition-colors">
              Why It Failed: A Benchmark to Evaluate Interpretability
            </h3>
            <div className="text-slate/85 text-[14px] leading-[1.65] space-y-2 mt-0.5">
              LM4UC Workshop, AAAI-26. Co-authored with Joel Mathew, Aditya Lagu,
              Prudhviraj Naidu (Algoverse AI Research / UC San Diego). Benchmark for
              whether interpretability methods explain model failures. Last-token
              logistic probes on Gemma-2 2B across four reasoning tasks achieve
              near-chance performance, highlighting a gap for AI safety and failure
              prediction. We provide a standardized framework and argue for explaining
              failure modes, not just reporting metrics.
            </div>
            <motion.p
              className="font-mono text-[11px] text-slate/70 flex flex-wrap items-center"
              style={{ marginTop: '28px', gap: '0 14px' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                hidden: {},
              }}
            >
              {["Python", "PyTorch", "Scikit-learn", "Gemma-2 2B"].map((tech, i) => (
                <span key={tech} className="contents">
                  {i > 0 && <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.6 } }} transition={spring}> | </motion.span>}
                  <motion.span variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }} transition={spring}>{tech}</motion.span>
                </span>
              ))}
            </motion.p>
            <div className="font-mono text-xs flex flex-wrap" style={{ marginTop: '28px', gap: '24px' }}>
              <motion.a
                href="/why-it-failed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green/90 hover:text-green transition-colors"
                whileHover={{ x: 4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springSoft}
              >
                Paper →
              </motion.a>
              <motion.a
                href="https://github.com/anthonytang/LLM-Detection-Testing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green/90 hover:text-green transition-colors"
                whileHover={{ x: 4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={springSoft}
              >
                Code →
              </motion.a>
            </div>
          </motion.article>

          {/* Project – Adapt Language Learner */}
          <motion.article
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-40px" }}
            transition={{ ...spring, delay: 0.08 }}
            whileHover={{ x: 6, scale: 1.01, rotateY: 2 }}
            style={{ transformOrigin: "left center" }}
            className="group"
          >
            <span className="font-mono text-[11px] text-green/80 uppercase tracking-wider">
              Featured Project
            </span>
            <h3 className="text-[16px] font-medium text-lightest-slate mt-1.5 mb-3 group-hover:text-green/90 transition-colors">
              Adapt Language Learner
            </h3>
            <div className="text-slate/85 text-[14px] leading-[1.65] space-y-2 mt-0.5">
              Real-time full-stack translation for wearable tech (AugmentOS SDK).
              WebSocket streams tuned for sub-second latency in live captioning.
              Server-side pipeline with Supabase + regex for automated feature
              extraction (idioms, conversation metrics).
            </div>
            <motion.p
              className="font-mono text-[11px] text-slate/70 flex flex-wrap items-center"
              style={{ marginTop: '28px', gap: '0 14px' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                hidden: {},
              }}
            >
              {["TypeScript", "React", "Node.js", "Supabase", "PostgreSQL"].map((tech, i) => (
                <span key={tech} className="contents">
                  {i > 0 && <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.6 } }} transition={spring}> | </motion.span>}
                  <motion.span variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }} transition={spring}>{tech}</motion.span>
                </span>
              ))}
            </motion.p>
          </motion.article>
        </div>
      </section>

      {/* OTHER NOTEWORTHY PROJECTS */}
      <section id="other-projects" className="max-w-[960px]" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
        <motion.h2
          className="numbered-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          Other Projects
        </motion.h2>
        <motion.div
          className="flex flex-wrap items-center"
          style={{ marginTop: '8px', marginBottom: '48px' }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ...spring, delay: 0.12 }}
        >
          <motion.a
            href="https://github.com/anthonytang"
            target="_blank"
            rel="noopener noreferrer"
            className="archive-link-button"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            view the archive
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }} aria-hidden><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </motion.a>
        </motion.div>
        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '32px',
            rowGap: '40px',
          }}
        >
          {[
            {
              title: 'OwlMart',
              description: 'Student marketplace for the Rice University community',
              tech: ['Next.js', 'TypeScript','Supabase'],
              external: 'https://owlmart.riceapps.org/',
              github: null,
            },
            {
              title: 'Job Monitor',
              description: 'Add job page URLs and run a check to see which links have new listings; view job titles at a glance.',
              tech: ['Next.js', 'Playwright', 'TypeScript', 'Supabase'],
              external: 'https://job-monitor-lake.vercel.app',
              github: 'https://github.com/anthonytang/Job-Monitor',
            },
            {
              title: 'Roommate Matcher',
              description: 'Rice University app using weighted cosine similarity to match students for roommates and housing.',
              tech: ['Next.js', 'GraphQL', 'Prisma', 'Celery', 'Redis'],
              external: 'https://roommate-matcher.vercel.app',
              github: 'https://github.com/anthonytang/Roommate-Matcher',
            },
            {
              title: 'OwlTrack',
              description: 'HackRice 14 Adobe Challenge Winner. AI-powered 4-year course planner and course suggestions from vector distance.',
              tech: ['Next.js', 'TypeScript', 'Python'],
              external: null,
              github: 'https://github.com/TheSacredJump/OwlTrack-HackRice14',
            },
            {
              title: 'Aetherborn',
              description: '2D party fighting game built with GDScript and the Godot game engine.',
              tech: ['GDScript', 'Godot'],
              external: null,
              github: null,
            },
          ].map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: false, margin: "-30px" }}
              transition={{
                opacity: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
                y: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
                filter: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
                delay: i * 0.08,
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--navy)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
              style={{ padding: '28px' }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
                  hidden: {},
                }}
              >
                <motion.div
                  className="flex items-start justify-between"
                  style={{ gap: '12px' }}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <span className="text-[var(--ink)]/60" aria-hidden>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  </span>
                  <div className="flex items-center shrink-0" style={{ gap: '14px' }}>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--ink)]/50 hover:text-[var(--ink)] transition-colors p-1"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.545 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      </motion.a>
                    )}
                    {project.external && (
                      <motion.a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--ink)]/50 hover:text-[var(--ink)] transition-colors p-1"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="External link"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
                <motion.h3
                  className="text-[15px] font-semibold text-[var(--ink)] group-hover:text-[var(--ink)]/90"
                  style={{ marginTop: '24px' }}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-[13px] text-[var(--ink-muted)] leading-[1.6]"
                  style={{ marginTop: '14px' }}
                  variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {project.description}
                </motion.p>
                <motion.p
                  className="font-mono text-[11px] text-[var(--ink)]/50 flex flex-wrap"
                  style={{ marginTop: '24px', gap: '8px 12px' }}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {project.tech.map((t, idx) => (
                    <span key={t}>
                      {idx > 0 && <span className="opacity-60"> | </span>}
                      {t}
                    </span>
                  ))}
                </motion.p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-[640px]" style={{ paddingTop: '80px', paddingBottom: '48px' }}>
        <motion.h2
          className="numbered-heading"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-30px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.12 }}
          whileHover={{ x: 6, scale: 1.02, rotateY: 2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '32px', transformOrigin: "left center" }}
          className="mt-1"
        >
          <motion.p
            className="text-slate/90 text-[14px] leading-[1.65] max-w-[520px]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ ...spring, delay: 0.15 }}
          >
            Open to new opportunities, research, and building things together. Reach out
            via email, phone, or LinkedIn. I would love to chat!
          </motion.p>
          <div className="flex flex-wrap" style={{ gap: '20px' }}>
            {[
              {
                type: 'copy' as const,
                copyValue: 'anthony.tang.tx@gmail.com',
                label: 'Email',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                ),
              },
              {
                type: 'copy' as const,
                copyValue: '512-348-9289',
                label: '512-348-9289',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                ),
              },
              {
                type: 'link' as const,
                href: 'https://www.linkedin.com/in/anthony-tang-69665a279/',
                label: 'LinkedIn',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                ),
              },
            ].map((item, i) =>
              item.type === 'copy' ? (
                <motion.button
                  key={item.label}
                  type="button"
                  onClick={() => handleCopy(item.copyValue, item.label)}
                  className="small-button inline-flex items-center cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ ...spring, delay: 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ gap: '8px', textDecoration: 'none' }}
                >
                  {copiedKey === item.label ? checkIcon : item.icon}
                  {copiedKey === item.label ? 'Copied!' : item.label}
                </motion.button>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="small-button inline-flex items-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ ...spring, delay: 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ textDecoration: 'none', gap: '8px' }}
                >
                  {item.icon}
                  {item.label}
                </motion.a>
              )
            )}
          </div>
          <div className="flex flex-wrap" style={{ gap: '20px' }}>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="small-button inline-block"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springSoft}
            >
              Resume
            </motion.a>
            <motion.a
              href="/cover-letter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="small-button inline-block"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={springSoft}
            >
              Cover Letter
            </motion.a>
          </div>
          <p className="text-slate/60 text-[13px]">Austin, TX</p>
        </motion.div>
      </section>

      <footer className="text-center pt-1 pb-8">
        <p className="text-slate/50 text-[12px] font-mono">Built by Anthony Tang</p>
      </footer>
    </main>
  );
}