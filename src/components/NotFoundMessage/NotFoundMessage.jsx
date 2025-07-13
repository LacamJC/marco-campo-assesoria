import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from './NotFoundMessage.module.css';

function NotFoundMessage() {
  return (
    <section className={styles.container} role="alert" aria-live="assertive">
      <i className={`bi bi-exclamation-triangle-fill ${styles.iconError}`} aria-hidden="true"></i>
      <h1 className={styles.title}>Erro 404 – Página não encontrada</h1>
      <p className={styles.message}>
        O conteúdo que você está tentando acessar não está disponível ou não existe.
      </p>
      <HashLink smooth to="/#home" className={styles.button}>
        <i className={`bi bi-arrow-left-circle ${styles.iconButton}`} aria-hidden="true"></i>
        Voltar para a página inicial
      </HashLink>
    </section>
  );
}

export default NotFoundMessage;
