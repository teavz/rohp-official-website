import { Card, CardContent } from "@/components/ui/card"
import { SplitText } from "@/components/split-text"
import { FadeIn } from "@/components/fade-in"

export default function HousingPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="berkeley-blue py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center overflow-visible">
            <SplitText text="Housing Tours" className="mb-4 text-4xl font-bold md:text-5xl" delay={0.03} />
            <FadeIn delay={0.3}>
              <p className="text-lg text-white/80 leading-relaxed">
                Explore UC Berkeley's diverse housing options through student-led tours
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Units Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <h2 className="mb-6 text-3xl font-bold text-center" style={{ color: "#003262" }}>
                The Units
              </h2>
              <p className="mb-8 text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Unit 2 and Unit 3 are the heart of freshman residential life at Berkeley. These traditional residence
                halls offer a vibrant community experience with easy access to campus. Join Denise and Anh-Thu as they
                show you what life is like in the Units.
              </p>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 mb-8">
              <FadeIn delay={0.2}>
                <Card className="overflow-hidden border-2">
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/i7X0KBtmm4s"
                      title="The Units Tour 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-bold" style={{ color: "#003262" }}>
                      Unit 2 Tour
                    </h3>
                    <p className="text-sm text-muted-foreground">Explore the common areas and student rooms</p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Card className="overflow-hidden border-2">
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/AvFtGqB5PyY"
                      title="The Units Tour 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-lg font-bold" style={{ color: "#003262" }}>
                      Unit 3 Tour
                    </h3>
                    <p className="text-sm text-muted-foreground">See the dining halls and study spaces</p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>

            <FadeIn delay={0.4}>
              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-bold" style={{ color: "#003262" }}>
                    About The Units
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Traditional residence hall experience with double and triple rooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>On-site dining halls with flexible meal plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Study lounges, laundry facilities, and recreational spaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Close to campus and Telegraph Avenue</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Blackwell Hall Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <h2 className="mb-6 text-3xl font-bold text-center" style={{ color: "#003262" }}>
                Blackwell Hall
              </h2>
              <p className="mb-8 text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Renovated in 2018, Blackwell Hall offers modern facilities with a focus on sustainability and community.
                Celeste takes you on a tour of this state-of-the-art residence hall.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mb-8">
                <Card className="overflow-hidden border-2">
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/mWAocPL_154"
                      title="Blackwell Hall Tour"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </Card>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-bold" style={{ color: "#003262" }}>
                    About Blackwell Hall
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Recently renovated with modern amenities and sustainable design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>On-site fitness center and wellness facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Collaborative study spaces with natural lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Community kitchen and social lounges</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Martinez Commons Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <h2 className="mb-6 text-3xl font-bold text-center" style={{ color: "#003262" }}>
                Martinez Commons
              </h2>
              <p className="mb-8 text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Martinez Commons offers apartment-style living and is popular with upperclassmen. Experience the modern
                space with both townhouse and traditional apartment options.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mb-8">
                <Card className="overflow-hidden border-2">
                  <div className="relative aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/uAOmOuMP1L4"
                      title="Martinez Commons Tour"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </Card>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-bold" style={{ color: "#003262" }}>
                    About Martinez Commons
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Apartment-style living with shared kitchens and bathrooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Townhouse and traditional apartment configurations available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Popular with upperclassmen seeking more independent living</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: "#FDB515" }}>•</span>
                      <span>Modern facilities with excellent common spaces</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-2xl font-bold" style={{ color: "#003262" }}>
                Want to See More?
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Join us for an in-person overnight program to explore housing options and stay with a current student
              </p>
              <a
                href="/registration"
                className="inline-block berkeley-blue px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Register for ROHP
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
