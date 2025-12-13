"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"

export function ServiceHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage?.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = storedTheme ? storedTheme === "dark" : prefersDark

    if (shouldBeDark) {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage?.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage?.setItem("theme", "light")
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">H21</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground">Hujjatuz21</h1>
              <p className="text-xs text-muted-foreground">Professional xizmatlar</p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="hover:text-primary transition font-medium">
              Bosh sahifa
            </Link>
            <button
              onClick={() => scrollToSection("about-section")}
              className="hover:text-primary transition font-medium"
            >
              Biz haqimizda
            </button>
            <button
              onClick={() => scrollToSection("services-section")}
              className="hover:text-primary transition font-medium"
            >
              Xizmatlar
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          <div className="md:hidden flex gap-2 items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-card border-t border-border p-4 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-primary transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bosh sahifa
            </Link>
            <button
              onClick={() => scrollToSection("about-section")}
              className="hover:text-primary transition font-medium text-left"
            >
              Biz haqimizda
            </button>
            <button
              onClick={() => scrollToSection("services-section")}
              className="hover:text-primary transition font-medium text-left"
            >
              Xizmatlar
            </button>
          </nav>
        )}
      </header>
    </>
  )
}
