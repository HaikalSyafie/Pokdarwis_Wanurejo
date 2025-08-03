"use client";
import { useState } from "react";

export default function StuntingStats() {
  const [selected, setSelected] = useState("magelang");

  return (
    <div className="px-4 py-10 max-w-5xl mx-auto text-center">
        
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 bg-blue-800 text-white py-4 px-6 rounded-xl inline-block">
        Angka Statistik Stunting<br />Kabupaten Magelang
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
        <button
          onClick={() => setSelected("magelang")}
          className={`w-full md:w-64 py-10 px-4 rounded-xl text-white font-bold text-3xl ${
            selected === "magelang" ? "bg-sky-500" : "bg-sky-400 hover:bg-sky-500"
          } transition`}
        >
          14.6%<br />
          <span className="text-base font-medium">
            Angka Stunting<br />di Kabupaten Magelang
          </span>
        </button>

        <button
          onClick={() => setSelected("jateng")}
          className={`w-full md:w-64 py-10 px-4 rounded-xl text-white font-bold text-3xl ${
            selected === "jateng" ? "bg-sky-500" : "bg-sky-400 hover:bg-sky-500"
          } transition`}
        >
          8.6%<br />
          <span className="text-base font-medium">
            Angka Stunting<br />di Provinsi Jawa Tengah
          </span>
        </button>
      </div>

      {/* Penjelasan */}
      <div className="max-w-3xl mx-auto text-justify text-sm md:text-base leading-relaxed bg-white p-4 md:p-6 rounded-xl shadow">
        {selected === "magelang" ? (
          <>
            <strong>Angka stunting di Kabupaten Magelang</strong> saat ini sebesar <strong>14,6%</strong> masih <strong>di atas target</strong> karena <strong>berada di atas target nasional</strong> yang ditetapkan, yaitu <strong>14%</strong>. 
            Meskipun telah terjadi penurunan dibandingkan tahun-tahun sebelumnya, angka ini menunjukkan bahwa upaya penanganan stunting <strong>masih perlu ditingkatkan</strong>. Stunting merupakan masalah serius karena <strong>dapat berdampak jangka panjang</strong> terhadap kualitas hidup anak, mulai dari terganggunya pertumbuhan fisik hingga perkembangan otak dan kemampuan belajar. 
            Oleh karena itu, intervensi gizi, perbaikan pola asuh, serta peningkatan sanitasi dan layanan kesehatan harus terus diperkuat agar target nasional dapat segera tercapai.
          </>
        ) : (
          <>
            <strong>Angka stunting di Provinsi Jawa Tengah</strong> saat ini sebesar <strong>8,6%</strong>, sudah berada di bawah target nasional 14%. Hal ini menunjukkan bahwa program penurunan stunting di tingkat provinsi berjalan cukup baik. 
            Namun demikian, upaya tetap perlu dilakukan secara merata hingga ke kabupaten/kota, termasuk Magelang, agar seluruh wilayah provinsi dapat mencapai kondisi bebas stunting sesuai target nasional.
          </>
        )}
      </div>
    </div>
  );
}
