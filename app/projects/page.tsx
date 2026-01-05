"use client"

import Link from "next/link"
import Navigation from "@/components/Navigation"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 pt-16 relative z-10">
        <section className="min-h-[calc(100vh-4rem)] py-20 sm:py-32 animate-fade-in-up">
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {projects.map((project, index) => (
                <article
                  key={index}
                  className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={
                        project.category === "Hackathon"
                          ? "text-[#ff595a]"
                          : project.category === "Data Science"
                          ? "text-[#4bbeb5]"
                          : project.category === "Research"
                          ? "text-[#f8ce59]"
                          : project.category === "Kaggle"
                          ? "text-[#2499cd]"
                          : "text-muted-foreground"
                      }>
                        {project.category}
                      </span>
                      <span className="text-muted-foreground">{project.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{project.excerpt}</p>

                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 py-6 border-t border-border bg-background/80 backdrop-blur-sm z-10">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-xs text-muted-foreground">© 2025 Calvin Chang. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
