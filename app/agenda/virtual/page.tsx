import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Clock } from "lucide-react"
import { SplitText } from "@/components/split-text"
import { FadeIn } from "@/components/fade-in"

export default function VirtualAgendaPage() {
  const timelineEvents = [
    { time: "9:00 AM", title: "Check-ins", description: "Welcome and technical setup" },
    { time: "9:10 AM", title: "Official Opening", description: "Introduction to the program" },
    { time: "9:15 AM", title: "Group Agreements & DEI", description: "Setting community guidelines" },
    { time: "9:35 AM", title: "Icebreaker", description: "Get to know your fellow participants" },
    { time: "9:50 AM", title: "Quizizz", description: "Interactive Berkeley trivia game" },
    { time: "10:10 AM", title: "Faculty Speaker", description: "Presentation from a Berkeley professor" },
    { time: "10:30 AM", title: "Benefits Overview", description: "Learn about Regents' Scholarship benefits" },
    { time: "10:40 AM", title: "Campus Experience Panel", description: "Current students share their stories" },
    { time: "11:10 AM", title: "Campus Tour", description: "Virtual tour of Berkeley's campus" },
    { time: "11:55 AM", title: "Meet Your Host", description: "Q&A with current Berkeley students" },
    { time: "12:30 PM", title: "Closing Remarks", description: "Wrap-up and next steps" },
  ]

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="berkeley-blue py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center overflow-visible">
            <SplitText text="Virtual Program Agenda" className="mb-4 text-4xl font-bold md:text-5xl" delay={0.03} />
            <FadeIn delay={0.3}>
              <p className="text-lg text-white/80 leading-relaxed">
                Join us for a comprehensive virtual experience from the comfort of your home
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Date & Download Section */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6" style={{ color: "#003262" }} />
                <div>
                  <div className="font-bold" style={{ color: "#003262" }}>
                    March 15th, 2025
                  </div>
                  <div className="text-sm text-muted-foreground">9:00 AM - 12:30 PM PST</div>
                </div>
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Download className="h-4 w-4" />
                Download PDF Schedule
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h2 className="mb-12 text-3xl font-bold text-center" style={{ color: "#003262" }}>
                Day 1 Schedule
              </h2>
            </FadeIn>
            <div className="relative">
              <div className="absolute left-[31px] top-0 bottom-0 w-0.5 bg-[#FDB515] hidden md:block" />

              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
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
                        <CardContent className="pt-6">
                          <div className="hidden md:block mb-2 text-sm font-bold" style={{ color: "#FDB515" }}>
                            {event.time}
                          </div>
                          <h3 className="mb-2 text-xl font-bold" style={{ color: "#003262" }}>
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground">{event.description}</p>
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold" style={{ color: "#003262" }}>
                Ready to Join?
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Register now to secure your spot in our virtual program
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="berkeley-blue">
                  <Link href="/registration">Register for Virtual Program</Link>
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
