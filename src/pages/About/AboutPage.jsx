import { useState, useEffect, useRef } from "react";
import styles from "./AboutPage.module.css";

// Импорт изображений для корректной сборки Vite и Vercel
import heroFlags from "../../assets/shukrullo/about/02-rectangle-23.png";
import fabricOpenEnd from "../../assets/shukrullo/about/03-rectangle-40.png";
import fabricPenye from "../../assets/shukrullo/about/04-rectangle-41.png";
import fabricExclusive from "../../assets/shukrullo/about/05-rectangle-42.png";
import cert1 from "../../assets/shukrullo/about/06-image-8.png";
import cert2 from "../../assets/shukrullo/about/07-image-9.png";
import cert3 from "../../assets/shukrullo/about/08-image-10.png";
import recent1 from "../../assets/shukrullo/about/09-rectangle-31.png";
import recent2 from "../../assets/shukrullo/about/10-rectangle-33.png";
import recent3 from "../../assets/shukrullo/about/11-rectangle-35.png";
import recent4 from "../../assets/shukrullo/about/12-rectangle-37.png";

// ---------- ДАННЫЕ ----------
const FABRICS = [
  {
    img: fabricOpenEnd,
    title: "Open end",
    text: "Бюджетный трикотаж, имеет ворсистую и шероховатую поверхность из-за коротких волокон.",
  },
  {
    img: fabricPenye,
    title: "Пенье компакт",
    text: "Высшее качество трикотажной ткани, имеет гладкую поверхность без ворсинок.",
  },
  {
    img: fabricExclusive,
    title: "Пенье компакт Плюс-EXCLUSIVE",
    text: "Полотно вяжется американскими нитками и окрашено немецкими красками высшего качества.",
  },
];

const MISSIONS = [
  { icon: "📦", title: "Логистика", text: "Весь ассортимент в наличии на складе в Москве. Вам не потребуется тратить свои ресурсы на доставку ткани из Турции." },
  { icon: "🏭", title: "Производство", text: "Регулярное наличие ткани позволяет не останавливать процесс вашего производства и минимизирует финансовые потери." },
  { icon: "🛡️", title: "Дополнительные материалы", text: "Вместе с товаром мы предоставляем полиэтиленовую упаковку, бесплатную загрузку товара со склада и бесплатные образцы." },
  { icon: "❤️", title: "Лояльность", text: "Наш трикотаж закупают известные бренды. Это позволит вам создать собственный качественный бренд одежды." },
  { icon: "💎", title: "Уникальность", text: "Мы предоставляем клиентам широкую палитру цветов, что позволяет создавать уникальные коллекции одежды." },
  { icon: "⭐", title: "Качество", text: "Наша ткань обрабатывается специальным силиконовым составом, что позволяет ей не терять свои свойства с течением времени." },
];

const CERTS = [
  {
    img: cert1,
  },
  {
    img: cert2,
  },
  {
    img: cert3,
  },
];

const REVIEWS = [
  { name: "Наталья", text: "Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив." },
  { name: "Василий", text: "Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив." },
  { name: "Геннадий", text: "Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив." },
  { name: "Елена", text: "Отличная ткань, быстрая доставка и прекрасный сервис! Очень довольны сотрудничеством." },
];

const RECENT = [
  { price: "11,4$",   img: recent1 },
  { price: "13$",     img: recent2 },
  { price: "122,4$",  img: recent3 },
  { price: "13,84$",  img: recent4 },
];

