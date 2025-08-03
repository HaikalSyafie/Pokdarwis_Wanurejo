import Image from "next/image";
import StuntingStats from "@/components/StuntingStats";

export default function kesehatanPage() {
  return (
    <div className="w-full">

     <section className="relative w-full h-screen">
        <img
          src="/KesehatanBG.jpeg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 space-y-2"
        data-aos="fade-up">
          <p className="text-white text-2xl sm:text-3xl md:text-5xl text-center px-4 drop-shadow-lg">
                bersama <span className="font-bold">Lawan Stunting,</span>
          </p>
          <p className="text-white text-2xl sm:text-3xl md:text-5xl text-center px-4 drop-shadow-lg">
            <span className="font-bold">menuju</span> Generasi Sehat
          </p>
        </div>
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#ffffff] to-transparent z-20" />
      </section>

           
   {/* === SECTION 1: 3 Poin Pertama === */}
  <section className="relative w-full px-6 py-24 bg-white overflow-hidden">
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
    <section className="relative w-full px-6 py-24 bg-white overflow-hidden">
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
     <div data-aos="fade-up">
        <StuntingStats />
      </div>
    </section>
    <div className="relative z-10 flex flex-col items-center justify-center gap-14 max-w-7xl w-full mx-auto pt-10">
      {/* Judul */}
      <h2 className="text-xl md:text-5xl font-bold text-center"
      data-aos="fade-up">
        <span className="bg-[#0e2877] text-white px-6 py-2 rounded-2xl shadow-lg">
          Penyebab Terjadinya Stunting
        </span>
      </h2>

    {/* Spasi lebih jauh dari judul */}
    <div className="h-6" />

        {/* Konten 1 - 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full"
        data-aos="fade-up">
          {/* Point 1 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center w-full">
              Kekurangan Gizi Kronis
            </h3>
            <img
              src="/Kelaparan.png"
              alt="Icon Gizi"
              className="w-40 h-40 mb-4 object-contain"
            />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              Asupan gizi yang tidak mencukupi dalam jangka panjang, baik selama masa kehamilan maupun setelah anak lahir, merupakan penyebab utama stunting. Kekurangan zat gizi penting seperti protein, zat besi, seng, vitamin A, dan yodium dapat menghambat pertumbuhan tubuh dan otak anak.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center w-full">
              Kurangnya Asupan Gizi Selama Kehamilan
            </h3>
            <img
              src="/Kehamilan.png"
              alt="Icon Kehamilan"
              className="w-40 h-40 mb-4 object-contain"
            />
            <p className="text-black text-sm sm:text-xl leading-relaxed text-justify">
              Gizi ibu yang buruk saat hamil berdampak langsung pada perkembangan janin. Bayi yang lahir dengan berat badan rendah atau prematur lebih rentan mengalami stunting.
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center w-full">
              Jarang ASI Eksklusif
            </h3>
            <img
              src="/Asi.png"
              alt="Icon ASI"
              className="w-40 h-40 mb-4 object-contain"
            />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              ASI (Air Susu Ibu) eksklusif selama enam bulan pertama kehidupan sangat penting karena mengandung semua zat gizi yang dibutuhkan bayi untuk tumbuh dan berkembang secara optimal.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="relative w-full px-6 py-24 bg-white overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center gap-14 max-w-7xl w-full mx-auto pt-10 px-6"
      data-aos="fade-up">
        {/* Konten 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          {/* Poin 4 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center">
              Sanitasi dan Akses Air Bersih yang Buruk
            </h3>
            <img src="/infeksi.png" alt="Icon Sanitasi" className="w-40 h-40 mb-4" />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              Anak yang sering sakit, terutama diare dan infeksi saluran pernapasan, mengalami gangguan penyerapan gizi dan kehilangan nutrisi penting. Lingkungan yang tidak bersih juga meningkatkan risiko penyakit.
            </p>
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify mt-4">
              Anak yang sering sakit memiliki risiko mengalami stunting <span className="font-bold">1,65 kali lebih tinggi</span> dibandingkan anak yang sehat. Penyakit infeksi yang sering diderita meliputi <span className="font-medium">cacingan, ISPA (Infeksi Saluran Pernapasan Atas),</span> dan <span className="font-medium">diare</span>.
            </p>
          </div>

          {/* Poin 5 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center">
              Pola Asuh yang Tidak Tepat
            </h3>
            <img src="/sanitasi.png" alt="Icon Pola Asuh" className="w-40 h-40 mb-4" />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              Jangan menyepelekan kekurangan air yang tidak bersih karena akan berdampak langsung pada kesehatan. Jika tidak higienis, pertumbuhan janin bisa terhambat dan kesehatan ibu pun terancam.
            </p>
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify mt-4">
              Kurangnya akses terhadap air bersih untuk minum, mandi, mencuci tangan, dan memasak juga memperbesar peluang penularan penyakit. Anak yang sering sakit, terutama akibat infeksi pencernaan, akan mengalami gangguan penyerapan nutrisi di usus dan kehilangan zat gizi penting, sehingga gizi yang diberikan tidak dapat dimanfaatkan secara optimal oleh tubuh.
            </p>
          </div>

          {/* Poin 6 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center">
              Akses Layanan Kesehatan Terbatas
            </h3>
            <img src="/pelayanan.png" alt="Icon Kesehatan" className="w-40 h-40 mb-4" />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              Pemeriksaan kehamilan yang tidak rutin, imunisasi yang tidak lengkap, dan minimnya pemantauan pertumbuhan anak membuat masalah gizi tidak terdeteksi sejak dini.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section className="relative w-full px-6 py-24 bg-white overflow-hidden" >
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
    <div className="relative z-10 flex flex-col items-center justify-center gap-14 max-w-7xl w-full mx-auto pt-10">
      {/* Judul */}
      <h2 className="text-xl md:text-5xl font-bold text-center"
      data-aos="fade-up">
        <span className="bg-[#0e2877] text-white px-6 py-2 rounded-2xl shadow-lg">
          Cara mencegah stunting
        </span>
      </h2>

    {/* Spasi lebih jauh dari judul */}
    <div className="h-6" />

        {/* Konten 1 - 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full"
        data-aos="fade-up">
          {/* Poin 1 */}
          {/* Point 1 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center w-full">
              Penuhi gizi ibu selama kehamilan
            </h3>
            <img
              src="/PenuhiGizi.png"
              alt="Icon Gizi"
              className="w-40 h-40 mb-4 object-contain"
            />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              Ibu hamil harus mengonsumsi makanan bergizi seimbang yang kaya protein, zat besi, kalsium, asam folat, dan vitamin lainnya. Pemeriksaan kehamilan secara rutin juga penting untuk memantau pertumbuhan janin.
              <br /><br />
              Gizi yang cukup dan seimbang berperan penting dalam proses pembentukan organ tubuh janin, pertumbuhan otak, serta mencegah berbagai komplikasi selama kehamilan. Jika ibu hamil kekurangan gizi, maka risiko melahirkan bayi dengan berat badan lahir rendah (BBLR), lahir prematur, atau gangguan pertumbuhan janin, termasuk stunting, akan meningkat.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center w-full">
              Pemberian ASI Eklusif Selama 6 Bulan
            </h3>
            <img
              src="/PemberianAsi.png"
              alt="Icon Kehamilan"
              className="w-40 h-40 mb-4 object-contain"
            />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              ASI adalah sumber gizi terbaik untuk bayi. Memberikan ASI eksklusif tanpa tambahan makanan atau minuman lain selama 6 bulan sangat penting untuk pertumbuhan optimal dan kekebalan tubuh bayi.
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center w-full">
              Berikan MP-ASI Bergizi dan Aman Setelah 6 Bulan
            </h3>
            <img
              src="/MakanPendamping.png"
              alt="Icon ASI"
              className="w-40 h-40 mb-4 object-contain"
            />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              Setelah 6 bulan, bayi perlu mendapatkan Makanan Pendamping ASI (MP-ASI) yang kaya gizi, cukup kalori, dan disiapkan secara higienis. Makanan harus mengandung karbohidrat, protein, lemak sehat, vitamin, dan mineral.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section className="relative w-full px-6 py-24 bg-white overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center gap-14 max-w-7xl w-full mx-auto pt-10 px-6">
        {/* Konten 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full"
        data-aos="fade-up">
          
          {/* Poin 4 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center">
              Rajin Imunisasi dan Pantau Tumbuh Kembang Anak 
            </h3>
            <img src="/Imunisasi.png" alt="Icon Sanitasi" className="w-40 h-40 mb-4" />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              Imunisasi membantu mencegah penyakit yang bisa menghambat pertumbuhan anak. Selain itu, pemantauan berat badan, tinggi badan, dan lingkar kepala secara rutin di posyandu atau fasilitas kesehatan membantu deteksi dini risiko stunting.
            </p>
          </div>

          {/* Poin 5 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center">
              Edukasi dan Peran Keluarga 
            </h3>
            <img src="/Kebersihan.png" alt="Icon Pola Asuh" className="w-40 h-40 mb-4" />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              Orang tua, terutama ibu, perlu dibekali informasi mengenai pola makan sehat, perawatan anak, dan pentingnya gizi. Dukungan dari keluarga dan lingkungan sekitar juga sangat membantu dalam perawatan anak.
              <br /><br />
              Dukungan dari seluruh anggota keluarga—ayah, kakek-nenek, bahkan saudara—juga penting dalam menciptakan lingkungan yang sehat dan mendukung pertumbuhan anak secara menyeluruh. Dengan keterlibatan aktif keluarga, risiko stunting dapat ditekan secara signifikan.
            </p>

          </div>

          {/* Poin 6 */}
          <div className="flex flex-col items-center px-4">
            <h3 className="text-xl font-bold text-white bg-[#0492d0] rounded-2xl px-4 py-2 mb-3 text-center">
              Akses Layanan Kesehatan Terbatas
            </h3>
            <img src="/cucitangan.png" alt="Icon Kesehatan" className="w-40 h-40 mb-4" />
            <p className="text-black text-sm  sm:text-xl leading-relaxed text-justify">
              Gunakan jamban sehat, cuci tangan pakai sabun, dan pastikan air yang digunakan bersih. Ini mencegah infeksi berulang seperti diare yang mengganggu penyerapan gizi.
              <br /><br />
              Rendahnya sanitasi dan kebersihan lingkungan akan memicu gangguan saluran pencernaan yang membuat tubuh terganggu untuk melawan infeksi. Semakin lama menderita infeksi, maka risiko stunting akan semakin meningkat.
            </p>

          </div>
        </div>
      </div>
    </section>
    <div className="bg-white text-gray-800 px-4 md:px-10 py-10 max-w-5xl mx-auto mt-20">
      {/* Judul Utama */}
      <h2 className="text-xl md:text-5xl font-bold text-center mb-12"
      data-aos="fade-up">
        <span className="bg-[#0e2877] text-white px-6 py-2 rounded-2xl shadow-lg ">
          Penyebab Terjadinya Stunting
        </span>
      </h2>

      {/* Karbohidrat */}
      <section className="mb-12"
      data-aos="fade-up">
        <Image
          src="/karbohidrat.png"
          alt="Karbohidrat"
          width={600}
          height={400}
          className="mx-auto rounded-lg shadow-md mb-12"
        />
        <h2 className="text-sm  sm:text-xl font-bold mb-4 text-center"
        data-aos="fade-up">1. Karbohidrat</h2>
        <p className="text-justify"data-aos="fade-up">
          Karbohidrat adalah sumber energi utama yang sangat dibutuhkan oleh
          tubuh, terutama bagi anak-anak yang sedang dalam masa pertumbuhan.
          Sekitar 45–55% dari total kebutuhan energi harian anak sebaiknya
          berasal dari karbohidrat. Karbohidrat terbagi menjadi dua jenis, yaitu
          karbohidrat kompleks dan karbohidrat sederhana.
        </p>
        <p className="mt-2 text-justify"data-aos="fade-up">
          Karbohidrat kompleks lebih disarankan karena memberikan energi secara
          bertahap dan membuat anak merasa kenyang lebih lama. Contohnya adalah
          nasi, roti, kentang, dan pasta.
        </p>
        <p className="mt-2 text-justify"data-aos="fade-up">
          Sementara itu, karbohidrat sederhana adalah jenis yang cepat diserap
          tubuh dan bisa memberikan energi secara instan, tetapi tidak bertahan
          lama. Konsumsi karbohidrat sederhana sebaiknya dibatasi, maksimal
          kurang dari 10% dari total kalori harian. Contoh makanan yang
          mengandung karbohidrat sederhana adalah gula pasir, permen, kue manis,
          dan sirup.
        </p>
        <p className="mt-2 text-justify"data-aos="fade-up">
          Dengan memilih jenis karbohidrat yang tepat, anak bisa mendapatkan
          energi yang cukup untuk aktivitas sehari-hari dan tumbuh kembangnya
          akan lebih optimal.
        </p>
      </section>

      {/* Protein */}
      <section className="mb-12">
        <Image
          src="/proteins.png"
          alt="Protein"
          width={600}
          height={400}
          className="mx-auto rounded-lg shadow-md mb-12"
          data-aos="fade-up"
        />
        <h2 className="text-xl font-bold mb-4 text-center"data-aos="fade-up">2. Protein</h2>
        <p className="text-justify"data-aos="fade-up">
          Protein adalah zat gizi yang sangat penting untuk anak, terutama dalam
          masa pertumbuhan. Protein membantu tubuh membentuk sel-sel baru yang
          sehat dan memperbaiki jaringan tubuh yang rusak. Selain itu, protein
          juga mendukung fungsi organ tubuh agar bisa bekerja dengan baik.
        </p>
        <p className="mt-2 text-justify"data-aos="fade-up">
          Anak yang mengalami stunting sangat membutuhkan asupan protein yang
          cukup dan seimbang untuk memperkuat daya tahan tubuh, sehingga tidak
          mudah sakit. Protein juga berperan penting dalam membentuk dan
          menguatkan tulang, yang sangat dibutuhkan untuk mengejar pertumbuhan
          tinggi badan.
        </p>
        <p className="mt-2 text-justify"data-aos="fade-up">
          Kebutuhan protein harian anak adalah sekitar 10 hingga 20 persen dari
          total kalori per hari. Misalnya, jika kebutuhan kalori anak 1.500
          kkal, maka sekitar 150–300 kkal-nya harus berasal dari protein, atau
          sekitar 37–75 gram protein per hari (karena 1 gram protein = 4 kkal).
        </p>
        <p className="mt-2 text-justify"data-aos="fade-up">
          Sumber protein terbagi menjadi dua, yaitu protein hewani dan nabati.
          Protein hewani berasal dari daging, ikan, telur, ayam, dan susu, yang
          umumnya lebih lengkap kandungan gizinya. Sedangkan protein nabati bisa
          diperoleh dari tahu, tempe, kacang-kacangan, dan biji-bijian.
          Kombinasi keduanya sangat baik untuk menunjang tumbuh kembang anak
          secara optimal.
        </p>
      </section>

      {/* Lemak */}
      <section className="mb-12">
        <Image
          src="/Lemak.png"
          alt="Lemak"
          width={600}
          height={400}
          className="mx-auto rounded-lg shadow-md mb-12"
          data-aos="fade-up"
        />
        <h2 className="text-xl font-bold mb-4 text-center"data-aos="fade-up">3. Lemak</h2>
        <p className="text-justify"data-aos="fade-up">
          Lemak merupakan salah satu zat gizi penting yang dibutuhkan oleh anak,
          terutama bagi anak yang mengalami stunting. Lemak berfungsi sebagai
          sumber energi cadangan yang membantu anak tetap aktif dan tumbuh
          dengan baik.
        </p>
        <p className="mt-2 text-justify"data-aos="fade-up">
          Selain sebagai sumber energi, lemak juga berperan besar dalam
          perkembangan otak, terutama pada masa-masa awal kehidupan, karena otak
          anak sebagian besar tersusun dari lemak. Oleh karena itu, asupan lemak
          yang cukup sangat penting untuk mendukung kecerdasan dan fungsi otak
          anak secara optimal.
        </p>
        <p className="mt-2 text-justify"data-aos="fade-up">
          Lemak juga memiliki fungsi lain, yaitu sebagai bahan pembentuk sel dan
          hormon, yang sangat dibutuhkan dalam proses tumbuh kembang anak. Pada
          anak-anak, sekitar 30 hingga 45% atau 38–56 gram dari total kebutuhan
          kalori harian. Semakin kecil usia anak, seperti bayi dan balita,
          semakin besar pula kebutuhan lemaknya.
        </p>
        <p className="mt-2 text-justify"data-aos="fade-up">
          Sumber lemak yang baik untuk anak antara lain adalah minyak ikan,
          alpukat, susu, keju, kacang-kacangan, dan minyak nabati sehat seperti
          minyak zaitun. Lemak yang sehat dan cukup sangat membantu dalam
          mengejar pertumbuhan anak yang mengalami stunting.
        </p>
      </section>
      <section className="mb-12">
        <Image
          src="/vitamins.png" // Ganti dengan path ke gambar Vitamin
          alt="Vitamin"
          width={600}
          height={400}
          className="mx-auto rounded-lg shadow-md mb-12"
          data-aos="fade-up"
        />
        <div>
          <h2 className="text-xl font-bold mb-4 text-center"data-aos="fade-up">4. Macam-macam Vitamin </h2>
          <p>
            Anak yang mengalami stunting memerlukan asupan vitamin yang cukup dan seimbang untuk
            mendukung proses pemulihan pertumbuhan dan menjaga kesehatan tubuhnya secara menyeluruh.
            Berikut vitamin yang dibutuhkan:
          </p>
          <div className="space-y-3 mt-4"data-aos="fade-up">
            <p>
              <strong>A. Vitamin A, C, dan E</strong><br />
              - Vitamin A: Menjaga kesehatan mata dan memperkuat sistem kekebalan tubuh. Sumber: wortel, bayam, hati, susu, dan telur.<br />
              - Vitamin C: Membantu penyembuhan luka dan penyerapan zat besi. Sumber: jeruk, kiwi, paprika, stroberi, brokoli.<br />
              - Vitamin E: Antioksidan yang melindungi sel tubuh dari kerusakan. Sumber: kacang-kacangan, minyak nabati, biji-bijian.
            </p>
            <p>
              <strong>B. Vitamin B kompleks (B1, B2, B6, B12)</strong><br />
              Membantu metabolisme tubuh dan mengubah makanan menjadi energi. Sumber: daging, ayam, telur, susu, kacang-kacangan, sayuran hijau.
            </p>
            <p>
              <strong>C. Vitamin D</strong><br />
              Mendukung penyerapan kalsium dan pembentukan tulang. Sumber: sinar matahari, ikan berlemak (salmon, sarden), hati sapi, kuning telur, susu yang difortifikasi.
            </p>
          </div>
        </div>
      </section>

      {/* Section Mineral */}
      <section className="mb-12">
        <Image
          src="/mineral.png" 
          alt="Mineral"
          width={600}
          height={400}
          className="mx-auto rounded-lg shadow-md mb-12"
          data-aos="fade-up"
        />
        <div data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4 text-center">5. Mineral</h2>
          <p>
            Mineral membantu berbagai proses penting dalam tubuh, dari pembentukan tulang hingga perkembangan otak. Anak stunting memerlukan asupan mineral sebagai bagian dari pemulihan.
          </p>
          <div className="space-y-3 mt-4">
            <p>
              a. Kalsium: Membantu pembentukan tulang dan gigi. Sumber: susu, keju, ikan bertulang lunak, sayuran hijau.
            </p>
            <p>
              b. Zinc (Seng): Penting untuk penyembuhan luka dan pertumbuhan sel. Sumber: daging merah, seafood, kacang-kacangan, biji-bijian.
            </p>
            <p>
              c. Selenium: Antioksidan yang melindungi sel tubuh dan mendukung fungsi imun. Sumber: kacang Brazil, ikan tuna, telur, daging ayam.
            </p>
            <p>
              d. Tembaga: Membantu pembentukan sel darah merah dan penyerapan zat besi. Sumber: hati, kacang mete, cokelat hitam.
            </p>
            <p>
              e. Kalium (Potasium): Menjaga keseimbangan cairan tubuh dan fungsi otot. Sumber: pisang, kentang, tomat, bayam.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
