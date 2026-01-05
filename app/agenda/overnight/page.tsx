import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Info } from "lucide-react"
import { SplitText } from "@/components/split-text"
import { FadeIn } from "@/components/fade-in"

export default function OvernightAgendaPage() {
  const day1Events = [
    { time: "5:00 PM", title: "Check-ins", description: "Arrival and welcome" },
    { time: "5:30 PM", title: "Official Opening", description: "Program kickoff" },
    { time: "5:50 PM", title: "Icebreakers", description: "Meet fellow participants" },
    { time: "6:05 PM", title: "DEI Agreements", description: "Community guidelines" },
    { time: "6:20 PM", title: "Kahoot", description: "Interactive trivia game" },
    { time: "6:40 PM", title: "Faculty Speaker", description: "Presentation from a professor" },
    { time: "7:00 PM", title: "Dinner", description: "Meal together" },
    { time: "7:15 PM", title: "Performance Group", description: "Student performance showcase" },
    { time: "7:50 PM", title: "Benefits Overview", description: "Scholarship benefits" },
    { time: "7:55 PM", title: "Scholar Panel", description: "Q&A with current scholars" },
    { time: "8:35 PM", title: "Campus Tour", description: "Evening campus walk" },
    { time: "10:10 PM", title: "Meet Your Host", description: "Connect with your overnight host" },
    { time: "10:30 PM", title: "Nighttime Activities", description: "Optional social activities" },
    { time: "12:00 AM", title: "End of Night", description: "Lights out" },
  ]

  const day2Events = [
    { time: "9:40 AM", title: "Morning Open", description: "Wake up and prepare" },
    { time: "9:45 AM", title: "Breakfast", description: "Morning meal together" },
    { time: "10:15 AM", title: "Focus Tours", description: "Specialized facility tours (Parents welcome)" },
    { time: "11:30 AM", title: "Photos at Campanile", description: "Group photos at iconic bell tower" },
    { time: "12:00 PM", title: "Formal Closing", description: "Program wrap-up" },
    { time: "12:30 PM", title: "Program Ends", description: "Farewell" },
  ]

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="berkeley-blue py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center overflow-visible">
            <SplitText text="Overnight Program Agenda" className="mb-4 text-4xl font-bold md:text-5xl" delay={0.03} />
            <FadeIn delay={0.3}>
              <p className="text-lg text-white/80 leading-relaxed">
                Experience 24 hours of authentic Berkeley life with an overnight stay
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Date Selection & Info */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-bold text-center" style={{ color: "#003262" }}>
                  Available Program Dates
                </h3>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Button variant="outline" className="h-auto py-3 flex flex-col gap-1 bg-transparent">
                    <span className="font-bold">Feb 22-23</span>
                    <span className="text-xs text-muted-foreground">Download PDF</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 flex flex-col gap-1 bg-transparent">
                    <span className="font-bold">Mar 8-9</span>
                    <span className="text-xs text-muted-foreground">Download PDF</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 flex flex-col gap-1 bg-transparent">
                    <span className="font-bold">Mar 15-16</span>
                    <span className="text-xs text-muted-foreground">Download PDF</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-3 flex flex-col gap-1 bg-transparent">
                    <span className="font-bold">Apr 18-19</span>
                    <span className="text-xs text-muted-foreground">Scholars Only</span>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 border-2 border-blue-200">
                <Info className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#003262" }} />
                <p className="text-sm">
                  <strong>Note:</strong> Parents are welcome to join all events after 10:00 AM on Day 2
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline Section - Day 1 */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <h2 className="mb-12 text-3xl font-bold text-center" style={{ color: "#003262" }}>
                Day 1 - Evening Activities
              </h2>
            </FadeIn>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[31px] top-0 bottom-0 w-0.5 bg-[#FDB515] hidden md:block" />

              <div className="space-y-6">
                {day1Events.map((event, index) => (
                  <FadeIn key={index} delay={index * 0.04}>
                    <div className="relative flex gap-6 items-start">
                      {/* Time dot */}
                      <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                        <div
                          className="w-4 h-4 rounded-full border-4 z-10"
                          style={{ backgroundColor: "#FDB515", borderColor: "#003262" }}
                        />
                      </div>

                      {/* Time badge (mobile) */}
                      <div className="md:hidden flex-shrink-0">
                        <div
                          className="px-3 py-1 rounded-full text-sm font-bold"
                          style={{ backgroundColor: "#FDB515", color: "#003262" }}
                        >
                          {event.time}
                        </div>
                      </div>

                      {/* Content */}
                      <Card className="flex-1 border-2">
                        <CardContent className="pt-4 pb-4">
                          <div className="hidden md:block mb-1 text-sm font-bold" style={{ color: "#FDB515" }}>
                            {event.time}
                          </div>
                          <h3 className="mb-1 text-lg font-bold" style={{ color: "#003262" }}>
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Day 2 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <h2 className="mb-12 text-3xl font-bold text-center" style={{ color: "#003262" }}>
                Day 2 - Morning & Closing
              </h2>
            </FadeIn>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[31px] top-0 bottom-0 w-0.5 bg-[#FDB515] hidden md:block" />

              <div className="space-y-6">
                {day2Events.map((event, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <div className="relative flex gap-6 items-start">
                      {/* Time dot */}
                      <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                        <div
                          className="w-4 h-4 rounded-full border-4 z-10"
                          style={{ backgroundColor: "#FDB515", borderColor: "#003262" }}
                        />
                      </div>

                      {/* Time badge (mobile) */}
                      <div className="md:hidden flex-shrink-0">
                        <div
                          className="px-3 py-1 rounded-full text-sm font-bold"
                          style={{ backgroundColor: "#FDB515", color: "#003262" }}
                        >
                          {event.time}
                        </div>
                      </div>

                      {/* Content */}
                      <Card className="flex-1 border-2">
                        <CardContent className="pt-4 pb-4">
                          <div className="hidden md:block mb-1 text-sm font-bold" style={{ color: "#FDB515" }}>
                            {event.time}
                          </div>
                          <h3 className="mb-1 text-lg font-bold" style={{ color: "#003262" }}>
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold" style={{ color: "#003262" }}>
                Ready to Experience Berkeley Overnight?
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Register now to secure your spot in one of our overnight programs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="berkeley-blue">
                  <Link href="/registration">Register for Overnight Program</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/agenda">View Other Programs</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
