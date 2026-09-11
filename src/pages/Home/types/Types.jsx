import React from "react";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";

const fabrics = [
  { label: "Футер 3-х Нитка", image: img1 },
  { label: "Френч Терри", image: img2 },
  { label: "Вискоза", image: img3 },
  { label: "Пике", image: img4 },
  { label: "Кулинарная гладь", image: img5 },
  { label: "Бифлекс", image: img6 },
];

function FabricCard({ label, image }) {
  return (
    <div className="group relative h-40 overflow-hidden rounded-2xl md:h-48">
      <img
        src={image}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/0" />

      <span className="absolute bottom-4 left-4 rounded-md bg-[#f0dfae] px-3 py-1.5 text-xs font-medium text-[#3a3320] shadow-sm">
        {label}
      </span>
    </div>
  );
}

export default function FabricSelector() {
  return (
    <div className=" w-[80vw] bg-[#161c26] px-6 py-12 md:px-12 mx-auto ">
      <h2 className="mb-8 max-w-md text-2xl font-semibold leading-snug text-white md:text-[28px]">
        Выбирайте из множества разновидностей тканей
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fabrics.map((f) => (
          <FabricCard key={f.label} {...f} />
        ))}
      </div>
    </div>
  );
}
