export function slugify(text) {
    /**
     * Função responsável por transformar um texto em uma URL amigável (slug).
     * 
     * @param {string} message - Texto que será convertido em slug para uso em URLs.
     * 
     * @returns {string} - Retorna o texto formatado como slug, por exemplo, 'olá mundo' vira 'ola-mundo'.
     * 
     * Exemplo:
     * slugify('olá mundo') // retorna 'ola-mundo'
     */
    return text.toLowerCase().replace(/\s+/g, '-');
}