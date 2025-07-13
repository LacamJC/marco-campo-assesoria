import { useState } from 'react';
import styles from './Contato.module.css';

const contatos = [
    {
        id: 1,
        label: 'Telefone',
        value: '(11) 99999-9999',
        href: 'tel:+5511999999999',
        icon: 'bi-telephone-fill',
    },
    {
        id: 2,
        label: 'Email',
        value: 'contato@exemplo.com',
        href: 'mailto:contato@exemplo.com',
        icon: 'bi-envelope-fill',
    },
    {
        id: 3,
        label: 'Endereço',
        value: 'Rua Exemplo, 123 - São Paulo, SP',
        icon: 'bi-geo-alt-fill',
        cta: 'Ver no mapa',
        href: 'google.maps.com',
    },
];

function Contato() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const telefoneWhatsApp = '5511999999999'; // seu número no formato internacional

    const enviarWhatsApp = (e) => {
        e.preventDefault();

        if (!nome.trim() || !mensagem.trim()) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
        const url = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(url, '_blank');
    };

    return (
        <div className={styles.background_dividido} id='contato'>
            <div className={styles.contentWrapper}>
                <h2 className={styles.sectionTitle}>Entre em contato</h2>

                <div className={styles.cardsContainer}>
                    {contatos.map(({ id, label, value, href, icon, cta }) => (
                        <div key={id} className={styles.card}>
                            <i className={`bi ${icon} ${styles.icon}`}></i>
                            <h3 className={styles.label}>{label}</h3>
                            <p className={styles.description}>{value}</p>
                            {cta ? (
                                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.button}>
                                    {cta}
                                </a>
                            ) : (
                                <button className={styles.button} >
                                    Entre em Contato
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>




    );
}

export default Contato;
