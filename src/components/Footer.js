import Image from "next/image";

const DidukungOleh = () => {
  const sponsors = [
    { src: "/sponsor/pepsodent.png", alt: "Pepsodent" },
    { src: "/sponsor/bpd.png", alt: "Bank BPD DIY", adjust: true },
    { src: "/sponsor/nay.png", alt: "Nayo" },
    { src: "/sponsor/ss.png", alt: "Spesial Sambal" },
  ];

  return (
    <div className="w-full mt-40 mb-40 text-center">
      <h2 className="text-2xl font-bold mb-6">Didukung Oleh</h2>

      {/* Full width tanpa pembatas */}
      <div className="bg-orange-400 rounded-3xl py-8 flex flex-wrap justify-center gap-8">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className={`w-[160px] h-[60px] flex items-center justify-center ${
              sponsor.adjust ? "-mt-3" : ""
            }`}
          >
            <Image
              src={sponsor.src}
              alt={sponsor.alt}
              width={300}
              height={200}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DidukungOleh;
