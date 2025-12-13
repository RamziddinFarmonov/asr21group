"use client"

import { useEffect, useState } from "react"

const benefits = [
  { title: "7+ yil tajriba", icon: "🏆" },
  { title: "5200+ loyiha", icon: "📊" },
  { title: "Tez va sifatli", icon: "⚡" },
  { title: "24/7 qo'llab-quvvatlash", icon: "🔒" },
]

export function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("benefits-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  return (
    <section id="benefits-section" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Biz bilan ishlash afzalliklari</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`glass p-8 rounded-xl text-center transform transition-all duration-500 hover:scale-110 hover:shadow-2xl ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
