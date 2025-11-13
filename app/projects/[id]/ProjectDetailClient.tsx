"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import type { Project } from "@/data/projects"

export default function ProjectDetailClient({ project }: { project: Project }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="min-h-screen py-20 sm:py-32">
          <div className="space-y-12 sm:space-y-16">
            <div className="space-y-6">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to portfolio
              </Link>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={
                    project.category === "Hackathon"
                      ? "text-[#ff595a]"
                      : project.category === "Data Science"
                      ? "text-[#4bbeb5]"
                      : project.category === "Research"
                      ? "text-[#f8ce59]"
                      : "text-muted-foreground"
                  }>
                    {project.category}
                  </span>
                  <span className="text-muted-foreground">{project.date}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {project.title}
                </h1>

                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  {project.excerpt}
                </p>
              </div>

              {project.image ? (
                <div className="w-full aspect-video bg-muted border border-border rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full aspect-video bg-muted border border-border rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <svg
                      className="w-16 h-16 mx-auto text-muted-foreground/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm text-muted-foreground">Project Image</p>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-border pt-12 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {project.details}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.impact && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Impact</h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    {project.impact}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

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
