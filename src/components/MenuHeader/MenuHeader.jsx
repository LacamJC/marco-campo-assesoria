import { HashLink } from 'react-router-hash-link';
import styles from './MenuHeader.module.css';
function MenuHeader() {
    return (
        <>
            <nav className={`${styles.navbar} d-flex gap-3`}>
                <a href="/#sobre" className={`${styles.navbar__item}`}>Sobre</a>
                <a href="/#atuacao" className={`${styles.navbar__item}`}>Áreas de Atuação</a>
                <a href="/#contato" className={`${styles.navbar__item}`}>Contato</a>
                <a href="/#contato" className={`btn ${styles.button}`}>Entrar em contato</a>
                <HashLink smooth to="" className={`${styles.navbar__item}`}>

                </HashLink>
            </nav>
        </>
    )
}

export default MenuHeader;