// ---------- КОМПОНЕНТ ----------
export default function AboutPage() {
  // Слайдер отзывов
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideIntervalRef = useRef(null);
  const totalSlides = REVIEWS.length;

  // Модальное окно
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Сколько слайдов видно в зависимости от ширины
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const getMaxIndex = () => totalSlides - getVisibleCount();

  const nextReview = () => {
    setCurrentSlide((prev) => (prev < getMaxIndex() ? prev + 1 : 0));
  };

  const prevReview = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : getMaxIndex()));
  };

  // Автопрокрутка
  const startAutoSlide = () => {
    stopAutoSlide();
    slideIntervalRef.current = setInterval(nextReview, 3000);
  };
  const stopAutoSlide = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // Управление модалкой
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Заявка отправлена!");
    closeModal();
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* ============ БЛОК 1: Шапка и главное описание ============ */}
        <section className={styles.heroCard}>
          <div className={styles.breadcrumbs}>Главная • О компании</div>
          <h1 className={styles.pageTitle}>О компании</h1>

          <div className={styles.heroRow}>
            <div className={styles.heroImgWrap}>
              <img
                className={styles.heroImg}
                src={heroFlags}
                alt="Флаги Saka Tekstil"
              />
            </div>

            <div className={styles.heroText}>
              <h2 className={styles.heroTitle}>
                Saka Tekstil — производство и продажа турецкого трикотажного полотна
              </h2>
              <p className={styles.paragraph}>Мы осуществляем продажу ткани от рулона и нарезку кашкорсе от 5%–20%.</p>
              <p className={styles.paragraph}>Наша команда следит за трендами в мире трикотажа, мы постоянно обновляем наш ассортимент и регулярно контролируем наличие ткани на складе.</p>
              <p className={styles.paragraph}>Мы предлагаем клиентам различные виды трикотажных полотен высокого качества более, чем в 45 цветовых вариациях.</p>

              {/* Блок статистики с кругами, короной сверху и анимацией вращения */}
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <div className={styles.statCircle}>
                    <span className={styles.crown}>👑</span>
                    <span className={styles.statNum}>30</span>
                  </div>
                  <p className={styles.statText}>Лет на рынке текстиля</p>
                </div>

                <div className={styles.stat}>
                  <div className={styles.statCircle}>
                    <span className={styles.crown}>👑</span>
                    <span className={styles.statNum}>40+</span>
                  </div>
                  <p className={styles.statText}>Ассортимент товаров в наличии</p>
                </div>

                <div className={styles.stat}>
                  <div className={styles.statCircle}>
                    <span className={styles.crown}>👑</span>
                    <span className={styles.statNum}>10 000+</span>
                  </div>
                  <p className={styles.statText}>Клиентов выбирают нашу компанию</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ БЛОК 2: Виды полотен ============ */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>
            Saka Tekstil работает с трикотажными полотнами разного качества:
          </h2>
          <div className={styles.fabricsGrid}>
            {FABRICS.map((f, i) => (
              <article key={i} className={styles.fabricCard}>
                <div className={styles.fabricImgWrap}>
                  <img className={styles.fabricImg} src={f.img} alt={f.title} />
                </div>
                <h3 className={styles.fabricTitle}>{f.title}</h3>
                <p className={styles.fabricText}>{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ============ БЛОК 3: Преимущества ============ */}
        <section className={styles.missionCard}>
          <h2 className={styles.missionTitle}>
            Наша главная задача — не просто предоставить качественную ткань,
            но и оказать каждому заказчику высокий уровень клиентского сервиса
          </h2>

          <div className={styles.missionGrid}>
            {MISSIONS.map((m, i) => (
              <article key={i} className={styles.missionItem}>
                <div className={styles.missionIcon}>{m.icon}</div>
                <h3 className={styles.missionItemTitle}>{m.title}</h3>
                <p className={styles.missionItemText}>{m.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ============ БЛОК 4: Сертификаты ============ */}
        <section className={styles.certsCard}>
          <h2 className={styles.certsTitle}>Saka Tekstil дорожит своей репутацией</h2>
          <div className={styles.certsGrid}>
           {CERTS.map((cert, i) => (
            <article key={i} className={styles.certCard}>
                <div className={styles.certImgWrap}>
                    <img className={styles.certImg} src={cert.img} alt="Сертификат" />
                </div>
            </article>
            ))}
          </div>
        </section>

        {/* ============ БЛОК 5: Слайдер отзывов ============ */}
        <section className={styles.reviewsSection}>
          <div className={styles.reviewsHead}>
            <h2 className={styles.reviewsTitle}>
              Делаем всё для того, чтобы вы остались довольны нашей тканью
            </h2>
            <div className={styles.reviewsNav}>
              <button
                className={styles.arrowBtn}
                onClick={prevReview}
                aria-label="Назад"
              >
                ←
              </button>
              <button
                className={`${styles.arrowBtn} ${styles.arrowBtnGold}`}
                onClick={nextReview}
                aria-label="Вперёд"
              >
                →
              </button>
            </div>
          </div>

          <div
            className={styles.sliderWrap}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div
              ref={sliderRef}
              className={styles.sliderTrack}
              style={{
                transform: `translateX(calc(${currentSlide} * (-100% / ${getVisibleCount()})))`,
              }}
            >
              {REVIEWS.map((r, i) => (
                <article key={i} className={styles.reviewCard}>
                  <p className={styles.reviewText}>{r.text}</p>
                  <span className={styles.reviewName}>{r.name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ БЛОК 6: Недавно просмотренные ============ */}
        <section className={styles.sectionBlock}>
          <h2 className={styles.sectionTitle}>Недавно просмотренные</h2>
          <div className={styles.recentGrid}>
            {RECENT.map((item, i) => (
              <article key={i} className={styles.recentCard}>
                <div className={styles.recentImgWrap}>
                  <img className={styles.recentImg} src={item.img} alt="Ткань" />
                </div>
                <h3 className={styles.recentTitle}>Кулинарная гладь</h3>
                <p className={styles.recentPrice}>{item.price} • 180 см</p>
                <button className={styles.recentBtn} onClick={openModal}>
                  Подробнее →
                </button>
              </article>
            ))}
          </div>
        </section>

      </div>

      {/* ============ МОДАЛЬНОЕ ОКНО ============ */}
      <div
        className={`${styles.modalOverlay} ${
          isModalOpen ? styles.modalOpen : ""
        }`}
        onClick={closeModal}
      >
        <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
          <button className={styles.modalClose} onClick={closeModal}>
            ×
          </button>

          <h3 className={styles.modalTitle}>Заказать прайс-лист и каталог</h3>
          <p className={styles.modalSub}>Оставьте заявку и получите образцы</p>

          <form className={styles.modalForm} onSubmit={handleFormSubmit}>
            <input className={styles.input} type="text"  placeholder="Имя" required />
            <input className={styles.input} type="email" placeholder="E-Mail" required />
            <input className={styles.input} type="tel"   placeholder="+7 (___) ___-__-__" required />
            <input className={styles.input} type="text"  placeholder="Адрес доставки" required />
            <button type="submit" className={styles.submitBtn}>
              Оставить заявку
            </button>
          </form>

          <p className={styles.modalNote}>
            Нажимая на кнопку вы даёте своё согласие на обработку персональных
            данных. Гарантируем! Спама не будет!
          </p>
        </div>
      </div>
    </div>
  );
}