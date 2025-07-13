export function dateFormat(date) {
    /**
     * Formata uma data para um formato amigável contendo data e hora.
     * 
     * @param {number|Date} date - Timestamp ou objeto Date a ser formatado.
     * 
     * @returns {Object} Retorna um objeto com as propriedades:
     *  - data: string no formato 'dd/mm/aaaa'
     *  - hora: string no formato 'hh:mm'
     * 
     * @example
     * const dataFormatada = dateFormat(Date.now());
     * // dataFormatada = { data: '01/01/2025', hora: '21:20' }
     */

    const dataTimestamp = date;
    const dataObj = new Date(dataTimestamp);

    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // mês começa do 0
    const ano = dataObj.getFullYear();

    const hora = String(dataObj.getHours()).padStart(2, '0');
    const minutos = String(dataObj.getMinutes()).padStart(2, '0');

    const data = {
        'data': `${dia}/${mes}/${ano}`,
        'hora': `${hora}:${minutos}`
    }

    return data
}