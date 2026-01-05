"use client"

import Navigation from "@/components/Navigation"

export default function Experiences() {
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
              <h2 className="text-3xl sm:text-4xl font-bold">Experiences</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "Aug 2025 – Present",
                  role: "Part-Time Consultant",
                  company: "Kearney PERLabs, Columbia University",
                  description: "Worked with Kearney during Columbia University Operations Consulting course. Built AI simulation models and a Generative AI platform integrating RAG and behavioral clustering to enhance product-launch decision-making.",
                  tech: ["Python", "RAG", "Causal Inference"],
                  logo: "/kearney.png",
                },
                {
                  year: "July 2024 – Aug 2024",
                  role: "AI Software Engineering Intern",
                  company: "Tencent",
                  description: "Developed and optimized generative voice and dialogue models for Honor of Kings using GPT-4 pipelines, model compression, and distributed PyTorch.",
                  tech: ["Python", "PyTorch", "Model Compression"],
                  logo: "/tencent.png",
                },
                {
                  year: "Dec 2024 – July 2025",
                  role: "Undergraduate Researcher",
                  company: "Tsinghua University AI Laboratories",
                  description: "Started as a student researcher contributing to projects related to NLP. Worked on Legal related Large Language Models (LLMs), focusing on instruction generation, model fine-tuning, and evaluation frameworks to enhance legal reasoning capabilities.",
                  tech: ["Python", "PyTorch", "Transformers", "Legal LLMs", "Data Visualization", "LLM Fine-tuning"],
                  logo: "/tsinghua.png",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-sm sm:text-base font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-10 space-y-3 relative">
                    {job.logo && (
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="absolute top-0 right-0 w-14 h-14 object-contain pr-2"
                      />
                    )}
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground italic">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {tech}
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
