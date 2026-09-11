import final from "./../img/final.jpg";
import falgs from "./../img/flags.jpg";
import inside from "./../img/inside.jpg";
import logo_nifgt from "./../img/logo_night.jpg";
import night from "./../img/night.jpg";
import prom from "./../img/prom.jpg";

export default function Boxes() {
  const newsItems = [
    {
      image: prom,
      title: "Пример текста для заголовка новости",
      description:
        "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
      date: "31.03.2022",
    },
    {
      image: night,
      title: "Пример текста для заголовка новости",
      description:
        "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
      date: "31.03.2022",
    },
    {
      image: inside,
      title: "Пример текста для заголовка новости",
      description:
        "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
      date: "31.03.2022",
    },
    {
      image: logo_nifgt,
      title: "Пример текста для заголовка новости",
      description:
        "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
      date: "31.03.2022",
    },
    {
      image: falgs,
      title: "Пример текста для заголовка новости",
      description:
        "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
      date: "31.03.2022",
    },
    {
      image: final,
      title: "Пример текста для заголовка новости",
      description:
        "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
      date: "31.03.2022",
    },
  ];

  return (
    <div className="w-[60vw] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 justify-items-center">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden h-[400px] w-full max-w-[360px] group cursor-pointer transition-transform duration-300 transform hover:scale-105"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="font-bold text-lg leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {item.description}
              </p>
              <p className="text-sm text-gray-400">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
