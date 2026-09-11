import { useState } from "react";
import styles from "./NewsPage.module.css";

// ---------- НОВОСТИ ----------
const initialNews = [
  {
    id: 1,
    title: "Пример текста для заголовка новости",
    desc: "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
    date: "31.03.2022",
    img: "src/assets/shukrullo/News/01-rectangle-40.png",
  },
  {
    id: 2,
    title: "Пример текста для заголовка новости",
    desc: "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
    date: "31.03.2022",
    img: "src/assets/shukrullo/News/09-rectangle-9.png",
  },
  {
    id: 3,
    title: "Пример текста для заголовка новости",
    desc: "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
    date: "31.03.2022",
    img: "src/assets/shukrullo/News/11-rectangle-11.png",
  },
  {
    id: 4,
    title: "Пример текста для заголовка новости",
    desc: "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
    date: "31.03.2022",
    img: "src/assets/shukrullo/News/08-rectangle-15.png",
  },
  {
    id: 5,
    title: "Пример текста для заголовка новости",
    desc: "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
    date: "31.03.2022",
    img: "src/assets/shukrullo/News/09-rectangle-9.png",
  },
  {
    id: 6,
    title: "Пример текста для заголовка новости",
    desc: "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости",
    date: "31.03.2022",
    img: "src/assets/shukrullo/News/01-rectangle-40.png",
  },
];

// ---------- СТАТЬИ ----------
const allArticles = [
  { id: 1, category: "Выбор материала", title: "Пример текста для заголовка статьи (Выбор материала 1)", date: "31.03.2022", img: "src/assets/shukrullo/News/04-rectangle-44.png" },
  { id: 2, category: "Выбор материала", title: "Пример текста для заголовка статьи (Выбор материала 2)", date: "31.03.2022", img: "src/assets/shukrullo/News/03-rectangle-50.png" },
  { id: 3, category: "Ткани",            title: "Всё о текстуре и плотности современных тканей",            date: "28.03.2022", img: "src/assets/shukrullo/News/02-rectangle-42.png" },
  { id: 4, category: "Ткани",            title: "Натуральные и синтетические волокна: в чем разница",        date: "25.03.2022", img: "src/assets/shukrullo/News/05-rectangle-51.png" },
  { id: 5, category: "Уход",             title: "Правильный уход за текстилем продлевает срок службы",       date: "20.03.2022", img: "src/assets/shukrullo/News/01-rectangle-40.png" },
  { id: 6, category: "Уход",             title: "Как хранить сезонные ткани и одежду дома",                  date: "18.03.2022", img: "src/assets/shukrullo/News/01-rectangle-40.png" },
  { id: 7, category: "Стирка",           title: "Температурные режимы стирки для разных видов тканей",        date: "15.03.2022", img: "src/assets/shukrullo/News/01-rectangle-40.png" },
  { id: 8, category: "Стирка",           title: "Выбор безопасных моющих средств и гелей",                   date: "12.03.2022", img: "src/assets/shukrullo/News/01-rectangle-40.png" },
  { id: 9, category: "Подбор цвета",     title: "Гармония оттенков в интерьере и текстиле",                  date: "10.03.2022", img: "src/assets/shukrullo/News/01-rectangle-40.png" },
  { id: 10, category: "Подбор цвета",    title: "Трендовые палитры сезона для текстильных изделий",          date: "05.03.2022", img: "src/assets/shukrullo/News/01-rectangle-40.png" },
];

const additionalImages = [
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
];

const categories = ["Ткани", "Уход", "Стирка", "Выбор материала", "Подбор цвета"];

