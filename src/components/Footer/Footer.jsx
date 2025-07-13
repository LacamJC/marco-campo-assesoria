import { useContext } from 'react';
import { SiteInfoContext } from '../../context/SiteInfoContext';
import styles from './Footer.module.css';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  const { contatos, redesSociais, menuItems } = useContext(SiteInfoContext)

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.column}>
          <h4>Seções</h4>
          <ul className={styles.list}>
            {
              menuItems[0].map((item) => {
                return <li key={item.icon} ><HashLink smooth to={item.href} >
                  {item.label}</HashLink></li>
              })
            }
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Contato</h4>
          {contatos.map(({ label, value }) => (
            <p key={label}>
              <strong>{label}:</strong> {value}
            </p>
          ))}
        </div>

        <div className={styles.column}>
          <h4>Siga-nos</h4>
          <div className={styles.socialIcons}>
            {redesSociais.map(({ name, url, icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <i className={`bi ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div className={styles.copyright}>
        © {new Date().getFullYear()} Escritório Marco Campo. Todos os direitos reservados.
      </div>
    </footer >
  );
}

export default Footer;
