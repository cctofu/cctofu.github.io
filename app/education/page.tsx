"use client"

import Navigation from "@/components/Navigation"

export default function Education() {
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
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025 — Present",
                  degree: "Master of Management Science and Engineering",
                  school: "Columbia University",
                  description: "Worked on Projects within consulting class, learning optimization, simulation, probabilistic models, and machine learning techniques applied to real-world business problems.",
                  coursework: ["Optimization", "Simulation", "Probabilistic Models", "Machine Learning"],
                  logo: "/columbia.png",
                },
                {
                  year: "2021 — 2025",
                  degree: "Bachelor of Engineering in Computer Science",
                  school: "Tsinghua University",
                  description: "Part of Soccer Team, Tennis Team, Part of Students Coding Association, worked on projects to help build websites for school use. Got scholarship for 2 years for academic performance.",
                  coursework: ["Data Structures", "Algorithms", "Artificial Neural Networks", "Human–Computer Interaction", "Software Engineering"],
                  logo: "/tsinghua.png",
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

                  <div className="lg:col-span-9 space-y-3 relative">
                    {edu.logo && (
                      <img
                        src={edu.logo}
                        alt={edu.school}
                        className="absolute top-0 right-0 w-14 h-14 object-contain pr-2"
                      />
                    )}
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{edu.school}</h3>
                      <div className="text-muted-foreground">{edu.degree}</div>
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
