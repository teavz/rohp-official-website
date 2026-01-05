import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { name, email, phone, programs } = body

    // Validate required fields
    if (!name || !email || !phone || !programs || programs.length === 0) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In a real implementation, you would:
    // 1. Save to waitlist in database
    // 2. Send confirmation email to user
    // 3. Send notification to ROHP committee

    console.log("[v0] Waitlist submission received:", {
      name,
      email,
      phone,
      programs,
    })

    // Simulate database save
    // await db.waitlist.create({
    //   data: { name, email, phone, programs }
    // })

    // Simulate sending confirmation email
    // await sendEmail({
    //   to: email,
    //   subject: 'ROHP Waitlist Confirmation',
    //   body: 'You have been added to the waitlist...'
    // })

    return NextResponse.json(
      {
        success: true,
        message: "You have been added to the waitlist. We will notify you via email if a spot becomes available.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Waitlist submission error:", error)
    return NextResponse.json({ error: "Failed to add to waitlist" }, { status: 500 })
  }
}
