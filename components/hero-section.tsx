"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  const handleScroll = () => {
    const element = document.getElementById("services-section")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=business%20team%20professionals)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional jamoa –
          </span>
          <br />
          <span className="text-white">ishonchli natija</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Biznesingizni rivojlantirish uchun eng yaxshi raqamli yechimlar
        </p>
        <Button
          onClick={handleScroll}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg animate-glow"
        >
          Xizmatlar bilan tanishish
        </Button>
      </div>
    </section>
  )
}
