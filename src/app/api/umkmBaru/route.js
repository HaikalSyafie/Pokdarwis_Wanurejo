import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

import UmkmBaru from "@/lib/models/umkmBaru";

export async function GET() {
  await connectDB();
  const semua = await UmkmBaru.find();
  return NextResponse.json(semua);
}

export async function POST(req) {
  await connectDB();
  const { nama, deskripsi, linkGmaps, passwordTambah } = await req.json();

  if (passwordTambah !== process.env.USER_PASSWORD) {
    return NextResponse.json({ error: "Password tambah UMKM salah" }, { status: 403 });
  }

  try {
    const baru = await UmkmBaru.create({ nama, deskripsi, linkGmaps });
    return NextResponse.json(baru, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
