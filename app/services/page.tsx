"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BookOpen, Bookmark, MapPin, GraduationCap as Graduation2, FileText, ChevronDown } from "lucide-react"

const services = [
  {
    title: "School Documents",
    description: "Preparation and consultation for all school-related documents",
    icon: BookOpen,
    details: "Maktab hujjatlari, sertifikatlar va boshqa zarur bo'lgan hujjatlarni to'liq tayyorlash xizmati.",
  },
  {
    title: "Kindergarten MTM Documents",
    description: "Outsourcing documents for kindergarten and MTM",
    icon: Bookmark,
    details: "Bolalar bog'i va MTM muassasalari uchun hujjatlashtirish va boshqa administrativ ishlarni bajarish.",
  },
  {
    title: "Neighborhood Seven Documents",
    description: "Neighborhood documents and seven certificates",
    icon: MapPin,
    details: "Mahalla hujjatlari, sakkiz raqamli sertifikatlar va boshqa mahalliy hujjatlar tayyorlash.",
  },
  {
    title: "Services for Students",
    description: "Diplomas, certificates, and consultation services for students",
    icon: Graduation2,
    details: "Talaba diplomi, sertifikatlari va akademik hujjatlarga oid maslahat va tayyorlash xizmatlari.",
  },
  {
    title: "1000+ Document Services",
    description: "Preparation of various 1000+ documents, tax and accounting issues",
    icon: FileText,
    details: "Turli xil 1000+ hujjat tayyorlash, soliq va buxgalteriya masalalariga oid to'liq xizmati.",
  },
]

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      <section id="services-section" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-balance">Bizning Xizmatlar</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
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

      <Footer />
    </main>
  )
}
