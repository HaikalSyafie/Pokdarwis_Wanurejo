'use client';
import { useState } from "react";
import Image from "next/image";
import { komoditas } from "../../../data/komoditas";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function KomoditasPage() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="w-full">

      {/* SECTION HERO */}
      <section className="relative w-full h-screen">
        <img
          src="/Kelapa.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10"
        data-aos="fade-up">
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-2">
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl text-center font-bold px-4 drop-shadow-lg">
              Potensi Komoditas Pertanian Unggul
            </h1>
            <h2 className="text-white text-3xl sm:text-4xl md:text-6xl text-center font-bold px-4 drop-shadow-lg">
              di Desa Wanurejo
            </h2>
          </div>

        </div>
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#6b5f47] to-transparent z-20" />
      </section>

      {/* SECTION KOMODITAS */}
      <section
        className="bg-cover bg-center py-16 px-4 min-h-screen transition-all duration-500 ease-in-out"
        style={{ backgroundImage: "url('/AgroBg.png')" }}
      >
        <div className="container mx-auto">
          {!selected ? (
            <>
              {/* HEADLINE SECTION */}
              <div className="flex justify-center mb-12"
              data-aos="fade-up">
                <div className="w-full max-w-2xl bg-[#8f867e] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-4xl shadow-lg text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    5 Komoditas Unggul
                  </h2>
                </div>

              </div>

              {/* KOMODITAS GRID */}
              <div className="flex justify-center flex-wrap gap-8" data-aos="fade-up">
              {komoditas.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  {/* Nama komoditas di atas kotak */}
                  <p className="text-center font-semibold text-xl text-[#6d6158]">{item.nama}</p>

                  {/* Kotak gambar */}
                  <div
                  onClick={() => setSelected(item)}
                  className="cursor-pointer border-2 border-gray-300 hover:border-[#6d6158] rounded-xl overflow-hidden transition-transform hover:scale-105 bg-white/90 shadow-md
                    w-[160px] h-[280px]
                    sm:w-[180px] sm:h-[320px]
                    md:w-[200px] md:h-[360px]
                    lg:w-[220px] lg:h-[400px]
                    flex items-center justify-center">

                  <Image
                    src={item.gambar}
                    alt={item.nama}
                    width={220}
                    height={340}
                    className="object-cover w-full h-full"
                  />
                </div>


                </div>
                ))}
              </div>
              <div className="max-w-4xl mx-auto text-center mt-24"
                data-aos="fade-up">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                  Selamat datang di Desa Wanurejo
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  Tempat di mana ladang bukan sekadar hamparan hijau, tapi sumber kehidupan dan inspirasi.
                  Dari jamur tiram, bunga telang, kacang tanah, hingga jagung dan lada, setiap komoditas
                  menyimpan cerita dan cita rasa. <br className="hidden md:block" />
                  Ayo bertani sambil berwisata—nikmati agrowisata yang edukatif dan menghidupkan alam desa.
                </p>

              </div>
            </>
          ) : (
            <div className="animate-fade-in flex flex-col items-center gap-10"
            data-aos="fade-up">
              {/* DETAIL TITLE */}
              <div className="w-full max-w-2xl bg-[#8f867e] text-white px-6 py-4 rounded-full shadow-lg text-center">
                <h2 className="text-4xl font-bold">{selected.nama}</h2>
                <p className="italic text-2xl mt-1">
                  ({selected.ilmiah.italic}
                  {selected.ilmiah.normal && (
                    <span className="not-italic"> {selected.ilmiah.normal}</span>
                  )})
                </p>
              </div>


              {/* DETAIL CONTENT */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <Image
                  src={selected.gambar}
                  alt={selected.nama}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-[#8f867e] object-cover w-[450px] h-[450px] shadow-lg"
                />

                <div className="w-full md:w-[700px] min-h-[350px] bg-[#8f867e]/95 text-white p-8 rounded-3xl shadow-2xl flex flex-col justify-between">
                  <p className="leading-relaxed text-justify">{selected.deskripsi}</p>

                  <button
                    onClick={() => setSelected(null)}
                    className="mt-6 self-start bg-white text-[#8f867e] font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition"
                  >
                    Kembali
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
