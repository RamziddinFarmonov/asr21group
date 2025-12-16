import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hujjatuz21 | Professional xizmatlar markazi",
  description: "IT xizmatlari, buxgalteriya va hujjat tayyorlash xizmatlari. Professional jamoa – ishonchli natija.",
  icons: {
    icon: [
      {
        url: "/pic/logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/pic/logo.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/pic/logo.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/pic/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head></head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
