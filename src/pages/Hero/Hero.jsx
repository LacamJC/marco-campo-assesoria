import { HashLink } from 'react-router-hash-link';
import styles from './Hero.module.css';
import image from '../../assets/images/brainstrom.jpg'
function Hero() {
    return (
        <div className={`${styles.background}`}>
            <section className={`container mt-4  ${styles.hero} ${styles.control_section}`} id='hero'>
                <div className="row align-items-center">
                    {/* Coluna esquerda */}
                    <div className="col-md-6">
                        <h1 className={styles.title}>M CAMPOS ASSESSORIA</h1>
                        <h3 className={styles.subtitle}>SOLUÇÕES JURÍDICAS PARA EMPRESAS</h3>
                        <p className={styles.paragraph}>
                            Consultoria estratégica, preventiva e contenciosa para garantir a segurança jurídica e o crescimento sustentável da sua empresa.
                        </p>
                        <p className={styles.paragraph}>
                            Atuação especializada em contratos, proteção patrimonial, planejamento societário, LGPD e muito mais — com atendimento presencial ou 100% digital.
                        </p>
                        <HashLink smooth to="/#contato" className={`${styles.button} mb-3`} style={{ textDecorationLine: 'none' }}>
                            Solicite um diagnóstico gratuito
                        </HashLink>
                    </div>
                    {/* Coluna direita */}
                    <div className="col-md-6 p-0">
                        <img src={image} alt="Hero" className={styles.image} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
