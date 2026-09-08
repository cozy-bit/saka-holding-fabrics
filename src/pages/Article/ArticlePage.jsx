import styles from './ArticlePage.module.css';

export function ArticlePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Шукрулло — Страница статьи</h1>
      <p className={styles.text}>Макет: design/Shukrullo-article.png</p>
    </div>
  );
}
