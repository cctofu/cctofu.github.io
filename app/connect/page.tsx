"use client"

import Link from "next/link"
import Navigation from "@/components/Navigation"

export default function Connect() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 pt-16 relative z-10">
        <section className="min-h-[calc(100vh-4rem)] py-20 sm:py-32 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">Contact me</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and new discussion
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:cc5387@columbia.edu"
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
                  { name: "LinkedIn", handle: "@calvinchang216", url: "https://www.linkedin.com/in/calvinchang216/" },
                  { name: "Kaggle", handle: "@cctofu", url: "https://www.kaggle.com/cctofu"},
                  { name: "Leetcode", handle: "@cctofu", url: "https://leetcode.com/u/cctofu/"}
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
