"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      title: "IT Xizmatlari",
      description: "IT xizmatlari va dasturlash",
      logo: "/images/21-itech-logo.png",
      href: "/it-services",
      external: false,
      bgColor: "from-blue-500/10 to-cyan-500/10",
      logoClass: "object-cover scale-110",
    },
    {
      title: "21 asr xizmatlari",
      description: "Buxgalteriya va soliq xizmatlari",
      logo: "/images/21-asr-logo.png",
      href: "https://asr21.uz/",
      external: true,
      bgColor: "from-green-500/10 to-emerald-500/10",
      logoClass: "object-contain p-4",
    },
    {
      title: "Hujjatuz21",
      description: "Hujjatlar tayyorlash va maslahat",
      logo: "/images/hujjatuz21-logo.jpg",
      href: "/hujjatuz21-services",
      external: false,
      bgColor: "from-blue-600/10 to-blue-400/10",
      logoClass: "object-contain p-4",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          >
            Xizmatni tanlang
          </h1>
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Sizning ehtiyojlaringizga mos professional xizmatlarni tanlang
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                target={service.external ? "_blank" : undefined}
                rel={service.external ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-2xl glass hover:scale-105 transition-all duration-500 ${
                  mounted ? "animate-fade-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${0.3 + index * 0.1}s`,
                }}
              >
                <div
                  className={`relative w-full h-80 bg-gradient-to-br ${service.bgColor} flex items-center justify-center p-8`}
                >
                  <div className="relative w-56 h-56 rounded-full overflow-hidden bg-white shadow-2xl ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.logo || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className={service.logoClass}
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 animate-glow" />

                {/* Content */}
                <div className="relative z-10 p-8 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-center gap-2 text-primary group-hover:gap-4 transition-all">
                    <span className="font-medium">Tanlash</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500" />
              </Link>
            ))}
          </div>

          <p
            className={`mt-16 text-sm text-muted-foreground ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.7s" }}
          >
            Professional xizmatlar bilan muvaffaqiyatingizni ta&apos;minlaymiz
          </p>
        </div>
      </section>
    </main>
  )
}
