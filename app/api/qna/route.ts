import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { qnaName, qnaEmail, qnaProgram, question } = body

    // Validate required fields
    if (!qnaName || !qnaEmail || !question) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(qnaEmail)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In a real implementation, you would:
    // 1. Save question to database
    // 2. Send notification to ROHP committee
    // 3. Optionally send confirmation to user

    console.log("[v0] Q&A submission received:", {
      name: qnaName,
      email: qnaEmail,
      program: qnaProgram,
      question,
    })

    // Simulate database save
    // await db.questions.create({
    //   data: { name: qnaName, email: qnaEmail, program: qnaProgram, question }
    // })

    return NextResponse.json(
      {
        success: true,
        message: "Your question has been submitted and will be addressed during the Q&A session.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Q&A submission error:", error)
    return NextResponse.json({ error: "Failed to submit question" }, { status: 500 })
  }
}
