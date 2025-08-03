import mongoose from "mongoose";

const UmkmBaruSchema = new mongoose.Schema(
  {
    nama: { type: String, required: true },
    deskripsi: { type: String, required: true },
    linkGmaps: { type: String, required: true },
    disetujui: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.UmkmBaru || mongoose.model("UmkmBaru", UmkmBaruSchema);
