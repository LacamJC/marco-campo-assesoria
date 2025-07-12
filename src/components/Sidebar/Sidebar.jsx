import styles from './Sidebar.module.css';

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ''}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <ul className="list-unstyled p-3">
          <li>
            <a href="#home" onClick={onClose} className={styles['menu-link']}>
              <i className="bi bi-house-door me-2"></i> Home
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={onClose} className={styles['menu-link']}>
              <i className="bi bi-info-circle me-2"></i> Sobre
            </a>
          </li>
          <li>
            <a href="#contato" onClick={onClose} className={styles['menu-link']}>
              <i className="bi bi-envelope me-2"></i> Contato
            </a>
          </li>
        </ul>

      </nav>
    </>
  );
}

export default Sidebar;
