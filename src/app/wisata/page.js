'use client';
import TourismMapDummy from "@/components/TourismDummy";
import UmkmBaruTable from "@/components/UmkmInput"; // atau sesuaikan path

import Image from "next/image";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);
  return (
    <div className="w-full">

     <section className="relative w-full h-screen">
        <img
          src="/balkondes.jpeg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white"
          data-aos="fade-up"
        >
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl text-center font-bold px-4 drop-shadow-lg">Eksplorasi</h2>
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl text-center font-bold px-4 drop-shadow-lg">Destinasi Wisata</h1>
          <p className="mt-4 text-base sm:text-xl md:text-2xl font-semibold max-w-3xl text-center">
            dari keindahan alam, warisan budaya, hingga sentuhan <br />
            kreativitas lokal di setiap sudut desa.
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

           
   <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Grid gambar penuh background */}
      <div className="absolute inset-0 z-0 grid grid-rows-3 gap-1 bg-white">
        {/* Baris 1: 3 gambar */}
        <div className="grid grid-cols-3 gap-1 bg-white">
          <img src="/karpet.jpg" className="w-full h-full object-cover" />
          <img src="/potensii.jpg" className="w-full h-full object-cover" />
          <img src="/potensiii.jpg" className="w-full h-full object-cover" />
        </div>
        {/* Baris 2: 2 gambar */}
        <div className="grid grid-cols-2 gap-1 bg-white">
          <img src="/yangko.jpg" className="w-full h-full object-cover" />
          <img src="/potensiiiii.jpg" className="w-full h-full object-cover" />
        </div>
        {/* Baris 3: 3 gambar */}
        <div className="grid grid-cols-3 gap-1 bg-white">
          <img src="/potensiiii.jpg" className="w-full h-full object-cover" />
          <img src="/Rengginang.jpg" className="w-full h-full object-cover" />
          <img src="/tingal.jpg" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Overlay transparan */}
      <div className="absolute inset-0 bg-white/50 z-10" />

      {/* Konten utama */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 space-y-6">
        {/* Kotak Potensi */}
        <div
          className="bg-white/80 p-8 rounded-xl shadow-xl max-w-xl w-full text-center border border-gray-200"
          data-aos="fade-up"
        >
          <h2 className="inline-block bg-[#0e2877] text-white text-lg md:text-xl font-semibold px-6 py-2 rounded-full mb-6 shadow-md">
            Potensi Desa Wisata
          </h2>
          <ul className="text-gray-900 text-left list-disc list-inside space-y-2 text-base md:text-lg">
            <li>Daya Tarik Wisata Alam</li>
            <li>Daya Tarik Wisata Budaya dan Kerajinan</li>
            <li>Daya Tarik buatan</li>
            <li>Situs Budaya</li>
          </ul>
        </div>

        {/* Kotak Tombol Download */}
        <div
          className="bg-white/80 p-6 rounded-xl shadow-md max-w-xl w-full text-center border border-gray-200"
          data-aos="fade-up"
        >
          <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-4">
            Unduh Panduan Desa Wisata
          </h3>
          <a
            href="https://drive.google.com/drive/folders/1xtmM1NdJpyrCox-wDyPcgwHzfe5SY06u" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0e2877] text-white font-medium px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:bg-[#0c215f] hover:scale-105 hover:shadow-lg"
          >
            Download E-Guide Book
          </a>
        </div>
      </div>
    </section>





    <section className="relative w-full min-h-screen px-6 bg-white overflow-hidden flex flex-col items-center justify-center"
      >
        <Image
                      src="/infoKanan.png"
                      alt="Ornamen kiri"
                      width={250}
                      height={250}
                      className="absolute bottom-10 left-4 md:left-8 opacity-60 pointer-events-none"
                    />
                    {/* Ornamen kanan */}
                    <div className="absolute top-24 right-0 z-0 h-[120%] hidden sm:block">
                      <Image
                        src="/infoKanan.png"
                        alt="Ornamen Kanan"
                        width={300}
                        height={800}
                        className="object-contain opacity-60"
                      />
                    </div>

      {/* Headline */}
      <h2 className="text-2xl md:text-3xl font-bold bg-[#0e2877] text-white inline-block px-6 py-3 rounded-2xl shadow-md mt-8"
          data-aos="fade-left">
            Peta Desa Wisata
      </h2>-

      {/* Komponen Peta */}
      <div className="w-full flex justify-center"
      data-aos="fade-right">
        
        <TourismMapDummy />
      </div>
      {/* Tabel UMKM Baru */}
      <div className="w-full px-4 py-10">
        <UmkmBaruTable />
      </div>

    </section>


    <section className="relative w-full min-h-screen overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/homestay_sanurta.jpg')`,
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#d2cbc3]/[0.2] z-10" />
          
          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-5xl md:text-5xl font-bold mb-4 tracking-wide"
              data-aos="fade-up"
>
                HOMESTAY
              </h1>
              <h1 className="text-2xl md:text-6xl font-light text-gray-200"
              data-aos="fade-up">
                Sarhunta Borobudur
              </h1>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-px h-16 bg-white/50 mx-auto mb-4"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </section>
    <section className="w-full px-4 pb-12 bg-white">
                    {/* Ornamen kanan */}
        <div className="absolute top-24 right-0 z-0 h-[120%] hidden sm:block">
              <Image
              src="/infoKanan.png"
              alt="Ornamen Kanan"
              width={300}
              height={800}
              className="object-contain opacity-60"
              />
        </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
        {/* Kolom Kiri: Gambar + Label */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between">
          {/* Gambar Responsive */}
          <div className="w-full">
            <Image
              src="/Persebaran_Penginapan.png"
              alt="Peta Sarhunta"
              width={600}
              height={700}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Label Bulat */}
          <div className="grid grid-cols-2 gap-3">
            <div className="px-4 py-1.5 rounded-full bg-lime-500 text-white text-xs sm:text-sm text-center font-medium shadow-sm">
              <span className="font-semibold">Landmark </span>
              Candi Pawon & Sendang Kamulyan
            </div>

            <div className="px-4 py-1.5 rounded-full bg-[#7B3F28] text-white text-xs sm:text-sm text-center font-medium shadow-sm">
              <span className="font-semibold italic">Authentic live–in experience</span><br />
              Nyaman & terjangkau
            </div>

            <div className="px-4 py-1.5 rounded-full bg-[#D9D3CC] text-gray-800 text-xs sm:text-sm text-center shadow-sm flex items-center justify-center gap-1">
              <span>📍</span>
              <span>Dusun Brojonalan,Desa Wanurejo</span>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-[#2C1A12] text-white text-xs sm:text-sm text-center shadow-sm">
              Mulai dari <span className="font-semibold italic">Rp250.000,–</span><br />/ malam
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Teks — Didorong ke bawah */}
        <div className="w-full lg:w-1/2 flex flex-col justify-end"
        data-aos="fade-up">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900">Tentang Sarhunta</h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Terletak strategis di dekat situs budaya Candi Pawon dan Sendang Kamulyan, kompleks Sarhunta Borobudur menghadirkan pengalaman menginap yang memadukan kenyamanan modern dengan kehidupan pedesaan autentik.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Lima belas unit <em>homestay</em> yang berjarak hanya 5–10 meter menciptakan suasana komunal desa yang hangat, cocok bagi wisatawan yang mengutamakan pengalaman budaya mendalam.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Lebih dari sekadar menginap, Sarhunta menawarkan pengalaman menyatu dengan kehidupan warga lokal. Mulai dari sarapan bersama keluarga pemilik, memasak di tungku tradisional, hingga berbaur dalam aktivitas harian di desa—setiap momen membawa makna dan kehangatan.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        <img
          src="/Homestay1.jpg"
          alt="Kamar interior"
          className="w-full h-full object-cover"
        />
        <img
          src="/Homestay2.png"
          alt="Candi Pawon"
          className="w-full h-full object-cover"
        />
        <img
          src="/Homestay3.png"
          alt="Tampak depan homestay"
          className="w-full h-full object-cover"
        />
        <img
          src="/Homestay4.png"
          alt="Ruang mandi atau ruang tamu"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
    <section className="w-full px-4 py-12 bg-white text-black">
        <div className="max-w-6xl mx-auto"
          data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-8">Fasilitas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Tipe 1 */}
            <div>
              <p className="font-bold italic mb-2">Tipe 1 <span className="not-italic">(Rp250.000,-)</span></p>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                <li>1 kamar tidur dengan <em>twin bed</em></li>
                <li>Kamar mandi pribadi</li>
                <li>Kipas angin</li>
                <li>Handuk</li>
                <li>Teh, kopi, air minum</li>
              </ul>
            </div>

            {/* Tipe 2 */}
            <div>
              <p className="font-bold italic mb-2">Tipe 2 <span className="not-italic">(Rp350.000,-)</span></p>
              <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                <li>1 kamar tidur dengan <em>twin bed</em></li>
                <li>Kamar mandi pribadi (1 atau 2, tergantung unit)</li>
                <li>AC</li>
                <li>TV</li>
                <li>Handuk</li>
                <li>Wi-Fi</li>
              </ul>
            </div>

            {/* Deskripsi + Booking */}
            <div className="flex flex-col gap-4 text-sm sm:text-base">
              <p>
                Cocok untuk <em>solo traveler</em>, pasangan, hingga rombongan keluarga. Sarhunta juga menyediakan pilihan rumah satu unit penuh untuk 8–10 orang, dengan harga berkisar Rp400.000–500.000 per malam, tergantung jumlah tamu.
              </p>

              <div className="bg-gray-200 px-4 py-3 rounded-xl flex items-center gap-3">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5" />
                <div>
                  <p className="font-semibold text-sm">Booking & information:</p>
                  <p className="font-bold text-base">+62 823-2922-4570</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
