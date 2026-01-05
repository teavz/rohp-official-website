import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users } from "lucide-react"
import { SplitText } from "@/components/split-text"
import { FadeIn } from "@/components/fade-in"

export default function AgendaPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="berkeley-blue py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center overflow-visible">
            <SplitText text="Program Agenda" className="mb-4 text-4xl font-bold md:text-5xl" delay={0.03} />
            <FadeIn delay={0.3}>
              <p className="text-lg text-white/80 leading-relaxed">
                Choose between our virtual or overnight programs to experience UC Berkeley
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <Card className="border-2 hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full p-4" style={{ backgroundColor: "#FDB515" }}>
                      <Users className="h-8 w-8" style={{ color: "#003262" }} />
                    </div>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-center" style={{ color: "#003262" }}>
                    Virtual Program
                  </h2>
                  <p className="mb-6 text-muted-foreground text-center leading-relaxed">
                    Join us online for a comprehensive virtual experience featuring faculty speakers, student panels,
                    and virtual campus tours.
                  </p>
                  <div className="mb-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-5 w-5" style={{ color: "#003262" }} />
                      <span>Single day program (9:00 AM - 12:30 PM PST)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-5 w-5" style={{ color: "#003262" }} />
                      <span>Available on select dates</span>
                    </div>
                  </div>
                  <Button asChild className="w-full berkeley-blue">
                    <Link href="/agenda/virtual">View Virtual Agenda</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="border-2 hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full p-4" style={{ backgroundColor: "#FDB515" }}>
                      <Calendar className="h-8 w-8" style={{ color: "#003262" }} />
                    </div>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold text-center" style={{ color: "#003262" }}>
                    Overnight Program
                  </h2>
                  <p className="mb-6 text-muted-foreground text-center leading-relaxed">
                    Experience Berkeley life firsthand with an overnight stay in the dorms, meeting your host, and
                    participating in campus activities.
                  </p>
                  <div className="mb-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-5 w-5" style={{ color: "#003262" }} />
                      <span>Two-day program (5:00 PM - 12:30 PM next day)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-5 w-5" style={{ color: "#003262" }} />
                      <span>Multiple weekend dates available</span>
                    </div>
                  </div>
                  <Button asChild className="w-full berkeley-blue">
                    <Link href="/agenda/overnight">View Overnight Agenda</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="mb-8 text-3xl font-bold text-center" style={{ color: "#003262" }}>
                What to Expect
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-bold" style={{ color: "#003262" }}>
                    Faculty Speakers
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Hear from distinguished professors about academic life at Berkeley
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-bold" style={{ color: "#003262" }}>
                    Student Panels
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with current scholars and ask questions about their experiences
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="text-center">
                  <h3 className="mb-2 text-lg font-bold" style={{ color: "#003262" }}>
                    Campus Tours
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore Berkeley's iconic campus and specialized facilities
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
