import styles from './Sidebar.module.css';

const menuItems = [
  { id: 1, label: 'Home', href: '#hero', icon: 'bi-house-door' },
  { id: 2, label: 'Sobre', href: '#sobre', icon: 'bi-info-circle' },
  { id: 3, label: 'Atuação', href: '#atuacao', icon: 'bi bi-back' },
  { id: 4, label: 'Contato', href: '#contato', icon: 'bi-envelope' },
];

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
          {menuItems.map(({ id, label, href, icon }) => (
            <li key={id}>
              <a href={href} onClick={onClose} className={styles['menu-link']}>
                <i className={`bi ${icon} me-2`}></i> {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
