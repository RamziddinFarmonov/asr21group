import Link from "next/link"
import { Phone, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Hujjatuz21</h3>
            <p className="text-sm opacity-90">
              IT xizmatlari, buxgalteriya va hujjat tayyorlash bilan sizning biznesingizni rivojlantiramiz.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Xizmatlar</h3>
            <div className="flex flex-col gap-2">
              <Link href="/it-services" className="text-sm hover:opacity-80 transition">
                IT xizmatlari
              </Link>
              <Link href="/hujjatuz21-services" className="text-sm hover:opacity-80 transition">
                Hujjat xizmatlari
              </Link>
              <a
                href="https://asr21.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:opacity-80 transition"
              >
                ASR21 (Buxgalteriya)
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Biz bilan bog&apos;lanin</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+998502502100" className="text-sm hover:opacity-80 transition flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +998 50 250 21 00
              </a>
              <a href="tel:+998557012700" className="text-sm hover:opacity-80 transition flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +998 55 701 27 00
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">© 2025 Hujjatuz21. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-4">
            <a
              href="https://t.me/hujjatuz_21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary hover:bg-primary/80 transition"
            >
              <Send className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
