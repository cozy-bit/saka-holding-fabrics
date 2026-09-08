import { useModal } from '../../../context/ModalContext';
import styles from './CallbackModal.module.css';

export function CallbackModal() {
  const { closeModal } = useModal();

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={closeModal} className={styles.closeBtn}>×</button>
        <h1 className={styles.title}>Али — Заказать звонок</h1>
        <p className={styles.text}>Всплывающее окно обратного звонка</p>
      </div>
    </div>
  );
}
