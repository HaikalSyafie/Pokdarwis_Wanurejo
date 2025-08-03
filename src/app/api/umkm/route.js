// app/api/umkm/route.js
import { connectDB } from "@/lib/db";
import Umkm from '@/lib/models/umkm';

export async function GET() {
  await connectDB();
  const umkmList = await Umkm.find();
  return Response.json(umkmList);
}

export async function POST(req) {
  await connectDB();
  try {
    const body = await req.json();
    const newUmkm = new Umkm(body);
    const saved = await newUmkm.save();
    return Response.json(saved, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 400 });
  }
}
