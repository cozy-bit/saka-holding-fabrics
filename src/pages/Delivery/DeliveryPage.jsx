import styles from "./DeliveryPage.module.css";

const products = [
  {
    id: 1,
    name: "Кулинарная гладь",
    price: "11,4$",
    size: "180 см",
    image: "/fabric-blue.jpg",
  },
  {
    id: 2,
    name: "Кулинарная гладь",
    price: "13$",
    size: "180 см",
    image: "/fabric-white.jpg",
  },
  {
    id: 3,
    name: "Кулинарная гладь",
    price: "12,24$",
    size: "180 см",
    image: "/fabric-orange.jpg",
  },
  {
    id: 4,
    name: "Кулинарная гладь",
    price: "13,84$",
    size: "180 см",
    image: "/fabric-green.jpg",
  },
];

function DeliveryPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <div className={styles.breadcrumbs}>
          ГЛАВНАЯ <span>›</span> ДОСТАВКА И ОПЛАТА
        </div>

        <div className={styles.layout}>

          <section className={styles.content}>

            <h1>Способы доставки товара</h1>

            <article className={styles.deliveryCard}>
              <div>
                <h2>Самовывоз</h2>

                <p>
                  Со склада по адресу: г. Москва, ул.
                  Верхняя поле, 43 стр. 1
                </p>

                <p>
                  <strong>График работы:</strong>
                  <br />
                  ПН–ПТ 09:30–17:00
                  <br />
                  СБ 10:30–16:00
                </p>
              </div>

              <div className={styles.boxes}>
                <div className={styles.box} />
                <div className={styles.box} />
                <div className={styles.box} />
              </div>
            </article>

            <article className={styles.transportCard}>
              <h2>Доставка до транспортной компании</h2>

              <p>
                Бесплатная доставка до терминала ТК Деловые
                Линии, Байкал-Сервис, ПЭК, СДЭК, Медлайн Транс.
              </p>

              <p>
                Перевозка от отправителя ТК до получателя
                оплачивается по тарифам ТК.
              </p>

              <div className={styles.car}>
                <div className={styles.carBody}>
                  СДЭК
                </div>
                <div className={styles.wheelOne} />
                <div className={styles.wheelTwo} />
              </div>
            </article>

            <article className={styles.deliveryCard}>
              <h2>Доставка по Москве</h2>

              <p>
                Стоимость доставки уточняйте у менеджера.
              </p>
            </article>

            <section className={styles.payment}>
              <h2>Оплата товара</h2>

              <p className={styles.subtitle}>
                Наиболее удобный для вас способ оплаты товара
                вы можете согласовать с менеджером
              </p>

              <div className={styles.paymentCard}>
                <div>
                  <h3>Безналичный расчет</h3>

                  <p>
                    Безналичный расчет осуществляется
                    <br />
                    для юридических лиц.
                  </p>
                </div>

                <div className={styles.bankCard}>
                  <span>Meridian</span>
                  <strong>VISA</strong>
                </div>
              </div>

              <div className={styles.infoBlock}>
                <div>
                  <h2>
                    Более подробную информацию
                    <br />
                    можно уточнить по телефону
                  </h2>

                  <p>
                    Звоните сейчас:
                    <strong>+7 (999) 999-99-99</strong>
                  </p>
                </div>

                <div className={styles.socials}>
                  <a href="#" aria-label="Telegram">
                    TG
                  </a>

                  <a href="#" aria-label="WhatsApp">
                    WA
                  </a>

                  <span>
                    Среднее время ответа
                    <br />
                    <strong>5 минут</strong>
                    </span>
                </div>
              </div>
            </section>
          </section>

          <aside className={styles.questions}>
            <h2>
              Возникли вопросы
              <br />
              по доставке?
            </h2>

            <p>
              Оставьте заявку и мы свяжемся с вами
              <br />
              в ближайшее время
            </p>

            <form>
              <input
                type="text"
                placeholder="Ваше имя"
              />

              <input
                type="tel"
                placeholder="+7 (___) ___-__-__"
              />

              <button type="submit">
                Отправить
                <span>→</span>
              </button>
            </form>

            <small>
              Нажимая на кнопку вы даете свое согласие
              на обработку персональных данных.
            </small>
          </aside>
        </div>

        <section className={styles.recent}>
          <div className={styles.recentHeader}>
            <h2>Недавно просмотренные</h2>

            <div className={styles.arrows}>
              <button>←</button>
              <button>→</button>
            </div>
          </div>

          <div className={styles.products}>
            {products.map((product) => (
              <article
                className={styles.product}
                key={product.id}
              >
                <div className={styles.productImage}>
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className={styles.productContent}>
                  <h3>{product.name}</h3>

                  <div className={styles.productPrice}>
                    <strong>{product.price}</strong>
                    <span>{product.size}</span>
                  </div>

                  <button>
                    Подробнее
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

export default DeliveryPage;