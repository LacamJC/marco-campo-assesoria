import styles from './Footer.module.css';

const contatos = [
  { label: 'Email', value: 'contato@exemplo.com' },
  { label: 'Telefone', value: '(11) 99999-9999' },
];

const redesSociais = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'bi-linkedin' },
  { name: 'Facebook', url: 'https://facebook.com', icon: 'bi-facebook' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'bi-instagram' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'bi-twitter' },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.column}>
          <h4>Seções</h4>
          <ul className={styles.list}>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
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
    </footer>
  );
}

export default Footer;
