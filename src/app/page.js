'use client';
import Image from "next/image";
import { Poppins } from 'next/font/google'
import { useEffect } from 'react';
import Link from "next/link";
import 'aos/dist/aos.css';
import AOS from 'aos';


  

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins"
});

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className={`${poppinsFont.variable} font-sans`}>

      {/* SECTION HERO */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        <img
          src="/BerandaBG.jpeg"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        <div className="relative z-10 text-center space-y-2 px-4">
          <h1
            className="text-white text-2xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg"
            data-aos="fade-up"
          >
            Selamat Datang,
          </h1>
          <h2
            className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Desa Wisata Wanurejo
          </h2>
        </div>

        {/* GRADIENT BAWAH */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-white to-transparent z-20" />

        {/* Floating Info Boxes */}
        <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 z-30 w-full px-4">
        <div className="max-w-[1100px] mx-auto flex flex-wrap justify-center gap-4 sm:gap-6">
          {/* Box 1 */}
          <div
            className="flex items-center gap-4 bg-white rounded-3xl px-4 py-6 shadow-md w-full sm:w-[48%] md:w-[45%]"
            data-aos="fade-up"
          >
            <img
              src="/adwi.png"
              alt="ADWI"
              className="w-[20vw] max-w-[80px] sm:max-w-[100px] h-auto object-contain"
            />
            <div className="flex-1 text-left">
              <h3 className="text-[4vw] sm:text-lg md:text-xl font-bold text-gray-800 mb-1 uppercase">
                Juara 1
              </h3>
              <p className="text-blue-900 font-semibold text-[3vw] sm:text-base leading-snug">
                Anugerah Desa Wisata Indonesia (ADWI) 2024
              </p>
            </div>
          </div>

        </div>
      </div>


      </section>

      {/* SECTION TENTANG */}
      <section className="relative w-full pt-[180px] pb-28 bg-white overflow-hidden">
        {/* Ornamen kiri */}
        <Image
          src="/ornamen_kesehatan.png"
          alt="Ornamen kiri"
          width={250}
          height={250}
          className="absolute bottom-10 left-4 md:left-8 opacity-60 pointer-events-none"
        />
        {/* Ornamen kanan */}
        <div className="absolute top-24 right-0 z-0 h-[120%] hidden sm:block">
          <Image
            src="/ornamen_kesehatan.png"
            alt="Ornamen Kanan"
            width={300}
            height={800}
            className="object-contain opacity-60"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 z-10 relative">
          <div className="text-left">
            <h2 className="bg-[#243C84] text-white font-bold text-xl sm:text-2xl md:text-3xl rounded-full px-6 py-2 mb-8 inline-block"
            data-aos="fade-up">
              Tentang
            </h2>
          </div>
          <div className="flex flex-col items-center text-center space-y-6">
            <Image src="/logo.png" alt="Logo DEWI" width={250} height={250} className="mb-2 sm:mb-4" />
            <p className="font-poppins text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-4xl text-gray-800"
            data-aos="fade-up">
              Lambang resmi POKDARWIS Umbul Tirto adalah logo <strong>“Desa Wisata Wanurejo”</strong> yang memiliki makna filosofis mendalam. Logo ini menggambarkan sosok wajah seorang putri yang mengenakan mahkota, sebagai <strong>simbol keanggunan dan kearifan lokal</strong>. Elemen visual dalam logo terdiri dari sembilan bunga teratai yang melambangkan <strong>keharmonisan dan keseimbangan</strong>, serta siluet candi yang merepresentasikan <strong>kedekatan budaya dan sejarah desa dengan kawasan Borobudur</strong>. Di bagian bawah, tersemat tulisan <strong>“DEWI WANU”</strong>, akronim dari “Desa Wisata Wanurejo”, yang <strong>mempertegas identitas dan semangat pelestarian budaya setempat</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION VISI MISI */}
      <section className="relative w-full py-28 bg-white text-black overflow-hidden">
        {/* Ornamen kiri */}
        <Image
          src="/ornamen_kesehatan.png"
          alt="Ornamen kiri"
          width={250}
          height={250}
          className="absolute bottom-10 left-4 md:left-8 opacity-60 pointer-events-none"
        />
        {/* Ornamen kanan */}
        <div className="absolute top-24 right-0 z-0 h-[120%] hidden sm:block">
          <Image
            src="/ornamen_kesehatan.png"
            alt="Ornamen Kanan"
            width={300}
            height={800}
            className="object-contain opacity-60"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-12 px-4">
          {/* Visi */}
          <div>
            <div className="inline-block bg-[#243C84] text-white text-xl sm:text-2xl md:text-3xl font-semibold rounded-full px-8 py-2 mb-6"
            data-aos="fade-up">
              Visi
            </div>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed"
            data-aos="fade-up">
              Terwujudnya kesejahteraan ekonomi masyarakat melalui bidang pariwisata budaya dan kriya yang berkualitas berkelanjutan, dan mempunyai daya saing, berdasar pemberdayaan masyarakat.
            </p>
          </div>

          {/* Misi */}
          <div>
            <div className="inline-block bg-[#243C84] text-white text-xl sm:text-2xl md:text-3xl font-semibold rounded-full px-8 py-2 mb-6"
            data-aos="fade-up">
              Misi
            </div>
            <ol className="text-left space-y-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto list-decimal list-inside leading-relaxed"
            data-aos="fade-up">
              <li>Terwujudnya pariwisata budaya dan kriya berbasis kerakyatan.</li>
              <li>Terwujudnya profesionalisme pengelolaan kepariwisataan yang mengedepankan budaya adi luhung.</li>
              <li>Pelayanan prima di bidang kepariwisataan dengan harapan wisatawan segera datang kembali.</li>
              <li>Aksi sapta pesona dalam semua lapisan masyarakat desa wisata Wanurejo.</li>
              <li>Pemerataan kunjungan wisata agar dampak ekonomi dinikmati masyarakat secara langsung.</li>
            </ol>
          </div>
        </div>
      </section>
    <section className="relative w-full py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Ornamen kiri */}
        <Image
          src="/ornamen_kesehatan.png"
          alt="Ornamen kiri"
          width={250}
          height={250}
          className="absolute bottom-10 left-4 md:left-8 opacity-60 pointer-events-none"
        />
        {/* Ornamen kanan */}
        <div className="absolute top-24 right-0 z-0 h-[120%] hidden sm:block">
          <Image
            src="/ornamen_kesehatan.png"
            alt="Ornamen Kanan"
            width={300}
            height={800}
            className="object-contain opacity-60"
          />
        </div>
        {/* Judul */}
        <div className="inline-block bg-[#243C84] text-white text-xl sm:text-2xl md:text-3xl font-semibold rounded-full px-8 py-2 mb-6"
        data-aos="fade-up">
          Struktural
        </div>
        

        {/* Gambar Struktur */}
        <div className="relative w-full h-auto"
        data-aos="fade-up">
          <Image
            src="/Bagan.png"
            alt="Bagan Struktural Desa Wanurejo"
            width={1200}
            height={800}
            className="w-full h-auto object-contain rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
    <section className="relative w-full py-28 bg-white overflow-hidden">
        {/* Grid 2 Kolom Atas */}
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center"
          data-aos="fade-right"
        >
          {/* Peta Batas Administrasi */}
          <div className="text-center">
            <Image
              src="/Batas_administrasi_wanurejo.png"
              alt="Batas Administrasi"
              width={300}
              height={300}
              className="mx-auto"
            />
            <p className="mt-4 text-gray-700 font-medium">
              Batas Administrasi Desa Wanurejo
            </p>
            <Link
              href="https://www.google.com/maps/d/u/0/embed?mid=1eKSPP7cXlLPu0zU9c7B2sxsJYFzy2Iw&ehbc=2E312F&noprof=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-[#1c3c88] text-white px-6 py-3 rounded-full font-bold shadow hover:bg-[#162d67] transition"
            >
              Click Here!
            </Link>
          </div>

          {/* Peta Fasilitas Umum */}
          <div className="text-center" data-aos="fade-right">
            <Image
              src="/Fasum.png"
              alt="Fasilitas Umum"
              width={300}
              height={300}
              className="mx-auto"
            />
            <p className="mt-4 text-gray-700 font-medium">
              Fasilitas umum desa Wanurejo
            </p>
            <Link
              href="https://www.google.com/maps/d/edit?mid=18shnCpzic2j09QttmwGmnZep4_SzA5k&usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-[#1c3c88] text-white px-6 py-3 rounded-full font-bold shadow hover:bg-[#162d67] transition"
            >
              Click Here!
            </Link>
          </div>
        </div>

        {/* Elemen Tengah di Bawah - 1 Kolom */}
        <div
          className="mt-20 text-center max-w-2xl mx-auto px-6"
          data-aos="fade-right"
        >
          <Image
            src="/Umkm_pariwisata.png"
            alt="Peta Interaktif"
            width={300}
            height={300}
            className="mx-auto"
          />
          <p className="mt-4 text-gray-700 font-medium">
              UMKM dan Pariwisata Desa Wanurejo
          </p>
          <Link
            href="https://www.google.com/maps/d/edit?mid=1fxdrdHpQwtBWlmebkAhhr3_ClvTFCfE&usp=sharing" // ganti dengan link peta utama kamu
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#1c3c88] text-white px-6 py-3 rounded-full font-bold shadow hover:bg-[#162d67] transition"
          >
            Click Here!
          </Link>
        </div>
      </section>



    </div>
  );
}
