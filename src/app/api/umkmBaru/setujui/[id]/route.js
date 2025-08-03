import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

import UmkmBaru from "@/lib/models/umkmBaru";

export async function PATCH(req) {
  await connectDB();
  const { id, password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Password salah" }, { status: 403 });
  }

  try {
    const updated = await UmkmBaru.findByIdAndUpdate(id, { disetujui: true }, { new: true });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
