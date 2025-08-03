import { NextResponse } from "next/server";
import {connectDB} from "@/lib/db";
import UmkmBaru from "@/lib/models/umkmBaru";

export async function PATCH(req, { params }) {
  await connectDB();
  const { id } = params;
  const { nama, deskripsi, linkGmaps } = await req.json();

  try {
    const updated = await UmkmBaru.findByIdAndUpdate(id, { nama, deskripsi, linkGmaps }, { new: true });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await connectDB();
  const { id } = params;

  try {
    await UmkmBaru.findByIdAndDelete(id);
    return NextResponse.json({ message: "Data dihapus" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
