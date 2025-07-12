import { Link } from 'react-router-dom';
import styles from './AreasAtuacao.module.css';

// Função para transformar título em slug URL-friendly
function slugify(text) {
    return text.toLowerCase().replace(/\s+/g, '-');
}

const areas = [
    {
        id: 1,
        title: 'Direito Trabalhista',
        description: 'Assessoria completa em relações trabalhistas, contratos e direitos do trabalhador.',
        icon: 'bi-briefcase-fill',
    },
    {
        id: 2,
        title: 'Direito Civil',
        description: 'Consultoria em contratos, responsabilidades, direitos de família e mais.',
        icon: 'bi-file-earmark-text',
    },
    {
        id: 3,
        title: 'Direito Empresarial',
        description: 'Orientação jurídica para empresas, sociedades e negociações comerciais.',
        icon: 'bi-building',
    },
    {
        id: 4,
        title: 'Direito Penal',
        description: 'Defesa e consultoria em casos criminais e processos penais.',
        icon: 'bi-shield-lock',
    },
];

function AreasAtuacao() {
    return (
        <section className={`container my-5 ${styles.areas}`}>
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
        </section>
    );
}

export default AreasAtuacao;
