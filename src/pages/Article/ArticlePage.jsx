import styles from './ArticlePage.module.css';
import buildingImg from '../../assets/shukrullo/news/01-rectangle-40.png';
import flagsImg from '../../assets/shukrullo/news/09-rectangle-9.png';

export default function ArticlePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        
        {/* Шапка статьи (Тема, дата и кнопка поделиться) */}
        <div className={styles.articleHeader}>
          <div className={styles.metaInfo}>
            <span className={styles.category}>Тема</span>
            <span className={styles.dot}>•</span>
            <span className={styles.date}>09 января 2022</span>
          </div>
          <button className={styles.shareBtn} aria-label="Поделиться">
            Поделиться <span className={styles.shareIcon}>↗</span>
          </button>
        </div>

        {/* Главный заголовок */}
        <h1 className={styles.title}>
          Здесь будет находиться большой понятный и триггерный заголовок с названием новости
        </h1>

        {/* Текст статьи с картинками */}
        <div className={styles.content}>
          <p className={styles.text}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>

          {/* Блок с картинкой слева и текстом справа */}
          <div className={styles.mediaBlock}>
            <div className={styles.imageWrap}>
              <img 
                src={buildingImg} 
                alt="Здание Saka Holding" 
                className={styles.articleImg} 
              />
            </div>
            <p className={styles.text}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>

          <p className={styles.text}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>

          {/* Блок с текстом слева и картинкой справа */}
          <div className={`${styles.mediaBlock} ${styles.mediaBlockReverse}`}>
            <div className={styles.imageWrap}>
              <img 
                src={flagsImg} 
                alt="Флаги Saka Holding" 
                className={styles.articleImg} 
              />
            </div>
            <p className={styles.text}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}