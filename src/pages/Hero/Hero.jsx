import { HashLink } from 'react-router-hash-link';
import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={`container mt-4  ${styles.hero} ${styles.control_section}`} id='hero'>
            <div className="row align-items-center">
                {/* Coluna esquerda */}
                <div className="col-md-6">
                    <h1 className={styles.title}>MARCO CAMPOS</h1>
                    <h3 className={styles.subtitle}>ASSESORIA JURÍDICA EMPRESARIAL</h3>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco, Lorem ipsum dolor sit amet,
                    </p>
                    <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <HashLink smooth to="/#contato" className={`${styles.button} mb-3`} style={{ textDecorationLine: 'none' }}>
                        Entre em contato</HashLink>
                </div>

                {/* Coluna direita */}
                <div className="col-md-6 p-0">
                    <img src='https://placehold.co/600x400' alt="Hero" className={styles.image} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
