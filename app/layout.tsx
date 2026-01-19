import type React from "react"
import type { Metadata } from "next"
import { Acme } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedThemeToggle } from "@/components/ui/animated-theme-toggle"
import "./globals.css"

const _acme = Acme({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ROHP - Regents' Overnight Host Program | UC Berkeley",
  description:
    "Experience UC Berkeley through the Regents' Overnight Host Program. Connect with current students and discover life as a Golden Bear.",
  generator: "v0.app",
  keywords: ["UC Berkeley", "Regents Scholarship", "ROHP", "College Visit", "Campus Tour"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_acme.variable} font-display antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <AnimatedThemeToggle />
        <Analytics />
      </body>
    </html>
  )
}
