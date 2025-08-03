import DidukungOleh from "@/components/Footer";
import Image from "next/image";

export default function InformasiPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
          <img
            src="/Tipu.JPG"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-2 bg-black/30 px-4 text-center">
            <p className="text-white text-2xl sm:text-3xl md:text-5xl drop-shadow-lg" data-aos="fade-up">
              waspada <span className="font-bold">komunitas palsu,</span>
            </p>
            <p className="text-white text-2xl sm:text-3xl md:text-5xl drop-shadow-lg" data-aos="fade-up">
              <span className="font-bold">UMKM</span> jangan tertipu!
            </p>
          </div>
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0e2877] to-transparent z-20" />
        </section>


      {/* Section 1: Informasi Penipuan */}
      <section className="relative w-full px-6 py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ornamenInformasi.png"
            alt="Ornamen Awan"
            className="w-full h-full object-cover object-top opacity-100 pointer-events-none"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-14"
          data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            <span className="bg-[#0e2877] text-white px-6 py-2 rounded-4xl shadow-lg">
              Penipuan komunitas
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
        {[
          { src: "/pelatihan_umkm.jpg", label: "PELATIHAN UMKM PALSU" },
          { src: "/pendataan_usaha.jpg", label: "SURVEI/PENDATAAN USAHA" },
          { src: "/skema_ponzi.webp", label: "SKEMA PONZI" },
          { src: "/investasi_bodong.webp", label: "INVESTASI BODONG" },
        ].map(({ src, label }) => (
          <div
            key={label}
            className="bg-white border-[3px] border-[#2b4379] rounded-xl shadow-md p-3 sm:p-4 flex flex-col items-center"
          >
            <div className="w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-lg max-h-64 sm:max-h-80">
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="mt-3 text-center font-semibold text-sm sm:text-base text-[#2b4379] leading-snug">
              {label}
            </p>
          </div>
        ))}
      </div>


        </div>
      </section>

      {/* Section Reuse Template */}
      {[
        {
        title: "Pelatihan UMKM Palsu",
        img: "/PelatihanUmkm.png",
        text: (
          <p className="text-justify text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
            <span className="font-bold">Modus penipuan pelatihan UMKM palsu</span>{" "}
            marak terjadi melalui pesan WhatsApp atau media sosial yang mengatasnamakan lembaga resmi seperti Kementerian atau Dinas terkait. 
            Pelaku menyebarkan surat undangan palsu untuk mengikuti pelatihan UMKM gratis yang disertai janji bantuan modal usaha. 
            Surat atau pesan tersebut tampak meyakinkan karena dilengkapi logo instansi dan bahasa yang formal.
            <span className="font-bold"> Ciri umum</span> penipuan ini adalah desakan waktu (misalnya <span className="font-bold italic">&quot;pendaftaran terakhir hari ini&quot;</span>) 
            dan narasi bahwa korban “terpilih” tanpa seleksi. Setelah data diserahkan, pelaku langsung menghilang dan sulit dilacak. 
            Karena itu, penting bagi pelaku UMKM untuk tidak sembarang membagikan data pribadi, serta selalu memverifikasi informasi melalui 
            sumber resmi atau perangkat desa terdekat.
          </p>
        ),
      },
      {
        title: "Survei Pendataan Usaha",
        img: "/SurveiPendataan.png",
        text: (
          <p className="text-justify text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
            <span className="font-bold">Modus penipuan pelatihan UMKM palsu</span>{" "}
            marak terjadi melalui pesan WhatsApp atau media sosial yang mengatasnamakan lembaga resmi seperti Kementerian atau Dinas terkait. 
            Pelaku menyebarkan surat undangan palsu untuk mengikuti pelatihan UMKM gratis yang disertai janji bantuan modal usaha. 
            Surat atau pesan tersebut tampak meyakinkan karena dilengkapi logo instansi dan bahasa yang formal.
            <span className="font-bold"> Ciri umum</span> penipuan ini adalah desakan waktu (misalnya <span className="font-bold italic">&quot;pendaftaran terakhir hari ini&quot;</span>) 
            dan narasi bahwa korban “terpilih” tanpa seleksi. Setelah data diserahkan, pelaku langsung menghilang dan sulit dilacak. 
            Karena itu, penting bagi pelaku UMKM untuk tidak sembarang membagikan data pribadi, serta selalu memverifikasi informasi melalui 
            sumber resmi atau perangkat desa terdekat.
          </p>
        ),
      },
      {
        title: "Investasi Bodong",
        img: "/InvestBodong.png",
        text: (
          <p className="text-justify text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
            <span className="font-bold">Penipuan Survei/Pendataan Usaha</span> palsu sering dilakukan dengan mengatasnamakan instansi pemerintah seperti dinas koperasi atau lembaga survei resmi. 
            Pelaku menghubungi pelaku UMKM melalui WhatsApp atau telepon dan mengaku sedang melakukan verifikasi untuk bantuan usaha atau pembaruan NIB. 
            Dengan foto profil profesional, pelaku meminta korban mengisi form atau memberikan data pribadi seperti NIK, nomor rekening, kode OTP, hingga PIN.
            <span className="font-bold"> Ciri-ciri</span> penipuan ini antara lain ajakan yang mendesak (misalnya <span className="font-bold italic">&quot;data harus dikirim hari ini juga&quot;</span>), 
            sumber tidak jelas, serta permintaan data sensitif melalui chat pribadi. Setelah data diberikan, pelaku menghilang dan data disalahgunakan untuk pinjaman online atau penipuan lainnya.
            <span className="font-bold"> Untuk mencegahnya</span>, pastikan selalu memverifikasi ke perangkat desa atau dinas terkait sebelum memberikan informasi apa pun. 
            Jangan mudah tergoda dengan janji bantuan cepat dan hindari klik link dari nomor tidak dikenal.
          </p>
        ),
      },
      {
        title: "Skema Ponzi",
        img: "/SkemaPonzi.png",
        text: (
          <p className="text-justify text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4">
            <span className="font-bold">Penipuan Investasi Bodong</span> merupakan modus penipuan yang menjanjikan imbal hasil besar dalam waktu singkat dengan risiko minim. 
            <span className="font-bold"> Ciri-cirinya</span> meliputi janji keuntungan tidak masuk akal (seperti 10–20% per bulan), tidak adanya transparansi informasi atau izin resmi dari OJK, 
            serta tekanan psikologis agar korban segera mentransfer dana tanpa sempat melakukan riset. Setelah dana masuk, pelaku sering menghilang dan pencairan keuntungan pun tidak pernah terjadi.
            <span className="font-bold"> Untuk mencegahnya</span>, pastikan selalu memverifikasi legalitas investasi di situs resmi OJK, hindari tergiur iming-iming keuntungan instan, 
            dan konsultasikan setiap tawaran dengan pihak tepercaya.
          </p>
        ),
      },
      ].map(({ title, img, text }, idx) => (
        <section
          key={idx}
          className="relative w-full px-6 py-24 bg-white overflow-hidden"
        >
               <Image
                    src="/infoKiri.png"
                    alt="Ornamen Kiri"
                    width={250}
                    height={250}
                    className="absolute bottom-10 left-4 md:left-8 opacity-100 pointer-events-none z-0"
                />
                <div className="absolute top-24 right-0 z-0 h-[120%] hidden sm:block">
                    <Image
                    src="/infoKanan.png"
                    alt="Ornamen Kanan"
                    width={300}
                    height={800}
                    className="object-contain opacity-60 pointer-events-none"
                    />
                </div>
            
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-12 px-4"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
          <span className="bg-[#0e2877] text-white px-4 sm:px-6 py-2 rounded-3xl shadow-md inline-block">
            {title}
          </span>
        </h2>

        <img
          src={img}
          alt={title}
          className="w-full max-w-4xl sm:max-w-5xl md:max-w-6xl h-auto object-contain"
        />

        <div className="text-center text-sm sm:text-base md:text-lg text-black leading-relaxed max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-2 sm:px-4">
          {text}
        </div>
      </div>

        </section>
      ))}
      <section className="relative w-full px-6 py-24 bg-white overflow-hidden">
      {/* Ornamen */}

      {/* Konten */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-0">
        <h2 className="text-2xl md:text-3xl font-bold bg-[#0e2877] text-white inline-block px-6 py-3 rounded-lg shadow-md mb-8"
          data-aos="fade-up">
            LAPORKAN KESINI!
        </h2>

        {/* Box OJK */}
        <div className="border-2 border-[#0e2877] rounded-4xl p-6 space-y-4 text-sm md:text-base text-gray-800"
          >
            <p dataaos="fade-up">
            Jika kamu mengalami penipuan investasi atau pinjaman online ilegal, segera laporkan ke:
            </p>
            <p dataaos="fade-up">
            📧 Email: <strong>waspada.investasi@ojk.go.id</strong><br />
            📱 WhatsApp: <strong>081-157-157-157</strong><br />
            🌐 Website: <strong>sipasti.ojk.go.id</strong>
            </p>
        </div>

        {/* Divider langsung menempel */}
        <div className="h-6 flex justify-center items-center"
        dataaos="fade-up">
            <div className="border-l-2 border-dashed border-[#0e2877] h-full"></div>
        </div>

        {/* Box Kominfo */}
        <div className="border-2 border-[#0e2877] rounded-4xl p-6 space-y-4 text-sm md:text-base text-gray-800"
        dataaos="fade-up">
            <p>
            Jika kamu menemukan platform, website, atau aplikasi ilegal, segera laporkan ke:
            </p>
            <p>
            📧 Email: <strong>aduankonten@kominfo.go.id</strong><br />
            🌐 Website: <strong>aduankonten.id</strong>
            </p>
        </div>
        </div>
    </section>
    </div>
  );
}
