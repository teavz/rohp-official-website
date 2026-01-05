import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold" style={{ color: "#003262" }}>
              Regents' Overnight Host Program
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Welcome to the Golden Bear family. Experience UC Berkeley through the eyes of current students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold" style={{ color: "#003262" }}>
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/agenda" className="hover:text-[#FDB515] transition-colors">
                Program Agenda
              </Link>
              <Link href="/registration" className="hover:text-[#FDB515] transition-colors">
                Registration
              </Link>
              <Link href="/faq" className="hover:text-[#FDB515] transition-colors">
                FAQ
              </Link>
              <Link href="/committee" className="hover:text-[#FDB515] transition-colors">
                Meet the Team
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold" style={{ color: "#003262" }}>
              Contact Us
            </h3>
            <div className="text-sm text-muted-foreground leading-relaxed">
              <p className="mb-2">
                <a href="mailto:contact@rohp.berkeley.edu" className="hover:text-[#FDB515] transition-colors">
                  contact@rohp.berkeley.edu
                </a>
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5 hover:text-[#FDB515] transition-colors" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5 hover:text-[#FDB515] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Regents' Overnight Host Program, UC Berkeley. All rights reserved.</p>
          <p className="mt-2">Hosted by the Open Computing Facility</p>
        </div>
      </div>
    </footer>
  )
}
