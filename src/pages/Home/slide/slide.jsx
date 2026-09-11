import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import girl from "../img/girl.png";

export default function Slider() {
  const slides = [
    {
      id: 1,
      text: "Стильные платки на каждый день",
    },
    {
      id: 2,
      text: "Подчеркни свой стиль",
    },
    {
      id: 3,
      text: "Красота в каждой детали",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="
        w-[90vw]
        max-w-[1400px]
        mx-auto
        my-6 sm:my-8 lg:my-10
        bg-[linear-gradient(145deg,#19242F_50%,#243442_100%)]
        rounded-xl
        overflow-hidden

        flex
        flex-col
        md:flex-row

        min-h-[600px]
        md:min-h-[420px]
        lg:min-h-[460px]
      "
    >
      <div
        className="
          relative
          w-full
          md:w-[60%]
          lg:w-[65%]

          flex
          items-center

          px-4
          sm:px-8
          md:px-6
          lg:px-12

          py-8
          md:py-6
        "
      >
        <div className="relative w-full">
          <div className="overflow-hidden rounded-xl">
            <div
              className="
                flex
                transition-transform
                duration-500
                ease-out
              "
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="
                    w-full
                    flex-shrink-0

                    min-h-[220px]
                    sm:min-h-[250px]
                    md:min-h-[280px]
                    lg:min-h-[320px]

                    flex
                    items-center
                    justify-center

                    text-center

                    px-10
                    sm:px-14
                    md:px-12
                    lg:px-16

                    text-white

                    text-2xl
                    sm:text-3xl
                    md:text-3xl
                    lg:text-4xl

                    font-bold
                  "
                >
                  {slide.text}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            aria-label="Предыдущий слайд"
            className="
              absolute
              left-1
              sm:left-2
              top-1/2
              -translate-y-1/2

              hover:bg-white
              hover:text-black

              text-white

              p-2
              sm:p-3

              rounded-full

              transition
              duration-200

              z-10
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Следующий слайд"
            className="
              absolute
              right-1
              sm:right-2
              top-1/2
              -translate-y-1/2

              hover:bg-white
              hover:text-black

              text-white

              p-2
              sm:p-3

              rounded-full

              transition
              duration-200

              z-10
            "
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Слайд ${index + 1}`}
                className={`
                  w-5
                  sm:w-7
                  h-1
                  rounded-full

                  transition-all
                  duration-300

                  ${index === current ? "bg-gray-200" : "bg-gray-600"}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className="
          w-full
          md:w-[40%]
          lg:w-[35%]

          h-[300px]
          sm:h-[380px]
          md:h-auto

          flex
          items-end
          justify-center

          px-4
          sm:px-8
          md:px-4
          lg:px-8

          pt-6
          md:pt-0
        "
      >
        <img
          src={girl}
          alt="Girl"
          className="
            w-full
            max-w-[350px]
            md:max-w-none

            h-full

            object-cover

            rounded-xl
          "
        />
      </div>
    </div>
  );
}
