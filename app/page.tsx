import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Users, Compass, Calendar, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"
import SplitText from "@/components/split-text"
import TextType from "@/components/text-type"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center"
        style={{
          backgroundImage: "url('/images/chatgpt-20image-20jan-204-2c-202026-2c-2004-52-19-20pm.png')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#2c3e50",
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - reduced spacer for tower image */}
            <div className="w-full md:w-1/4" />

            {/* Right side - content shifted left and up */}
            <div className="w-full md:w-3/4 text-center md:text-left -mt-24 ml-24">
              <SplitText
                text="Regents' Overnight Host Program"
                className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white uppercase tracking-wide font-display"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                tag="h1"
                textAlign="left"
              />
              <div className="mb-10 text-xl md:text-2xl text-white/90 uppercase tracking-widest font-light">
                <TextType
                  text={[
                    "Welcome to the Golden Bear family",
                    "Discover your future at Cal",
                    "Experience Berkeley excellence",
                    "Join the tradition of scholars",
                    "Your journey starts here",
                  ]}
                  typingSpeed={80}
                  deletingSpeed={50}
                  pauseDuration={2500}
                  loop={true}
                  showCursor={true}
                  cursorCharacter="|"
                  className="inline-block"
                />
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="mailto:contact@rohp.berkeley.edu"
                  className="w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" style={{ color: "#2c3e50" }} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" style={{ color: "#2c3e50" }} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" style={{ color: "#2c3e50" }} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" style={{ color: "#2c3e50" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About ROHP Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl text-center" style={{ color: "#003262" }}>
              About ROHP
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mb-8">
              The Regents' Overnight Host Program (ROHP) connects Regents' and Chancellor's Scholarship candidates with
              current UC Berkeley students for an immersive campus experience. Whether virtual or in-person, you'll
              discover what makes Berkeley special.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-bold" style={{ color: "#003262" }}>
                    Who It's For
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Regents' and Chancellor's Scholarship candidates who want to explore Berkeley before making their
                    college decision.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-bold" style={{ color: "#003262" }}>
                    Benefits
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Meet faculty, tour campus, connect with current scholars, and experience authentic student life at
                    Cal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl text-center" style={{ color: "#003262" }}>
            Program Highlights
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4" style={{ backgroundColor: "#FDB515" }}>
                    <Lightbulb className="h-8 w-8" style={{ color: "#003262" }} />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold" style={{ color: "#003262" }}>
                  Experience
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Live like a Berkeley student. Stay overnight in the dorms, attend events, and explore campus life
                  firsthand.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4" style={{ backgroundColor: "#FDB515" }}>
                    <Users className="h-8 w-8" style={{ color: "#003262" }} />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold" style={{ color: "#003262" }}>
                  Interact
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with current scholars, meet faculty speakers, and build lasting relationships with fellow
                  prospective students.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full p-4" style={{ backgroundColor: "#FDB515" }}>
                    <Compass className="h-8 w-8" style={{ color: "#003262" }} />
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold" style={{ color: "#003262" }}>
                  Discover
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tour specialized facilities, explore academic programs, and discover the opportunities that await you
                  at Cal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-3xl font-bold md:text-4xl text-center" style={{ color: "#003262" }}>
            See ROHP in Action
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/M5bPQNFYbm8"
                title="ROHP Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/K48TEIDrJ9E"
                title="ROHP Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 berkeley-blue">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto text-center">
            <div>
              <div className="mb-2 text-5xl font-bold" style={{ color: "#FDB515" }}>
                10+
              </div>
              <p className="text-lg text-white/80">Programs Annually</p>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold" style={{ color: "#FDB515" }}>
                500+
              </div>
              <p className="text-lg text-white/80">Participants</p>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold" style={{ color: "#FDB515" }}>
                15+
              </div>
              <p className="text-lg text-white/80">Years Running</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl" style={{ color: "#003262" }}>
              Ready to Experience Berkeley?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Join us for an unforgettable program that will help you make the most important decision of your academic
              journey.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="berkeley-blue text-lg">
                <Link href="/registration">
                  <Calendar className="mr-2 h-5 w-5" />
                  Register for a Program
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
                <Link href="/faq">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-2xl font-bold" style={{ color: "#003262" }}>
              Have Questions?
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center items-center">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" style={{ color: "#003262" }} />
                <a href="mailto:contact@rohp.berkeley.edu" className="hover:text-[#FDB515] transition-colors">
                  contact@rohp.berkeley.edu
                </a>
              </div>
              <div className="hidden sm:block text-muted-foreground">|</div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" style={{ color: "#003262" }} />
                <span className="text-muted-foreground">UC Berkeley, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
