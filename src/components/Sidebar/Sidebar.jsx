import styles from './Sidebar.module.css';
import logo from '../../assets/images/logo.png'
import { useContext } from 'react';
import { SiteInfoContext } from '../../context/SiteInfoContext';
import { HashLink } from 'react-router-hash-link';

function Sidebar({ isOpen, onClose }) {
  const { redesSociais, menuItems } = useContext(SiteInfoContext)

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
          {menuItems[0].map(({ id, label, href, icon }) => {

            return <li key={id}>
              <HashLink smooth to={href} onClick={onClose} className={styles['menu-link']}>
                <i className={`bi ${icon} me-2`}></i> {label}
              </HashLink>
            </li>

          })}
        </ul>

        {/* Separador */}
        <hr className={styles.separator} />

        <div className={styles.brandSection}>
          <img src={logo} alt="Logo" className={styles.brandLogo} />
          <p className={styles.brandName}>Marco Campos</p>
          <div className={styles.socialIcons}>
            {
              redesSociais.map(item => (
                <a
                  key={item.name}  // chave única
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={item.icon}></i>
                </a>
              ))
            }
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
