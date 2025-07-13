import { useState, useContext } from 'react';
import { SiteInfoContext } from '../../context/SiteInfoContext';
import styles from './Contato.module.css';
import { Link } from 'react-router-dom';
import { sanitizeInput } from '../../utils/sanitizeInput';
import { openChat } from '../../services/WhatsAppService';
import { dateFormat } from '../../utils/dateFormat';
export default function Contato() {
    const { contatos, areas } = useContext(SiteInfoContext)

    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [selecionadas, setSelecionadas] = useState([]);
    const [aceitoTermos, setAceitoTermos] = useState(false);

    function toggleCheckbox(area) {
        setSelecionadas(prev =>
            prev.includes(area) ? prev.filter(a => a !== area) : [...prev, area]
        );
    }

    const enviarWhatsApp = (e) => {
        e.preventDefault();

        const nomeLimpo = sanitizeInput(nome);
        const mensagemLimpa = sanitizeInput(mensagem);
        const areasTexto = selecionadas.length > 0
            ? `${selecionadas.map(sanitizeInput).join(', ')}.\n`
            : '';

        if (!nomeLimpo.trim()) {
            alert('Por favor, preencha todos o campo nome.');
            return;
        }
        if (!aceitoTermos) {
            alert('Para enviar mensagem, aceite os termos e condições de uso das informações');
            return;
        }

        var texto = `Olá, meu nome é ${nomeLimpo}.\nPreciso de serviços relacionados a ${areasTexto}` + (mensagemLimpa ? `\nObservações: ${mensagemLimpa}` : '');

        const dataFormatada = dateFormat(Date.now());

        texto += `\nData da solicitação: ${dataFormatada.data}, às ${dataFormatada.hora}`;

        openChat(texto, contatos[0].href)
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
                <div className={styles.formIntro}>
                    <h3>Envie sua mensagem via WhatsApp</h3>
                    <p className={styles.infoIntro}>
                        Informe seu nome, as áreas de interesse e, se desejar, uma breve observação.
                        Entraremos em contato o mais breve possível!
                    </p>
                </div>
                <hr />

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
                    {
                        areas.map(area => {
                            return <div key={area.area} className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`checkbox-${area.id}`}
                                    checked={selecionadas.includes(area.area)}
                                    onChange={() => toggleCheckbox(area.area)}
                                />
                                <label className="form-check-label" htmlFor={`checkbox-${area.id}`}>
                                    {area.area}
                                </label>
                            </div>

                        }
                        )
                    }


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
                            <Link to="/termos" rel="noopener noreferrer">
                                termos e condições de uso das informações
                            </Link>
                        </span>
                    </label>
                </div>
            </form>
        </section>
    );
}
