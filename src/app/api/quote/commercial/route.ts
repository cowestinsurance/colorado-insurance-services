import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.businessName || !data.contactEmail) {
      return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
    }

    // Log for now — integrate with Resend/InsuredMine later
    console.log("Commercial quote submission:", data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to process submission." }, { status: 500 });
  }
}
