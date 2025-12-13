"use client"

import { useState, useEffect } from "react"
import { Laptop, Users, TrendingUp, Bot, Globe, ShoppingCart, CreditCard, Palette, Box } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Mail, Phone, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Telegram Web App Bot",
    description: "Telegram platformasida zamonaviy web ilovalar yaratish",
    icon: Bot,
    details:
      "Telegram Mini Apps yordamida biznesingiz uchun interaktiv va funksional botlar yaratamiz. To'liq integratsiya, to'lov tizimlari va foydalanuvchi tajribasi.",
  },
  {
    title: "Telegram Bot",
    description: "Avtomatlashtirilgan Telegram botlar ishlab chiqish",
    icon: Bot,
    details:
      "Mijozlar bilan muloqot, avtomatik javoblar, ma'lumotlar bazasi bilan ishlash va boshqa funksiyalarga ega professional Telegram botlar yaratish xizmati.",
  },
  {
    title: "CRM Tizimlari",
    description: "Biznesingiz uchun maxsus CRM tizimi",
    icon: Users,
    details:
      "Mijozlar bilan ishlash, sotuvlarni kuzatish, hisobotlar va analitika. To'liq moslashtirilgan CRM yechimlar biznesingiz ehtiyojlariga moslashtiriladi.",
  },
  {
    title: "Veb-sayt ishlab chiqish",
    description: "Zamonaviy va responsive veb-saytlar",
    icon: Globe,
    details:
      "Korporativ saytlar, landing page'lar, portfel saytlari va ko'p sahifali veb-ilovalar. SEO optimallashtirish va mobil moslashuv bilan.",
  },
  {
    title: "E-commerce yechimlar",
    description: "Onlayn do'kon va savdo platformalari",
    icon: ShoppingCart,
    details:
      "To'liq funksional onlayn do'konlar: mahsulot katalogi, savat tizimi, buyurtmalarni boshqarish va mijozlar kabineti. Zamonaviy dizayn va qulay interfeyslar.",
  },
  {
    title: "To'lov integratsiyasi",
    description: "To'lov tizimlari va xavfsiz tranzaksiyalar",
    icon: CreditCard,
    details:
      "Click, Payme, Uzum va boshqa to'lov tizimlarini integratsiya qilish. Xavfsiz to'lovlar va avtomatik hisob-kitoblar.",
  },
  {
    title: "Logo dizayni",
    description: "Professional brend identifikatsiyasi",
    icon: Palette,
    details:
      "Noyob va esda qolarli logo dizayni, brend uslubi, rang palitrasi va korporativ identifikatsiya. To'liq brending paketi.",
  },
  {
    title: "3D Modellashtirish va Arxitektura",
    description: "3D vizualizatsiya va arxitektura loyihalash",
    icon: Box,
    details:
      "Binolar, ichki va tashqi interyerlar, mahsulotlarning 3D modellari. Fotorealistik render va animatsiya xizmatlari.",
  },
  {
    title: "Boshqa xizmatlar",
    description: "Qo'shimcha IT yechimlar va konsalting",
    icon: Laptop,
    details:
      "Mobil ilovalar, API ishlab chiqish, ma'lumotlar bazasi loyihalash, server sozlash, xavfsizlik auditi va IT konsalting xizmatlari.",
  },
]

export default function ITServicesPage() {
  const [mounted, setMounted] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { label: "Mijozlar", value: "100+", icon: Users },
    { label: "Tajriba", value: "2+ yil", icon: Laptop },
    { label: "Jamoa a'zolari", value: "5+", icon: Users },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 glass border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#1a1a1a] shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <Image src="/images/21-itech-logo.png" alt="21-iTech" fill className="object-contain p-2" />
              </div>
              <span className="font-bold text-xl">21-iTech</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection("about-section")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Biz haqimizda
              </button>
              <button
                onClick={() => scrollToSection("services-section")}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Xizmatlar
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`inline-block mb-6 ${mounted ? "animate-fade-up" : "opacity-0"}`}>
            <div className="relative w-56 h-56 rounded-full overflow-hidden bg-[#1a1a1a] shadow-2xl mx-auto ring-4 ring-primary/30">
              <Image src="/images/21-itech-logo.png" alt="21-iTech Logo" fill className="object-contain p-8" priority />
            </div>
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
              animationDelay: "0.1s",
            }}
          >
            IT Xizmatlari
          </h1>
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Zamonaviy texnologiyalar yordamida biznesingizni raqamlashtiring. Professional IT yechimlar va dasturiy
            ta&apos;minot ishlab chiqish xizmatlari.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-6 ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            Biz haqimizda
          </h2>
          <p
            className={`text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            21-iTech - 21 asr xizmatlar markaziga tegishli bo&apos;lim bo'lib, O&apos;zbekistonda yetakchi IT xizmatlar markazilaridan biri. Ancha yildan beri mijozlarimizga
            yuqori sifatli dasturiy ta&apos;minot va raqamli yechimlar taqdim etamiz. Bizning maqsadimiz - biznesingizni
            zamonaviy texnologiyalar orqali rivojlantirish.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`text-center p-6 glass rounded-xl hover:scale-105 transition-transform ${
                    mounted ? "animate-fade-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-4 ${mounted ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            Bizning xizmatlarimiz
          </h2>
          <p
            className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto ${
              mounted ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.9s" }}
          >
            Keng ko&apos;lamli IT xizmatlar va yechimlar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`${mounted ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${1.0 + index * 0.05}s` }}
                >
                  <Collapsible
                    open={expandedIndex === index}
                    onOpenChange={(open) => setExpandedIndex(open ? index : null)}
                  >
                    <Card className="group p-6 glass rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 cursor-pointer h-full">
                      <CollapsibleTrigger className="w-full text-left">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-primary font-medium">Batafsil</span>
                          <ChevronDown
                            className={`w-4 h-4 text-primary transition-transform duration-300 ${
                              expandedIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 pt-4 border-t border-primary/20">
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/30 border-t border-primary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-lg mb-4">21-iTech</h3>
              <p className="text-sm text-muted-foreground">IT xizmatlar markazi</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Aloqa</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+998502502100" className="text-muted-foreground hover:text-primary transition-colors">
                    +998 50 250 21 00
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+998557012700" className="text-muted-foreground hover:text-primary transition-colors">
                    +998 55 701 27 00
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:ramziddinfarmonov6@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ramziddinfarmonov6@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Murojat uchun telegram </h4>
              <a
                href="https://t.me/iTech21dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 21-iTech. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
