import styles from './MenuHeader.module.css';
function MenuHeader() {
    return (
        <>
            <nav className={`${styles.navbar} d-flex gap-3`}>
                <a href="#" className={`${styles.navbar__item}`}>Sobre</a>
                <a href="#" className={`${styles.navbar__item}`}>Serviços</a>
                <a href="#" className={`${styles.navbar__item}`}>Contato</a>
                <a href="#" className={`btn ${styles.button}`}>Entrar em contato</a>
            </nav>
        </>
    )
}

export default MenuHeader;