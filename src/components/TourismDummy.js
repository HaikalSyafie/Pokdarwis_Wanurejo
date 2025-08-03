"use client";
import { useRef, useState, useEffect } from "react";

export default function TourismMapDummy() {
  const imgRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [umkmData, setUmkmData] = useState([]);

  // Ambil data UMKM dari backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/umkm");
        const data = await res.json();
        setUmkmData(data);
      } catch (err) {
        console.error("Gagal fetch UMKM:", err);
      }
    };

    fetchData();
  }, []);

  // Update ukuran gambar peta
  useEffect(() => {
    const updateSize = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        setImageSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* PETA + Marker */}
      <div className="relative w-full max-w-[1000px] mx-auto">
        {/* Gambar Peta */}
        <img
          ref={imgRef}
          src="/map_wanurejo.png"
          alt="Peta Wanurejo"
          className="w-full h-auto object-contain"
          onLoad={() => {
            if (imgRef.current) {
              const rect = imgRef.current.getBoundingClientRect();
              setImageSize({ width: rect.width, height: rect.height });
            }
          }}
        />

        {/* Marker dari data UMKM */}
        {imageSize.width > 0 &&
          umkmData.map((item) => {
            const left = (item.koordinat?.x / 100) * imageSize.width;
            const top = (item.koordinat?.y / 100) * imageSize.height;

            return (
              <button
                key={item._id}
                onClick={() => setSelected(item)}
                className="absolute z-10"
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  transform: "translate(-50%, -100%)",
                }}
              >
                <img
                  src={item.marker}
                  alt="Marker"
                  className="w-6 h-8 sm:w-9 sm:h-12 md:w-10 md:h-15 cursor-pointer transition-transform duration-300 origin-bottom hover:-translate-y-1"
                />
              </button>
            );
          })}
      </div>

      {/* Panel Deskripsi */}
      <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[700px] p-4 bg-white rounded-lg shadow text-center text-sm self-center">
        {selected ? (
          <div 
          key={selected._id}
          className="flex flex-col items-center space-y-2"
          data-aos="fade-up"
          
          >
            {/* Gambar */}
            <img
              src={selected.gambar}
              alt={selected.nama}
              className="w-full h-60 object-cover rounded-lg"
            />

            <h2 className="text-lg font-bold">{selected.nama}</h2>

            <p className="text-gray-700 text-justify leading-snug">
              {selected.deskripsi}
            </p>

            {/* Label Bulat */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-[#A4C249] text-white rounded-full text-xs font-medium">
                {selected.dusun}
              </span>
              <span className="px-3 py-1 bg-[#7E4B3A] text-white rounded-full text-xs font-medium">
                {selected.status}
              </span>
            </div>

            {/* Tombol Lokasi */}
            {selected.gmaps && (
              <a
                href={selected.gmaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#27260B] text-white text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                Lihat Lokasi <span className="text-sm">➤</span>
              </a>
            )}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">
            Klik marker pada peta untuk melihat informasi.
          </p>
        )}
      </div>
    </div>
  );
}
