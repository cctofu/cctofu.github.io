"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "education", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Calvin
                  <br />
                  <span className="text-muted-foreground">Chang</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Data and AI Engineer transforming
                  <span className="text-foreground"> raw information</span> into
                  <span className="text-foreground"> intelligent insights</span> through
                  <span className="text-foreground"> analytics</span>,<span className="text-foreground"> machine learning</span>,
                  and
                  <span className="text-foreground"> data-driven design</span>.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>New York, NY</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Masters Student</div>
                  <div className="text-muted-foreground">@ Columbia University</div>
                  <div className="text-xs text-muted-foreground">2025 — Present</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">SKILLSTACK</div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Machine Learning", "Data Analytics", "PyTorch", "SQL", "Full-Stack Development"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experiences</h2>
              <div className="text-sm text-muted-foreground font-mono">2023 — 2025</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025",
                  role: "AI Software Engineer",
                  company: "Kearney PERLabs, Columbia University",
                  description: "Built AI simulation models and a Generative AI platform integrating RAG and behavioral clustering to enhance product-launch decision-making.",
                  tech: ["Python", "FastAPI", "PyTorch", "RAG", "Causal Inference"]
                },
                {
                  year: "2024",
                  role: "AI Software Engineering Intern",
                  company: "Tencent",
                  description: "Developed and optimized generative voice and dialogue models for Honor of Kings using GPT-4 pipelines, model compression, and distributed PyTorch.",
                  tech: ["Python", "PyTorch", "CUDA", "GPT-4 API", "Model Compression"]
                },
                {
                  year: "2024",
                  role: "Undergraduate Researcher",
                  company: "Tsinghua University AI Laboratories",
                  description: "Designed instruction-generation and fine-tuning frameworks for law-domain LLMs, improving interpretability and training stability.",
                  tech: ["Python", "PyTorch", "Transformers", "Data Visualization", "LLM Fine-tuning"]
                },
                {
                  year: "2023",
                  role: "Team Lead",
                  company: "Tsinghua University AI Laboratories",
                  description: "Led a 3-member team developing a RAG-enhanced patent decision system linking claims with prior art using transformer-based embeddings.",
                  tech: ["Python", "SentenceTransformers", "BERT", "RAG", "Data Engineering"]
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Education</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025 — Present",
                  degree: "Master of Science in Computer Science",
                  school: "Columbia University",
                  location: "New York, NY",
                  description: "Specializing in AI and Machine Learning with focus on deep learning and natural language processing.",
                  coursework: ["Deep Learning", "Natural Language Processing", "Advanced Machine Learning"],
                },
                {
                  year: "2021 — 2025",
                  degree: "Bachelor of Engineering",
                  school: "Tsinghua University",
                  location: "Beijing, China",
                  description: "Completed comprehensive engineering curriculum with emphasis on AI research and practical applications.",
                  coursework: ["Data Structures", "Algorithms", "AI Fundamentals", "Computer Vision"],
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-3">
                    <div className="text-lg sm:text-xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {edu.year}
                    </div>
                  </div>

                  <div className="lg:col-span-9 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{edu.degree}</h3>
                      <div className="text-muted-foreground">{edu.school}</div>
                      <div className="text-sm text-muted-foreground">{edu.location}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "AI-Powered Patent Analysis System",
                  excerpt: "RAG-enhanced system linking patent claims with prior art using transformer-based embeddings.",
                  date: "2024",
                  category: "AI/ML",
                  details: "Led development of a sophisticated patent decision support system that leverages retrieval-augmented generation (RAG) and BERT embeddings to analyze patent claims and identify relevant prior art. The system uses SentenceTransformers for semantic similarity matching and includes a custom data engineering pipeline for processing large patent databases.",
                  tech: ["Python", "RAG", "BERT", "SentenceTransformers", "Data Engineering"],
                  impact: "Reduced patent analysis time by 60% and improved prior art discovery accuracy",
                },
                {
                  title: "Generative Voice Model for Gaming",
                  excerpt: "GPT-4 powered voice synthesis system with model compression for real-time performance.",
                  date: "2024",
                  category: "AI/ML",
                  details: "Developed and optimized generative voice and dialogue models for Honor of Kings at Tencent. Implemented GPT-4 pipelines for voice synthesis, applied advanced model compression techniques, and utilized distributed PyTorch training across GPU clusters. Achieved significant performance improvements while maintaining high-quality voice output.",
                  tech: ["Python", "PyTorch", "GPT-4 API", "CUDA", "Model Compression"],
                  impact: "Deployed to production serving 100M+ daily active users",
                },
                {
                  title: "Legal Domain LLM Fine-tuning Framework",
                  excerpt: "Instruction-generation framework for fine-tuning large language models on legal texts.",
                  date: "2024",
                  category: "Research",
                  details: "Designed and implemented a comprehensive framework for generating high-quality instruction data from legal documents and fine-tuning LLMs for law-domain applications. Improved model interpretability through custom evaluation metrics and enhanced training stability using novel regularization techniques.",
                  tech: ["Python", "PyTorch", "Transformers", "LLM Fine-tuning", "Data Visualization"],
                  impact: "Published research findings and improved legal text understanding by 40%",
                },
                {
                  title: "Generative AI Platform for Business Intelligence",
                  excerpt: "RAG and behavioral clustering platform for product launch decision-making.",
                  date: "2025",
                  category: "AI/ML",
                  details: "Built an end-to-end Generative AI platform integrating RAG, behavioral clustering, and causal inference models. The platform processes consumer behavior data, generates insights using LLMs, and provides predictive analytics for product launch decisions. Includes FastAPI backend with real-time inference capabilities.",
                  tech: ["Python", "FastAPI", "PyTorch", "RAG", "Causal Inference"],
                  impact: "Enhanced decision-making accuracy and reduced time-to-insight by 50%",
                },
              ].map((project, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{project.category}</span>
                      <span>{project.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.excerpt}</p>

                    {expandedProject === index && (
                      <div className="pt-4 border-t border-border/50 space-y-4 animate-fade-in-up">
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.details}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="text-xs text-foreground font-medium pt-2">
                          {project.impact}
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <span>{expandedProject === index ? "Show less" : "Read more"}</span>
                      <svg
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          expandedProject === index ? "rotate-180" : "group-hover:translate-x-1"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {expandedProject === index ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[4] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and conversations about the latest technologies
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:test@example.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">cc5387@columbia.edu</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@cctofu", url: "https://github.com/cctofu" },
                  { name: "Leetcode", handle: "@cctofu", url: "https://leetcode.com/u/cctofu/" },
                  { name: "HubSpot Community", handle: "@felixmacaspac", url: "#" },
                  { name: "LinkedIn", handle: "calvinchang216", url: "https://www.linkedin.com/in/calvinchang216/" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Calvin Chang. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built by Calvin Chang</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
