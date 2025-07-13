import React from 'react';
import styles from './TermosCondicoes.module.css'; // se quiser estilizar
import { useContext } from 'react';
import { SiteInfoContext } from '../../context/SiteInfoContext';

function TermosCondicoes() {
  const { contatos } = useContext(SiteInfoContext)
  return (
    <main className={styles.container}>
      <section id='termos' className={styles.control_section}>
        <h1>Termos e Condições de Uso</h1>
        <h2 className={styles.subtitle}>Consentimento</h2>
        <p className={styles.paragraph}>
          Ao utilizar nosso site, você declara estar ciente e de acordo com todos os termos aqui descritos.
        </p>



        <section>
          <h2 className={styles.subtitle}>Uso do Site</h2>
          <p className={styles.paragraph}>
            Ao acessar e utilizar este site, você concorda em cumprir os termos e condições aqui estabelecidos.
            Caso não concorde com algum deles, por favor, não utilize nossos serviços.
          </p>
        </section>

        <section>
          <h2 className={styles.subtitle}>Envio de Mensagens via WhatsApp</h2>
          <p className={styles.paragraph}>
            Nosso site oferece a funcionalidade de envio de mensagens através do WhatsApp para facilitar o contato direto entre você e nossa equipe.
            Importante esclarecer que:
          </p>
          <ul className={styles.paragraph}>
            <li><strong>Nenhuma informação pessoal fornecida durante o envio da mensagem é armazenada ou salva em nossos servidores.</strong></li>
            <li>O envio da mensagem funciona através da integração com a API oficial do WhatsApp, que redireciona você automaticamente para o aplicativo ou site do WhatsApp.</li>
            <li>Nós apenas fazemos a conexão para abrir essa interface de envio de mensagem — todo o conteúdo e o envio são gerenciados diretamente pelo WhatsApp.</li>
            <li>Portanto, sua privacidade é preservada, pois não coletamos, armazenamos ou processamos os dados inseridos para essa comunicação.</li>
          </ul>
          <p className={styles.paragraph}>
            Ao utilizar essa funcionalidade, você concorda com essa forma de operação e entende que o WhatsApp é o responsável pelo gerenciamento da mensagem enviada.
          </p>
        </section>

        <section>
          <h2 className={styles.subtitle}>Privacidade e Proteção de Dados</h2>
          <p className={styles.paragraph}>
            Respeitamos a sua privacidade e nos comprometemos a proteger seus dados pessoais conforme a legislação vigente.
          </p>
        </section>

        <section>
          <h2 className={styles.subtitle}>Propriedade Intelectual</h2>
          <p className={styles.paragraph}>
            Todo o conteúdo deste site, incluindo textos, logotipos, códigos e layout, é de propriedade exclusiva do Escritório Marco Campo e protegido por direitos autorais.
            É proibida a reprodução ou distribuição sem autorização prévia.
          </p>
        </section>

        <section>
          <h2 className={styles.subtitle}>Links Externos</h2>
          <p className={styles.paragraph}>
            Este site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo, políticas ou práticas desses sites externos.
            Recomendamos que você leia os termos e políticas de privacidade de cada site que visitar.
          </p>
        </section>

        <section>
          <h2 className={styles.subtitle}>Modificações nos Termos</h2>
          <p className={styles.paragraph}>
            Podemos alterar estes termos a qualquer momento, por isso recomendamos que os consulte periodicamente.
          </p>
        </section>

        <section>
          <h2 className={styles.subtitle}>Contato</h2>
          <p className={styles.paragraph}>
            Se você tiver dúvidas sobre estes termos, entre em contato conosco pelo e-mail:<a href={`mailto:${contatos[1].value}`}>{contatos[1].value}</a>
          </p>
        </section>

        <section>
          <h2 className={styles.subtitle}>Status do Projeto</h2>
          <p className={styles.paragraph}>
            Este site está atualmente em fase de desenvolvimento e testes. Seu objetivo é demonstrar a estrutura e funcionamento geral do projeto e não possui fins comerciais no momento.
          </p>
          <p className={styles.paragraph}>
            Algumas imagens ou recursos visuais utilizados podem ter sido obtidos de fontes externas e estão sendo utilizados apenas com caráter ilustrativo e temporário.
            Caso você seja o detentor de algum desses recursos e deseje solicitar sua remoção, entre em contato conosco.
          </p>
        </section>
      </section>
    </main>
  );
}

export default TermosCondicoes;
