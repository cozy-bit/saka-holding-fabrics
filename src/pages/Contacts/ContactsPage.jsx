import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import styles from "./ContactsPage.module.css";

const CONTACT_CARDS = [
  {
    icon: MapPin,
    label: "Адрес",
    lines: ["г.Москва, МКР", "Котельники, ул.", "Яичкин проезд 7"],
  },
  {
    icon: Phone,
    label: "Телефон",
    lines: ["+7 (999) 999-99-99"],
  },
  {
    icon: Mail,
    label: "Почта",
    lines: ["info@mail.ru"],
  },
  {
    icon: Clock,
    label: "График работы",
    lines: ["ПН-ПТ 09:00-18:00", "СБ 10:00-17:00", "ВС Выходной"],
  },
];

const RECENT_PRODUCTS = [
  { id: 1, title: "Кулинарная гладь", price: "11,4$", unit: "180 см", color: "#3E7FB0" },
  { id: 2, title: "Кулинарная гладь", price: "13$", unit: "180 см", color: "#D9D9D9" },
  { id: 3, title: "Кулинарная гладь", price: "122,4$", unit: "180 см", color: "#E8571E" },
  { id: 4, title: "Кулинарная гладь", price: "13,84$", unit: "180 см", color: "#2E6A3F" },
];

export function ContactsPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    // TODO: подключить реальную отправку / API
    console.log("Consultation request:", form);
  }

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.breadcrumbs}>
          <span>Главная</span>
          <span>/</span>
          <span>Контакты</span>
        </div>

        <h1 className={styles.title}>Контакты</h1>

        <section className={styles.contactGrid} aria-label="Контактная информация">
          {CONTACT_CARDS.map(({ icon: Icon, label, lines }) => (
            <div className={styles.infoCard} key={label}>
              <span className={styles.infoCardIcon}>
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <div>
                <span className={styles.infoCardLabel}>{label}</span>
                {lines.map((line, i) => (
                  <p className={styles.infoCardLine} key={i}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className={styles.mapBlock} aria-label="Карта проезда">
          <iframe
            className={styles.mapFrame}
            title="Карта — офис компании"
            src="https://yandex.ru/map-widget/v1/?ll=37.85%2C55.65&z=13"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        <section className={styles.consultBanner}>
          <h2 className={styles.consultTitle}>
            Получите бесплатную консультацию
            <br />
            от нашего специалиста
          </h2>
          <p className={styles.consultSubtitle}>
            Заполните форму ниже и мы свяжемся с вами в ближайшее время
          </p>

          <div className={styles.consultForm}>
            <input
              className={styles.consultInput}
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className={styles.consultInput}
              type="tel"
              name="phone"
              placeholder="+7 (___) ___-__-__"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              className={styles.consultInput}
              type="email"
              name="email"
              placeholder="Ваш E-mail"
              value={form.email}
              onChange={handleChange}
            />
            <button
              type="button"
              className={styles.consultSubmit}
              onClick={handleSubmit}
            >
              Отправить
              <ArrowRight size={16} strokeWidth={2} />
            </button>
          </div> 
          <p className={styles.consultDisclaimer}>
            Нажимая на кнопку вы даёте своё согласие на обработку персональных данных.
            Гарантируем 100% защиту от спама.
          </p>
        </section>

        <section aria-label="Недавно просмотренные товары">
          <div className={styles.recentHeader}>
            <h2 className={styles.recentTitle}>Недавно просмотренные</h2>
          </div>

          <div className={styles.recentRow}>
            <button className={styles.recentNav} aria-label="Предыдущий товар">
              <ChevronLeft size={20} />
            </button>

            <ul className={styles.recentList}>
              {RECENT_PRODUCTS.map((product) => (
                <li className={styles.productCard} key={product.id}>
                  <div
                    className={styles.productImage}
                    style={{ backgroundColor: product.color }}
                  />
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productPrice}>
                    {product.price} <span>{product.unit}</span>
                  </p>
                  <button type="button" className={styles.productCta}>
                    Подробнее
                    <ArrowRight size={14} strokeWidth={2} />
                  </button>
                </li>
              ))}
            </ul>

            <button className={styles.recentNav} aria-label="Следующий товар">
              <ChevronRight size={20} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}