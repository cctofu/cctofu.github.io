"use client"

import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 pt-16 relative z-10">
        <header className="min-h-[calc(100vh-4rem)] flex items-center animate-fade-in-up">
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2025</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  Calvin
                  <br />
                  <span className="text-muted-foreground">Chang</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Data and AI Engineer turning
                  <span className="text-foreground"> information </span> and
                  <span className="text-foreground"> metrics </span> into
                  <span className="text-foreground"> actionable analytics</span>, with <span className="text-foreground"> machine learning</span>,
                  especially in
                  <span className="text-foreground"> data analytics and game development</span>.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Exploring Opportunities
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