export default function NewsPage() {
  const [newsList, setNewsList] = useState(initialNews);
  const [isLoadingNews, setIsLoadingNews] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Выбор материала");

  const handleLoadMoreNews = () => {
    setIsLoadingNews(true);
    setTimeout(() => {
      const newItems = [
        { id: Date.now() + 1, title: "Пример текста для заголовка новости", desc: "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости", date: "31.03.2022", img: additionalImages[0] },
        { id: Date.now() + 2, title: "Пример текста для заголовка новости", desc: "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости", date: "31.03.2022", img: additionalImages[1] },
        { id: Date.now() + 3, title: "Пример текста для заголовка новости", desc: "Здесь будет находиться небольшое триггерное описание или краткий дискриптор новости", date: "31.03.2022", img: additionalImages[2] },
      ];
      setNewsList((prev) => [...prev, ...newItems]);
      setIsLoadingNews(false);
    }, 500);
  };

  const filteredArticles = allArticles.filter((a) => a.category === activeCategory);

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* ============ СЕКЦИЯ 1: НОВОСТИ ============ */}
        <div className={styles.newsSection}>

          {/* Хлебные крошки */}
          <div className={styles.breadcrumbs}>Главная • Новости и статьи</div>

          {/* Hero-баннер */}
          <div className={styles.hero}>
            <img
              src="src/assets/shukrullo/News/01-rectangle-40.png"
              alt="Флаги Saka Tekstil"
              className={styles.heroImg}
            />
            <div className={styles.heroOverlay} />

            <div className={styles.heroContent}>
              <div>
                <h1 className={styles.heroTitle}>
                  Презентация <br />о Saka Tekstil
                </h1>
                <p className={styles.heroText}>
                  Посмотрите презентацию о том, какие возможности открывает
                  компания Saka Tekstil
                </p>
              </div>
              <button
                className={styles.heroBtn}
                onClick={() => alert("Скачивание презентации...")}
              >
                Смотреть презентацию <span>→</span>
              </button>
            </div>
          </div>

          {/* Сетка новостей */}
          <div className={styles.newsGrid}>
            {newsList.map((item) => (
              <article key={item.id} className={styles.newsCard}>
                <img
                  src={item.img}
                  alt={item.title}
                  className={styles.newsCardImg}
                />
                <div className={styles.newsCardOverlay} />

                <div className={styles.newsCardTop}>
                  <div className={styles.newsCardArrow}>↗</div>
                </div>

                <div className={styles.newsCardBottom}>
                  <div>
                    <h3 className={styles.newsCardTitle}>{item.title}</h3>
                    <p className={styles.newsCardDesc}>{item.desc}</p>
                  </div>
                  <div className={styles.newsCardDate}>{item.date}</div>
                </div>
              </article>
            ))}
          </div>

          {/* Кнопка "Показать еще" */}
          <div className={styles.loadMoreWrap}>
            <button
              className={styles.loadMoreBtn}
              onClick={handleLoadMoreNews}
              disabled={isLoadingNews}
            >
              {isLoadingNews ? "Загрузка..." : "Показать еще"}
            </button>
          </div>
        </div>

        {/* ============ СЕКЦИЯ 2: СТАТЬИ ============ */}
        <div className={styles.articlesSection}>
          <div className={styles.articlesHead}>
            <h2 className={styles.articlesTitle}>Статьи</h2>
            <p className={styles.articlesText}>
              Здесь вы найдете полезную информацию о правильном уходе за тканью,
              важные советы от наших специалистов и многое другое
            </p>
          </div>

          {/* Вкладки-фильтры */}
          <div className={styles.tabs}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.tab} ${
                  activeCategory === cat ? styles.tabActive : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Сетка статей */}
          <div className={styles.articlesGrid}>
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <article key={article.id} className={styles.articleCard}>
                  <div className={styles.articleImgWrap}>
                    <img
                      src={article.img}
                      alt={article.title}
                      className={styles.articleImg}
                    />
                  </div>
                  <div className={styles.articleBody}>
                    <div>
                      <span className={styles.articleBadge}>
                        {article.category}
                      </span>
                      <h3 className={styles.articleTitle}>{article.title}</h3>
                      <p className={styles.articleDate}>{article.date}</p>
                    </div>
                    <div className={styles.articleFoot}>
                      <div className={styles.articleArrow}>↗</div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className={styles.empty}>В данной категории пока нет статей.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}