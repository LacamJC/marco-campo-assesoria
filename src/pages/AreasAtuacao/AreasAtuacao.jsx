import { Link } from 'react-router-dom';
import styles from './AreasAtuacao.module.css';
import { useContext } from 'react';
import { SiteInfoContext } from '../../context/SiteInfoContext';
import { slugify } from '../../utils/slugify';
import { HashLink } from 'react-router-hash-link';



function AreasAtuacao() {
    const { areas } = useContext(SiteInfoContext);
    return (
        <>
            <section className={`${styles.atuacaoSection} py-5`} id="atuacao">
                <div className="container">
                    <h2 className={styles.title}>Nossas Áreas de Atuação</h2>

                    {/* Seção Pessoa Física */}
                    <section className="mb-5">
                        <h3 className={styles.subtitle}>Serviços Para Você (Pessoa Física)</h3>
                        <div className="row">
                            {areas
                                .filter(area => area.tipo === 'PF')
                                .map(({ id, title, description, icon }) => {
                                    const linkPath = `/atuacao/${slugify(id)}#${slugify(title)}`;
                                    return (
                                        <div key={id} className="col-sm-4 mb-4">
                                            <HashLink smooth to={linkPath} className={styles.cardLink}>
                                                <div className={styles.card}>
                                                    <i className={`bi ${icon} ${styles.icon}`}></i>
                                                    <h4 className={styles.cardTitle}>{title}</h4>
                                                    <p className={styles.cardDescription}>{description}</p>
                                                    <button className={styles.button}>Entenda Mais</button>
                                                </div>
                                            </HashLink>
                                        </div>
                                    );
                                })}
                        </div>
                    </section>

                    {/* Seção Pessoa Jurídica */}
                    <section>
                        <h3 className={styles.subtitle}>Serviços Para Sua Empresa (Pessoa Jurídica)</h3>
                        <div className="row">
                            {areas
                                .filter(area => area.tipo === 'PJ')
                                .map(({ id, title, description, icon }) => {
                                    const linkPath = `/atuacao/${slugify(id)}#${slugify(title)}`;
                                    return (
                                        <div key={id} className="col-sm-4 mb-4">
                                            <HashLink smooth to={linkPath} className={styles.cardLink}>
                                                <div className={styles.card}>
                                                    <i className={`bi ${icon} ${styles.icon}`}></i>
                                                    <h4 className={styles.cardTitle}>{title}</h4>
                                                    <p className={styles.cardDescription}>{description}</p>
                                                    <button className={styles.button}>Entenda Mais</button>
                                                </div>
                                            </HashLink>
                                        </div>
                                    );
                                })}
                        </div>
                    </section>
                </div>
            </section>

        </>


    );
}

export default AreasAtuacao;
