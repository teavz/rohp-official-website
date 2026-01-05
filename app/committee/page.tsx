"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CommitteeMemberModal } from "@/components/committee-member-modal"
import { User } from "lucide-react"
import { SplitText } from "@/components/split-text"
import { FadeIn } from "@/components/fade-in"
import { PixelTransition } from "@/components/pixel-transition"

interface CommitteeMember {
  name: string
  pronouns: string
  major: string
  classYear: string
  bio: string
  image: string
  secondImage?: string
  email?: string
}

export default function CommitteePage() {
  const [selectedMember, setSelectedMember] = useState<CommitteeMember | null>(null)

  const committeeMembers: CommitteeMember[] = [
    {
      name: "Shukri Suhir",
      pronouns: "she/her",
      major: "Public Health",
      classYear: "Class of 2024",
      bio: "As a Public Health major, I'm passionate about health equity and community wellness. I joined ROHP to help prospective students see themselves thriving at Berkeley. In my free time, I love exploring new cafes in the Bay Area and staying active with intramural sports.",
      image: "/young-woman-student.png",
      secondImage: "/young-woman-student-alt.png",
      email: "shukri@rohp.berkeley.edu",
    },
    {
      name: "Joshua Paul",
      pronouns: "he/him",
      major: "Mechanical Engineering",
      classYear: "Class of 2025",
      bio: "I'm a Mechanical Engineering student with a focus on sustainable design. ROHP gave me the opportunity to share my Berkeley journey and show prospective students the amazing engineering programs we have here. When I'm not in class, you can find me working on robotics projects or hiking in the East Bay hills.",
      image: "/young-man-engineer-student.jpg",
      secondImage: "/young-man-engineer-student-alt.jpg",
      email: "joshua@rohp.berkeley.edu",
    },
    {
      name: "Celeste Basken",
      pronouns: "she/her",
      major: "Environmental Sciences & Political Science",
      classYear: "Class of 2026",
      bio: "Double majoring in Environmental Sciences and Political Science has given me a unique perspective on sustainability policy. I'm excited to help prospective students discover Berkeley's interdisciplinary opportunities. Outside of academics, I'm involved in environmental advocacy groups and love exploring California's national parks.",
      image: "/young-woman-environmental-student.jpg",
      secondImage: "/young-woman-environmental-student-alt.jpg",
      email: "celeste@rohp.berkeley.edu",
    },
    {
      name: "Chloe Kim",
      pronouns: "she/her",
      major: "Data Science and Business",
      classYear: "Class of 2024",
      bio: "As a Data Science and Business double major, I'm fascinated by how data drives decision-making in the modern world. ROHP allows me to share my experiences and help future students see the incredible opportunities at Haas and the data science program. I enjoy playing tennis and exploring San Francisco on weekends.",
      image: "/young-woman-business-student.jpg",
      secondImage: "/young-woman-business-student-alt.jpg",
      email: "chloe@rohp.berkeley.edu",
    },
    {
      name: "Sam Ceja",
      pronouns: "he/him",
      major: "Conservation and Resource Studies",
      classYear: "Class of 2024",
      bio: "I'm dedicated to conservation and environmental sustainability. Through ROHP, I love connecting with prospective students who share my passion for the environment. Berkeley's location and programs offer amazing opportunities for hands-on conservation work. In my spare time, I volunteer with local restoration projects and enjoy photography.",
      image: "/young-man-conservation-student.jpg",
      secondImage: "/young-man-conservation-student-alt.jpg",
      email: "sam@rohp.berkeley.edu",
    },
    {
      name: "Michael de Campos",
      pronouns: "he/him",
      major: "Sociology and Media Studies",
      classYear: "Class of 2025",
      bio: "Studying Sociology and Media Studies has opened my eyes to how media shapes society. I joined ROHP to help prospective students understand the diverse academic paths available at Berkeley. When I'm not studying, I'm making documentary films and exploring Berkeley's vibrant arts scene.",
      image: "/young-man-media-student.jpg",
      secondImage: "/young-man-media-student-alt.jpg",
      email: "michael@rohp.berkeley.edu",
    },
    {
      name: "Kailen Grottel-Brown",
      pronouns: "they/them",
      major: "Political Science and Economics",
      classYear: "Class of 2025",
      bio: "My dual major in Political Science and Economics allows me to understand policy from multiple perspectives. I'm passionate about helping future scholars navigate Berkeley's resources. Outside of class, I'm involved in student government and enjoy attending political debates and economic forums on campus.",
      image: "/young-person-political-student.jpg",
      secondImage: "/young-person-political-student-alt.jpg",
      email: "kailen@rohp.berkeley.edu",
    },
    {
      name: "Marisol Cruz Velasco",
      pronouns: "she/her",
      major: "Business Administration",
      classYear: "Class of 2026",
      bio: "As a Business Administration major at Haas, I'm excited about entrepreneurship and social impact. ROHP is my way of giving back and helping prospective students see themselves succeeding at Berkeley. I love networking events, startup competitions, and trying new restaurants in the Bay Area.",
      image: "/young-woman-business-latina-student.jpg",
      secondImage: "/young-woman-business-latina-student-alt.jpg",
      email: "marisol@rohp.berkeley.edu",
    },
    {
      name: "Richard Yu",
      pronouns: "he/him",
      major: "Computer Science",
      classYear: "Class of 2026",
      bio: "I'm passionate about artificial intelligence and software development. Through ROHP, I want to share how Berkeley's CS program has shaped my technical skills and career prospects. When I'm not coding, I enjoy hackathons, playing basketball, and exploring new tech startups in Silicon Valley.",
      image: "/young-asian-man-computer-science-student.jpg",
      secondImage: "/young-asian-man-computer-science-student-alt.jpg",
      email: "richard@rohp.berkeley.edu",
    },
    {
      name: "Ganesh Kalakheti",
      pronouns: "he/him",
      major: "Data Science",
      classYear: "Class of 2027",
      bio: "As a freshman Data Science major, I understand what it's like to be in the shoes of prospective students. I'm excited to share my recent transition to Berkeley and help others see themselves here. I enjoy machine learning projects, playing soccer, and discovering hidden study spots on campus.",
      image: "/young-man-data-science-student.jpg",
      secondImage: "/young-man-data-science-student-alt.jpg",
      email: "ganesh@rohp.berkeley.edu",
    },
    {
      name: "Sarah Saadeh",
      pronouns: "she/her",
      major: "Civil Engineering",
      classYear: "Class of 2027",
      bio: "Civil Engineering has always been my passion, and Berkeley's program is world-class. I'm thrilled to help prospective students learn about the amazing opportunities here. Outside of engineering, I'm involved in Engineers Without Borders and love urban cycling around the Bay Area.",
      image: "/young-woman-engineer-student.jpg",
      secondImage: "/young-woman-engineer-student-alt.jpg",
      email: "sarah@rohp.berkeley.edu",
    },
    {
      name: "Emerson Marquez",
      pronouns: "he/him",
      major: "Urban Studies",
      classYear: "Class of 2027",
      bio: "Urban Studies allows me to explore how cities work and how we can make them better. I joined ROHP to share my excitement about Berkeley's unique programs and vibrant community. I love biking around Berkeley, attending city planning meetings, and discovering new music venues.",
      image: "/young-latino-man-urban-student.jpg",
      secondImage: "/young-latino-man-urban-student-alt.jpg",
      email: "emerson@rohp.berkeley.edu",
    },
    {
      name: "Ayisha Umar",
      pronouns: "she/her",
      major: "Applied Mathematics",
      classYear: "Class of 2027",
      bio: "Applied Math combines my love for theory and real-world problem solving. Through ROHP, I want to help prospective students discover Berkeley's incredible academic resources. When I'm not doing math, I enjoy tutoring, playing chess, and exploring Berkeley's diverse food scene.",
      image: "/young-woman-math-student.jpg",
      secondImage: "/young-woman-math-student-alt.jpg",
      email: "ayisha@rohp.berkeley.edu",
    },
    {
      name: "Sofia Solorio",
      pronouns: "she/her",
      major: "Sustainable Environmental Design",
      classYear: "Class of 2027",
      bio: "Sustainable design is the future, and Berkeley is leading the way. I'm passionate about helping prospective students see how they can make an impact through their education. I love sketching, visiting architecture exhibits, and working on sustainable design projects with my peers.",
      image: "/young-latina-woman-design-student.jpg",
      secondImage: "/young-latina-woman-design-student-alt.jpg",
      email: "sofia@rohp.berkeley.edu",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="berkeley-blue py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center overflow-visible">
            <SplitText text="Meet the Committee" className="mb-4 text-4xl font-bold md:text-5xl" delay={0.03} />
            <FadeIn delay={0.3}>
              <p className="text-lg text-white/80 leading-relaxed">
                Get to know the dedicated students who make ROHP possible
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Committee Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <p className="mb-12 text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our committee members are current UC Berkeley students who are passionate about sharing their
                experiences and helping prospective scholars discover what makes Berkeley special.
              </p>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {committeeMembers.map((member, index) => (
                <FadeIn key={index} delay={index * 0.05}>
                  <Card className="border-2 hover:shadow-xl transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-64 bg-muted overflow-hidden">
                        <PixelTransition
                          firstContent={
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="h-full w-full object-cover"
                            />
                          }
                          secondContent={
                            <img
                              src={member.secondImage || member.image || "/placeholder.svg"}
                              alt={`${member.name} alternate`}
                              className="h-full w-full object-cover"
                            />
                          }
                          gridSize={10}
                          pixelColor="#FDB515"
                          animationStepDuration={0.4}
                          aspectRatio="256px"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="mb-1 text-xl font-bold" style={{ color: "#003262" }}>
                          {member.name}
                        </h3>
                        <p className="mb-2 text-sm text-muted-foreground">{member.pronouns}</p>
                        <p className="mb-1 font-semibold text-sm">{member.major}</p>
                        <p className="mb-4 text-sm" style={{ color: "#FDB515" }}>
                          {member.classYear}
                        </p>
                        <div className="flex gap-2">
                          <Button
                            onClick={() => setSelectedMember(member)}
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-transparent"
                          >
                            <User className="mr-2 h-4 w-4" />
                            About Me
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
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
                Ready to Meet Them in Person?
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Register for a ROHP program to connect with our committee members and current Berkeley students
              </p>
              <a
                href="/registration"
                className="inline-block berkeley-blue px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Register Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {selectedMember && (
        <CommitteeMemberModal
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </div>
  )
}
