import styles from './NewsPage.module.css';

export function NewsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Шукрулло — Новости и статьи</h1>
      <p className={styles.text}>Макет: design/Shukrullo-news.png</p>
    </div>
  );
}
