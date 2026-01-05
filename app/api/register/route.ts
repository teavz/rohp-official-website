import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      highSchool: formData.get("highSchool"),
      gradYear: formData.get("gradYear"),
      selectedProgram: formData.get("selectedProgram"),
      dietary: formData.get("dietary"),
      accessibility: formData.get("accessibility"),
      waiver: formData.get("waiver"), // File
      major: formData.get("major"),
      genderPref: formData.get("genderPref"),
      requests: formData.get("requests"),
      emergencyName: formData.get("emergencyName"),
      emergencyPhone: formData.get("emergencyPhone"),
      emergencyRelation: formData.get("emergencyRelation"),
      hearAbout: formData.get("hearAbout"),
    }

    // Validate required fields
    if (!data.fullName || !data.email || !data.phone || !data.highSchool || !data.gradYear || !data.selectedProgram) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email as string)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Handle file upload (waiver)
    const waiverFile = formData.get("waiver") as File
    if (waiverFile) {
      // Validate file type
      if (waiverFile.type !== "application/pdf") {
        return NextResponse.json({ error: "Waiver must be a PDF file" }, { status: 400 })
      }

      // Validate file size (5MB max)
      if (waiverFile.size > 5 * 1024 * 1024) {
        return NextResponse.json({ error: "Waiver file size must be less than 5MB" }, { status: 400 })
      }

      // In a real implementation, you would:
      // 1. Upload to cloud storage (e.g., Vercel Blob, S3)
      // 2. Store the file URL in the database
      // Example: const fileUrl = await uploadToStorage(waiverFile)
    }

    // In a real implementation, you would:
    // 1. Save to database (Supabase, Neon, etc.)
    // 2. Send confirmation email to the user
    // 3. Send notification email to ROHP committee

    console.log("[v0] Registration data received:", data)

    // Simulate database save
    // await db.registrations.create({ data: { ...data, waiverUrl: fileUrl } })

    // Simulate sending confirmation email
    // await sendEmail({
    //   to: data.email,
    //   subject: 'ROHP Registration Confirmed',
    //   body: 'Thank you for registering...'
    // })

    return NextResponse.json(
      {
        success: true,
        message: "Registration submitted successfully. You will receive a confirmation email within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Registration error:", error)
    return NextResponse.json({ error: "Failed to process registration" }, { status: 500 })
  }
}
