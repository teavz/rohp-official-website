import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileCheck, MessageSquare } from "lucide-react"
import { SplitText } from "@/components/split-text"
import { FadeIn } from "@/components/fade-in"

export default function RegistrationPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="berkeley-blue py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center overflow-visible">
            <SplitText text="Program Registration" className="mb-4 text-4xl font-bold md:text-5xl" delay={0.03} />
            <FadeIn delay={0.3}>
              <p className="text-lg text-white/80 leading-relaxed">
                Complete your registration to secure your spot in ROHP
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <h2 className="mb-10 text-3xl font-bold text-center" style={{ color: "#003262" }}>
                Registration Steps
              </h2>
            </FadeIn>
            <div className="grid gap-8 md:grid-cols-3">
              <FadeIn delay={0.1}>
                <Card className="border-2 text-center">
                  <CardContent className="pt-8">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full p-4" style={{ backgroundColor: "#FDB515" }}>
                        <Download className="h-8 w-8" style={{ color: "#003262" }} />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold" style={{ color: "#003262" }}>
                      Step 1
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Download and sign the appropriate waiver (Virtual or In-Person)
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Card className="border-2 text-center">
                  <CardContent className="pt-8">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full p-4" style={{ backgroundColor: "#FDB515" }}>
                        <FileCheck className="h-8 w-8" style={{ color: "#003262" }} />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold" style={{ color: "#003262" }}>
                      Step 2
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Complete the registration form below and upload your signed waiver
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="border-2 text-center">
                  <CardContent className="pt-8">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full p-4" style={{ backgroundColor: "#FDB515" }}>
                        <MessageSquare className="h-8 w-8" style={{ color: "#003262" }} />
                      </div>
                    </div>
                    <h3 className="mb-3 text-xl font-bold" style={{ color: "#003262" }}>
                      Step 3
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Optionally submit questions for the Q&A session
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Waiver Downloads */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="mb-6 text-2xl font-bold text-center" style={{ color: "#003262" }}>
                Download Waivers
              </h2>
              <p className="mb-8 text-center text-muted-foreground leading-relaxed">
                Download, fill out, and sign the appropriate waiver. You'll upload it in the registration form below.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid gap-4 md:grid-cols-2">
                <Button asChild variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
                  <a href="/waivers/2025%20ROHP%20In-Person%20Guest%20Waiver.pdf" download>
                    <Download className="h-6 w-6" />
                    <span className="font-bold">In-Person Program Waiver</span>
                    <span className="text-xs text-muted-foreground">PDF - For overnight programs</span>
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
                  <a href="/waivers/2025%20ROHP%20Virtual%20Guest%20Waiver.pdf" download>
                    <Download className="h-6 w-6" />
                    <span className="font-bold">Virtual Program Waiver</span>
                    <span className="text-xs text-muted-foreground">PDF - For virtual programs</span>
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold" style={{ color: "#003262" }}>
                  Registration Form
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Please fill out all required fields marked with <span className="text-red-500">*</span>
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-xl border bg-background overflow-hidden">
                <div className="relative w-full" style={{ paddingTop: "140%" }}>
                  <iframe
                    title="ROHP Program Registration"
                    src="https://docs.google.com/forms/d/e/P87uSPvaxMd47gKQ9/viewform?embedded=true"
                    className="absolute inset-0 h-full w-full"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Q&A Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold" style={{ color: "#003262" }}>
                  Q&amp;A Form (Optional)
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Submit questions you’d like addressed during the program.
                </p>
              </div>
              <div className="rounded-xl border bg-background overflow-hidden">
                <div className="relative w-full" style={{ paddingTop: "120%" }}>
                  <iframe
                    title="ROHP Q&A"
                    src="https://docs.google.com/forms/d/e/deLHGzSHbgYsykg47/viewform?embedded=true"
                    className="absolute inset-0 h-full w-full"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 className="mb-6 text-2xl font-bold text-center" style={{ color: "#003262" }}>
                Important Information
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="font-bold" style={{ color: "#FDB515" }}>
                        •
                      </span>
                      <span>You may only register for ONE program date</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold" style={{ color: "#FDB515" }}>
                        •
                      </span>
                      <span>Registration is only available for Regents' and Chancellor's Scholarship candidates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold" style={{ color: "#FDB515" }}>
                        •
                      </span>
                      <span>You will receive a confirmation email within 24 hours of submitting your registration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold" style={{ color: "#FDB515" }}>
                        •
                      </span>
                      <span>
                        If you need to cancel, please contact us at contact@rohp.berkeley.edu as soon as possible
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold" style={{ color: "#FDB515" }}>
                        •
                      </span>
                      <span>All programs are completely free for participants</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
