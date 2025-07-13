import { useState } from 'react';
import styles from './Contato.module.css';
import { Link } from 'react-router-dom';

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
    },
];

const areasAtuacao = [
    'Direito Civil',
    'Direito Trabalhista',
    'Direito Empresarial',
    'Direito Tributário',
];

export default function Contato() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [selecionadas, setSelecionadas] = useState([]);
    const [aceitoTermos, setAceitoTermos] = useState(false);

    const telefoneWhatsApp = '5511999999999'; // seu número no formato internacional

    function toggleCheckbox(area) {
        setSelecionadas(prev =>
            prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
        );
    }

    const enviarWhatsApp = (e) => {
        e.preventDefault();

        if (!nome.trim()) {
            alert('Por favor, preencha todos o campo nome.');
            return;
        }
        if (!aceitoTermos) {
            alert('Para enviar mensagem, aceite os termos e condições de uso das informações');
            return;
        }

        // Monta a lista de áreas selecionadas em texto
        const areasTexto = selecionadas.length > 0
            ? `${selecionadas.join(', ')}.\n`
            : '';

        var texto = `Olá, meu nome é ${nome}.\nPreciso de serviços relacionados a ${areasTexto}` + (mensagem ? `\nObservações: ${mensagem}` : '');

        const dataTimestamp = Date.now();
        const dataObj = new Date(dataTimestamp);

        const dia = String(dataObj.getDate()).padStart(2, '0');
        const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // mês começa do 0
        const ano = dataObj.getFullYear();

        const hora = String(dataObj.getHours()).padStart(2, '0');
        const minutos = String(dataObj.getMinutes()).padStart(2, '0');

        const dataFormatada = `${dia}/${mes}/${ano}, às ${hora}:${minutos}`;

        texto += `\nData da solicitação: ${dataFormatada}`;


        const url = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(texto)}`;

        alert(texto)
        // window.open(url, '_blank');
    };

    return (
        <section className={styles.contatoSection} id="contato">
            <h2 className={styles.sectionTitle}>Entre em contato</h2>

            <div className={styles.infoColumn}>
                <p className={styles.infoIntro}>
                    Para dúvidas, orçamentos ou consultas, entre em contato conosco pelos canais abaixo:
                </p>

                <div className={styles.cardsContainer}>
                    {contatos.map(({ id, label, value, href, icon }) => (
                        <div key={id} className={styles.contactCard}>
                            <i className={`bi ${icon} ${styles.icon}`}></i>
                            <div className={styles.contactContent}>
                                <span className={styles.contactLabel}>{label}</span>
                                {href ? (
                                    <a href={href} className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                                        {value}
                                    </a>
                                ) : (
                                    <span className={styles.contactValue}>{value}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <form className={styles.formColumn} onSubmit={enviarWhatsApp}>
                {/* <h3>Ou entre em contato </h3> */}
                <label>
                    Nome
                    <input
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required
                    />
                </label>


                <fieldset className={styles.checkboxGroup}>
                    <legend>Qual tipo de serviço está procurando(opcional)</legend>
                    {areasAtuacao.map(area => (
                        <div key={area} className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`checkbox-${area}`}
                                checked={selecionadas.includes(area)}
                                onChange={() => toggleCheckbox(area)}
                            />
                            <label className="form-check-label" htmlFor={`checkbox-${area}`}>
                                {area}
                            </label>
                        </div>
                    ))}
                </fieldset>

                <label>
                    Mensagem (opcional)
                    <textarea
                        value={mensagem}
                        onChange={e => setMensagem(e.target.value)}

                    />
                </label>



                <button
                    type="submit"
                    className={styles.button}
                // disabled={!aceitoTermos} // desabilita até aceitar os termos
                >
                    Enviar via WhatsApp
                </button>
                <div className="form-check">
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        className="form-check-input"
                        checked={aceitoTermos}
                        onChange={() => setAceitoTermos(!aceitoTermos)}
                    />
                    <label htmlFor="acceptTerms" className="form-check-label" >
                        <span>
                            Aceito os{' '}
                            <Link to="/termos-e-condicoes" target="_blank" rel="noopener noreferrer">
                                termos e condições de uso das informações
                            </Link>
                        </span>
                    </label>
                </div>
            </form>
        </section>
    );
}
