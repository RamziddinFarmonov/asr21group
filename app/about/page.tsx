"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alisher Qodiriy",
    company: "Tech Startup",
    text: "21-ASR bilan ishlash juda qulay va natijali. Ularning xizmati professional va tezkor.",
    rating: 5,
  },
  {
    name: "Madina Shodmonova",
    company: "Savdo kompaniyasi",
    text: "Hujjatlashtirish va soliq masalalariga oid juda yaxshi maslahat oldum. Tavsiya qilaman!",
    rating: 5,
  },
  {
    name: "Jasur Abdurahmonov",
    company: "Ishlab chiqarish firma",
    text: "5 yildan ortiq vaqt davomida hamkor sifatida ishlayapti. Har doim ishonchli.",
    rating: 5,
  },
  {
    name: "Gulnora Mirova",
    company: "Biznes markazi",
    text: "Raqamli xizmatlar bilan ish shunchaki oson hali ketdi. Juda muhim maslahatlar.",
    rating: 4,
  },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div
            id="about-content"
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance">Biz haqimizda</h1>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                2018 yildan beri faoliyat yuritamiz. Bizning koʻngili bilan ishlagan 5200+ mijozimiz, 4 ta davlat
                mukofoti va turli xil sertifikatlar bilan faxriyamiz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { number: "7+", label: "Yillik tajriba" },
                { number: "5200+", label: "Bajarilgan loyiha" },
                { number: "4", label: "Davlat mukofoti" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass p-8 rounded-xl border border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 hover:scale-105 animate-fade-up"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-card/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">Mijozlarimiz nima diydi?</h2>

          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="glass p-8 rounded-xl border-primary/20 hover:border-primary/50 transition-all duration-500 h-full flex flex-col justify-between hover:shadow-lg hover:shadow-primary/20 group">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {Array(testimonial.rating)
                          .fill(null)
                          .map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                    </div>
                    <div className="group-hover:text-primary transition-colors">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <Footer />
    </main>
  )
}
