"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BookOpen, Bookmark, MapPin, GraduationCap, FileText, ChevronDown, Phone, Send, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Maktab hujjatlari",
    description: "Maktab uchun barcha kerakli hujjatlar tayyorlash",
    icon: BookOpen,
    details:
      "Maktab hujjatlari, sertifikatlar, attestatlar va boshqa zarur bo'lgan hujjatlarni professional tayyorlash xizmati. To'liq konsultatsiya va tezkor bajarilish.",
  },
  {
    title: "Bolalar bog'i MTM hujjatlari",
    description: "Bolalar bog'i va MTM uchun hujjatlashtirish",
    icon: Bookmark,
    details:
      "Bolalar bog'i va MTM muassasalari uchun to'liq hujjatlashtirish, MTM ruxsatnomasi, sanitariya-epidemiologik xulosa va boshqa administrativ ishlarni bajarish.",
  },
  {
    title: "Mahalla yetti hujjati",
    description: "Mahalla hujjatlari va sertifikatlar",
    icon: MapPin,
    details:
      "Mahalla qo'mitasidan kerakli barcha hujjatlar: fuqarolik pasporti, yashash joyi to'g'risida ma'lumotnoma, oilaviy ahvol, ijtimoiy yordam va boshqa mahalliy hujjatlarni tayyorlash.",
  },
  {
    title: "Talabalar uchun xizmatlar",
    description: "Diplom, sertifikat va talabalar uchun maslahat",
    icon: GraduationCap,
    details:
      "Talabalar uchun diplom nostrifikatsiyasi, apostil qo'yish, akademik ma'lumotnoma, stipendiya hujjatlari va boshqa ta'lim muassasalari hujjatlariga oid to'liq xizmat va maslahat.",
  },
  {
    title: "1000+ hujjat xizmatlari",
    description: "Turli xil hujjatlar tayyorlash",
    icon: FileText,
    details:
      "Yuridik shaxslar uchun: guvohnomalar, litsenziyalar, soliq hisobotlari. Jismoniy shaxslar uchun: pasport, ID-karta, nikoh/ajralish hujjatlari, notarial tasdiqlash va 1000+ boshqa hujjatlar.",
  },
]

export default function Hujjatuz21ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <Image src="/images/hujjatuz21-logo.jpg" alt="Hujjatuz21" fill className="object-contain p-1.5" />
              </div>
              <span className="font-bold text-xl">Hujjatuz21</span>
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
      <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`inline-block mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="relative w-56 h-56 rounded-full overflow-hidden bg-white shadow-2xl mx-auto ring-4 ring-primary/30">
              <Image
                src="/images/hujjatuz21-logo.jpg"
                alt="Hujjatuz21 Logo"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              backgroundSize: "200% 100%",
              animation: "shimmer 3s ease-in-out infinite",
              animationDelay: "0.1s",
            }}
          >
            Hujjatuz21 Xizmatlari
          </h1>
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Professional hujjat tayyorlash va konsultatsiya xizmatlari. Barcha turdagi hujjatlar uchun yagona manzil.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            Biz haqimizda
          </h2>
          <p
            className={`text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            21 asr xizmatlar markaziga tegishli Hujjatuz21 bo&apos;limi- O&apos;zbekistonda hujjat tayyorlash va yuridik maslahat xizmatlarini ko&apos;rsatuvchi
            yetakchi tashkilot. 2025 yildan beri xizmat ko&apos;rsatib kelmoqdamiz. Bizning maqsadimiz - hujjat bilan bog&apos;liq barcha muammolaringizni hal qilish.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "7+", label: "Yillik tajriba" },
              { number: "6000+", label: "Bajarilgan loyihalar" },
              { number: "10+", label: "Jamoa azolari" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`glass p-8 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:scale-105 text-center ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${0.5 + index * 0.1}s`,
                }}
              >
                <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.7s" }}
          >
            Bizning xizmatlarimiz
          </h2>
          <p
            className={`text-center text-muted-foreground mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            To&apos;liq hujjat tayyorlash va maslahat xizmatlari
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{
                    animationDelay: `${0.9 + index * 0.1}s`,
                  }}
                >
                  <Collapsible
                    open={expandedIndex === index}
                    onOpenChange={(open) => setExpandedIndex(open ? index : null)}
                  >
                    <Card className="glass p-8 rounded-xl border border-primary/20 hover:border-primary/50 group cursor-pointer hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:scale-105 overflow-hidden h-full">
                      <CollapsibleTrigger className="w-full text-left">
                        <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition text-balance">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-primary font-medium">Batafsil</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${expandedIndex === index ? "rotate-180" : ""}`}
                          />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 pt-4 border-t border-primary/20">
                        <p className="text-muted-foreground text-sm leading-relaxed">{service.details}</p>
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
              <h3 className="font-bold text-lg mb-4">Hujjatuz21</h3>
              <p className="text-sm text-muted-foreground">Hujjat tayyorlash xizmatlari</p>
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
                  <a href="tel:+998557012100" className="text-muted-foreground hover:text-primary transition-colors">
                    +998 55 701 21 00
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:xujjatuz@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    xujjatuz@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Murojat uchun Telegram</h4>
              <a
                href="https://t.me/hujjatuz_21"
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
            <p>&copy; 2025 Hujjatuz21. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
