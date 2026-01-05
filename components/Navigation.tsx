"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function Navigation() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.classList.remove("dark")
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experiences" },
    { label: "Education", href: "/education" },
    { label: "Projects", href: "/projects" },
    { label: "Connect", href: "/connect" },
  ]

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-bold hover:text-muted-foreground transition-colors">
            Calvin Chang
          </Link>
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
