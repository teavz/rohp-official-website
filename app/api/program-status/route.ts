import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const programId = searchParams.get("programId")

    // In a real implementation, you would:
    // 1. Query database for program capacity
    // 2. Return current status (open, full, waitlist)

    // Mock data for demonstration
    const programStatuses = {
      feb22: { status: "open", available: 15, total: 50 },
      mar8: { status: "waitlist", available: 0, total: 50 },
      mar15virtual: { status: "open", available: 30, total: 100 },
      mar15: { status: "open", available: 10, total: 50 },
      apr18: { status: "open", available: 20, total: 40 },
    }

    if (programId && programId in programStatuses) {
      return NextResponse.json(programStatuses[programId as keyof typeof programStatuses], { status: 200 })
    }

    // Return all statuses if no specific program requested
    return NextResponse.json(programStatuses, { status: 200 })
  } catch (error) {
    console.error("[v0] Program status error:", error)
    return NextResponse.json({ error: "Failed to fetch program status" }, { status: 500 })
  }
}
