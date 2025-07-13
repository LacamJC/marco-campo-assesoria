export function sanitizeInput(input) {
    /**
     * Sanitiza uma string de entrada usando expressão regular,
     * removendo tags HTML e qualquer conteúdo potencialmente malicioso.
     *
     * @param {string} input - Texto de entrada que deve ser sanitizado, geralmente fornecido por usuários ou fontes externas.
     * @returns {string} - Retorna a string limpa, sem tags HTML.
     */
    return input
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .replace(/\//g, "&#x2F;")
        .replace(/`/g, "");
}
