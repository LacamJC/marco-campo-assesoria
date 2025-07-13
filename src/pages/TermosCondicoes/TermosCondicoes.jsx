import React from 'react';
import styles from './TermosCondicoes.module.css'; // se quiser estilizar
import { useContext } from 'react';
import { SiteInfoContext } from '../../context/SiteInfoContext';
function TermosCondicoes() {
  const { contatos } = useContext(SiteInfoContext)
  return (
    <main className={styles.container}>
      <h1>Termos e Condições de Uso</h1>
      <h2>Consentimento</h2>
      <p>
        Ao utilizar nosso site, você declara estar ciente e de acordo com todos os termos aqui descritos.
      </p>
      <section>
        <h2>Uso do Site</h2>
        <p>
          Ao acessar e utilizar este site, você concorda em cumprir os termos e condições aqui estabelecidos.
          Caso não concorde com algum deles, por favor, não utilize nossos serviços.
        </p>
      </section>

      <section>
        <h2>Envio de Mensagens via WhatsApp</h2>
        <p>
          Nosso site oferece a funcionalidade de envio de mensagens através do WhatsApp para facilitar o contato direto entre você e nossa equipe.
          Importante esclarecer que:
        </p>
        <ul>
          <li><strong>Nenhuma informação pessoal fornecida durante o envio da mensagem é armazenada ou salva em nossos servidores.</strong></li>
          <li>O envio da mensagem funciona através da integração com a API oficial do WhatsApp, que redireciona você automaticamente para o aplicativo ou site do WhatsApp.</li>
          <li>Nós apenas fazemos a conexão para abrir essa interface de envio de mensagem — todo o conteúdo e o envio são gerenciados diretamente pelo WhatsApp.</li>
          <li>Portanto, sua privacidade é preservada, pois não coletamos, armazenamos ou processamos os dados inseridos para essa comunicação.</li>
        </ul>
        <p>
          Ao utilizar essa funcionalidade, você concorda com essa forma de operação e entende que o WhatsApp é o responsável pelo gerenciamento da mensagem enviada.
        </p>
      </section>

      <section>
        <h2>Privacidade e Proteção de Dados</h2>
        <p>
          Respeitamos a sua privacidade e nos comprometemos a proteger seus dados pessoais conforme a legislação vigente.
        </p>
      </section>

      <section>
        <h2>Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo deste site, incluindo textos, logotipos, códigos e layout, é de propriedade exclusiva do Escritório Marco Campo e protegido por direitos autorais.
          É proibida a reprodução ou distribuição sem autorização prévia.
        </p>
      </section>

      <section>
        <h2>Links Externos</h2>
        <p>
          Este site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo, políticas ou práticas desses sites externos.
          Recomendamos que você leia os termos e políticas de privacidade de cada site que visitar.
        </p>
      </section>

      <section>
        <h2>Modificações nos Termos</h2>
        <p>
          Podemos alterar estes termos a qualquer momento, por isso recomendamos que os consulte periodicamente.
        </p>
      </section>

      <section>
        <h2>Contato</h2>
        <p>
          Se você tiver dúvidas sobre estes termos, entre em contato conosco pelo e-mail:<a href={`mailto:${contatos[1].value}`}>{contatos[1].value}</a>
        </p>
      </section>

      <section>
        <h2>Status do Projeto</h2>
        <p>
          Este site está atualmente em fase de desenvolvimento e testes. Seu objetivo é demonstrar a estrutura e funcionamento geral do projeto e não possui fins comerciais no momento.
        </p>
        <p>
          Algumas imagens ou recursos visuais utilizados podem ter sido obtidos de fontes externas e estão sendo utilizados apenas com caráter ilustrativo e temporário.
          Caso você seja o detentor de algum desses recursos e deseje solicitar sua remoção, entre em contato conosco.
        </p>
      </section>
    </main>
  );
}

export default TermosCondicoes;
