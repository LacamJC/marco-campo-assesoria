import styles from './About.module.css';
import image from '../../assets/images/brainstrom.jpg'
function About() {
  return (
    <section className={`container ${styles.about} ${styles.control_section}`} id="sobre">
      <div className="row align-items-center">
        {/* Coluna esquerda - texto */}
        <div className="col-md-6">
          <h1 className={styles.title}>Sobre</h1>
          <p className={styles.paragraph}>
            A M Campos Assessoria é especializada em consultoria jurídica empresarial, com foco em soluções estratégicas, preventivas e contenciosas. 
            Atuamos para garantir a segurança jurídica e o crescimento sustentável de empresas de todos os portes.
          </p>
          <p className={styles.paragraph}>
            Com uma abordagem personalizada, oferecemos atendimento digital ou presencial, sempre com transparência e excelência técnica.
          </p>

          <section className={styles.section}>
            <h2 className={styles.subtitle}>Nossa Missão</h2>
            <p className={styles.paragraph}>
              Apoiar o desenvolvimento de empresas com soluções jurídicas eficazes, que previnam riscos, fortaleçam operações e promovam inovação com responsabilidade.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subtitle}>Nossa Equipe</h2>
            <p className={styles.paragraph}>
              Contamos com advogados experientes e comprometidos com a entrega de resultados. Nossa equipe atua de forma consultiva e estratégica, sempre alinhada com as necessidades reais do seu negócio.
            </p>
          </section>
        </div>

        {/* Coluna direita - imagem */}
        <div className="col-md-6 p-0 d-flex justify-content-center align-items-start">
          <img
            src={image}
            width={'600px'}
            height={'400px'}
            alt="Equipe M Campos Assessoria"
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
