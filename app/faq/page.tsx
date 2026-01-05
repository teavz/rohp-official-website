"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Mail } from "lucide-react"
import { SplitText } from "@/components/split-text"
import { FadeIn } from "@/components/fade-in"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqItems = [
    {
      category: "General",
      questions: [
        {
          question: "What time zone are the programs in?",
          answer:
            "All ROHP programs run on Pacific Standard Time (PST). Please make sure to convert to your local time zone when planning your attendance.",
        },
        {
          question: "Who is eligible to participate in ROHP?",
          answer:
            "ROHP is exclusively for Regents' and Chancellor's Scholarship candidates at UC Berkeley. You must have received an invitation to apply for these prestigious scholarships to participate.",
        },
        {
          question: "How much does it cost to participate?",
          answer:
            "ROHP is completely free for all participants! This includes overnight accommodations, meals, campus tours, and all program activities.",
        },
      ],
    },
    {
      category: "Registration",
      questions: [
        {
          question: "How do I cancel my registration?",
          answer:
            "If you need to cancel your registration, please email us at contact@rohp.berkeley.edu as soon as possible. This allows us to offer your spot to someone on the waitlist.",
        },
        {
          question: "Can I register for multiple program dates?",
          answer:
            "No, you may only register for ONE program date. This ensures that as many scholarship candidates as possible have the opportunity to participate.",
        },
        {
          question: "When will I receive confirmation of my registration?",
          answer:
            "You will receive a confirmation email within 24 hours of submitting your registration. If you don't receive a confirmation, please check your spam folder or contact us.",
        },
      ],
    },
    {
      category: "Waitlist",
      questions: [
        {
          question: "How will I be notified if a spot becomes available?",
          answer:
            "If you're on the waitlist, we will notify you via email if a spot opens up. Please respond quickly to confirm your attendance, as spots are offered on a first-come, first-served basis.",
        },
        {
          question: "What are my chances of getting off the waitlist?",
          answer:
            "Waitlist movement varies by program date. Spots typically open up 1-2 weeks before the program as some participants need to cancel. We recommend signing up for multiple program dates on the waitlist to increase your chances.",
        },
        {
          question: "Can I check my position on the waitlist?",
          answer:
            "For privacy reasons, we don't disclose specific waitlist positions. However, you can email contact@rohp.berkeley.edu to inquire about general waitlist movement for your chosen program date.",
        },
      ],
    },
    {
      category: "Program Details",
      questions: [
        {
          question: "Can my parents or guardians attend?",
          answer:
            "For overnight programs, parents are welcome to join all events after 10:00 AM on Day 2, including focus tours and the closing ceremony. For virtual programs, parents are welcome to observe the entire program.",
        },
        {
          question: "What's the difference between virtual and overnight programs?",
          answer:
            "Virtual programs are single-day online experiences (9 AM - 12:30 PM PST) featuring faculty speakers, student panels, and virtual tours. Overnight programs are two-day in-person experiences where you stay in the dorms, meet your host, and participate in evening activities.",
        },
        {
          question: "What should I bring to an overnight program?",
          answer:
            "Bring comfortable clothes, toiletries, a sleeping bag or bedding, and any personal items you need. Your host will provide a place to sleep in their dorm room. Also bring walking shoes for campus tours and any dietary medications if needed.",
        },
      ],
    },
    {
      category: "Other",
      questions: [
        {
          question: "Are there other ways to learn about Berkeley if I can't attend ROHP?",
          answer:
            "Yes! UC Berkeley offers virtual tours, online information sessions, and other visit programs. Check the Berkeley Admissions website for additional opportunities to learn about campus life.",
        },
        {
          question: "What COVID-19 safety measures are in place?",
          answer:
            "We follow all current UC Berkeley campus health guidelines. Please check your confirmation email for the most up-to-date health and safety protocols for your program date.",
        },
        {
          question: "Who do I contact with additional questions?",
          answer:
            "For any questions not covered in this FAQ, please email us at contact@rohp.berkeley.edu. We typically respond within 1-2 business days.",
        },
      ],
    },
  ]

  const filteredFAQs = faqItems
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="berkeley-blue py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center overflow-visible">
            <SplitText text="Frequently Asked Questions" className="mb-4 text-4xl font-bold md:text-5xl" delay={0.03} />
            <FadeIn delay={0.3}>
              <p className="text-lg text-white/80 leading-relaxed">Find answers to common questions about ROHP</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {filteredFAQs.length === 0 ? (
              <FadeIn>
                <Card>
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">No questions found matching your search.</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ) : (
              <div className="space-y-12">
                {filteredFAQs.map((category, catIndex) => (
                  <FadeIn key={catIndex} delay={catIndex * 0.1}>
                    <div>
                      <h2 className="mb-6 text-2xl font-bold" style={{ color: "#003262" }}>
                        {category.category}
                      </h2>
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((item, qIndex) => (
                          <AccordionItem
                            key={qIndex}
                            value={`${catIndex}-${qIndex}`}
                            className="border rounded-lg px-6"
                          >
                            <AccordionTrigger className="text-left hover:no-underline">
                              <span className="font-semibold" style={{ color: "#003262" }}>
                                {item.question}
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <Card className="border-2">
                <CardContent className="pt-8 text-center">
                  <Mail className="mx-auto h-12 w-12 mb-4" style={{ color: "#003262" }} />
                  <h2 className="mb-4 text-2xl font-bold" style={{ color: "#003262" }}>
                    Still Have Questions?
                  </h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Can't find what you're looking for? Our team is here to help!
                  </p>
                  <a
                    href="mailto:contact@rohp.berkeley.edu"
                    className="text-lg font-semibold hover:text-[#FDB515] transition-colors"
                  >
                    contact@rohp.berkeley.edu
                  </a>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
