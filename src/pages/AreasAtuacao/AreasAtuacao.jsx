import { Link } from 'react-router-dom';
import styles from './AreasAtuacao.module.css';
import { useContext } from 'react';
import { SiteInfoContext } from '../../context/SiteInfoContext';
import { slugify } from '../../utils/slugify';



function AreasAtuacao() {
    const { areas } = useContext(SiteInfoContext);
    return (
        <section className={`${styles.atuacaoSection} py-5 `} id="atuacao">
            <div className="container">
                <h2 className={styles.title}>Nossas Áreas de Atuação</h2>
                <div className="row">
                    {areas.map(({ id, title, description, icon }) => {
                        const linkPath = `/atuacao/${slugify(title)}`;
                        return (
                            <div key={id} className="col-md-6 col-lg-3 mb-4">
                                <Link to={linkPath} className={styles.cardLink}>
                                    <div className={styles.card}>
                                        <i className={`bi ${icon} ${styles.icon}`}></i>
                                        <h3 className={styles.cardTitle}>{title}</h3>
                                        <p className={styles.cardDescription}>{description}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

    );
}

export default AreasAtuacao;
