import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import buildingImg from "./img/office.png";
import cert1 from "./img/cert1.png";
import cert2 from "./img/cert2.png";
import cert3 from "./img/cert3.png";

const certificates = [cert1, cert2, cert3];

function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className="overflow-hidden rounded-2xl ring-2 ring-sky-400/70">
        <img
          src={buildingImg}
          alt="Saka Tekstil"
          className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
        />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl lg:text-[32px]">
          Saka Tekstil – для тех, кто хочет быстро и комфортно получать
          текстильную продукцию{" "}
          <span className="text-[#cba15d]">высокого качества</span> по
          адекватной стоимости
        </h2>

        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 text-slate-600">
            <span className="mt-2 h-[2px] w-6 shrink-0 bg-[#cba15d]" />
            <span>
              Предоставляем возможность закупки широкого ассортимента:
              футер, кулирка, джакрат, флис, рибана и многое другое...
            </span>
          </li>
          <li className="flex gap-4 text-slate-600">
            <span className="mt-2 h-[2px] w-6 shrink-0 bg-[#cba15d]" />
            <span>
              Наша компания является надежным поставщиком и производителем
              турецкого трикотажного полотна по всему миру
            </span>
          </li>
        </ul>

        <Link to="/catalog" className="group flex w-fit items-center gap-3 rounded-full bg-[#cba15d] px-6 py-3 font-medium text-white transition-colors hover:bg-[#b78e4c]">
          Смотреть каталог
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

function CertificatesCarousel() {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scrollByCard = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 300;
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="mt-16">
      <h3 className="mb-8 text-xl font-semibold text-slate-900 sm:text-2xl">
        Saka Tekstil дорожит своей репутацией
      </h3>

      <div className="relative">
        
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {certificates.map((src, i) => (
            <div
              key={i}
              data-card
              className="w-[80%] shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 shadow-sm sm:w-[45%] lg:w-[31%]"
            >
              <img
                src={src}
                alt={`Сертификат ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default function Cert() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Hero />
      <CertificatesCarousel />
    </div>
  );
}
