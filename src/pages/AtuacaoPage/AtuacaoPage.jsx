import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { SiteInfoContext } from '../../context/SiteInfoContext';
import styles from './AtuacaoPage.module.css'; // CSS Module para estilo

function AtuacaoPage() {
    const { id } = useParams(); // Captura o ID da URL
    const [item, setItem] = useState(null);
    const { atuacaoInfoAll } = useContext(SiteInfoContext);
    const navigate = useNavigate(); // hook para navegação programática
    useEffect(() => {
        if (atuacaoInfoAll.length > 0) {
            setItem(buscaItem(id));
        }

        // console.log(atuacaoInfoAll)
    }, [id, atuacaoInfoAll[0]]);

    function buscaItem(id) {
        // Garantindo conversão para número na comparação
        return atuacaoInfoAll[0].find(element => element.id === Number(id));
    }

    if (!item) return <p>Carregando...</p>;

    return (
        <main className={styles.container}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
                ← Voltar
            </button>
            <div className={styles.content}>
                <section className={styles.textSection}>
                    <h1 className={styles.title}><i className={item.icon} /> {item.title}</h1>
                    <p className={styles.description}>{item.description}</p>
                    <a href="/contato" className={styles.ctaButton}>
                        Entrar em Contato
                    </a>
                </section>
                <section className={styles.imageSection}>
                    {/* Placeholder de imagem, pode substituir pela real depois */}
                    <img
                        src="https://placehold.co/400x300?text=Imagem+do+serviço"
                        alt={`Imagem ilustrativa para ${item.title}`}
                        className={styles.image}
                    />
                </section>
            </div>
        </main>
    );
}

export default AtuacaoPage;
