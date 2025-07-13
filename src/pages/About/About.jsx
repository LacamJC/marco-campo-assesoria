import styles from './About.module.css';

function About() {
  return (
    <main className={`container my-5 ${styles.about}`} id='sobre'>
      <div className="row align-items-center">
        {/* Coluna esquerda - texto */}
        <div className="col-md-6">
          <h1 className={styles.title}>Sobre Nós</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis, urna at cursus cursus, urna lacus cursus lorem, sed sodales purus ipsum ut erat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nemo est sint atque. Maiores quas, repudiandae rerum molestiae velit accusantium, magnam expedita veniam ea reprehenderit ipsa officiis. Incidunt, quisquam soluta? Lorem, ipsum dolor sit amet 
          </p>

          <section className={styles.section}>
            <h2 className={styles.subtitle}>Nossa Missão</h2>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente fugit velit molestiae vel? Nulla quos
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.subtitle}>Nossa Equipe</h2>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, mollitia consequatur? Quod dolore ab eligendi commodi quaerat
            </p>
          </section>
        </div>

        {/* Coluna direita - imagem placeholder */}
        <div className="col-md-6 p-0">
          <img
            src="https://placehold.co/600x400"
            alt="Sobre imagem"
            className={styles.image}
          />
        </div>
      </div>
    </main>
  );
}

export default About;
