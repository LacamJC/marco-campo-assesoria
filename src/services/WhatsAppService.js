export function openChat(message, phone) {
    /**
     * Abre uma nova conversa no WhatsApp com uma mensagem pré-formatada.
     *
     * @param {string} message - O corpo da mensagem que será enviado automaticamente no campo de texto (opcional).
     * @param {string} phone - O número de telefone no formato internacional (obrigatório), ex: 5511999999999.
    */

    if (!phone) {
        return alert('Desculpe, não foi possivel abrir o chat ');
    }
    console.log(phone)
    const onlyNumbers = /\d+/g; // pega um ou mais dígitos, globalmente
    var phone = phone.match(onlyNumbers).join('');

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    // console.log(phone)
    window.open(url, '_blank');
    // alert(message);

}

