// lib/models/umkm.js
import mongoose from 'mongoose';

const UmkmSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  gambar: { type: String, required: true },
  deskripsi: { type: String, required: true },
  gmaps: { type: String },
  marker: { type: String, required: true },
  koordinat: {
    x: { type: Number },
    y: { type: Number },
  },
});

export default mongoose.models.Umkm || mongoose.model("Umkm", UmkmSchema);
