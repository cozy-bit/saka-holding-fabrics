import { useModal } from '../../../context/ModalContext';
import styles from './PriceListModal.module.css';

export function PriceListModal() {
  const { closeModal } = useModal();

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={closeModal} className={styles.closeBtn}>×</button>
        <h1 className={styles.title}>Али — Заказать прайс-лист</h1>
        <p className={styles.text}>Макет: design/Ali-pricelist-modal.png</p>
      </div>
    </div>
  );
}
