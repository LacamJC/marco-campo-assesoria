export function dateFormat(date) {
    const dataTimestamp = date;
    const dataObj = new Date(dataTimestamp);

    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // mês começa do 0
    const ano = dataObj.getFullYear();

    const hora = String(dataObj.getHours()).padStart(2, '0');
    const minutos = String(dataObj.getMinutes()).padStart(2, '0');

    const data = {
        'data': `${dia}/${mes}/${ano}`,
        'hora' : `${hora}:${minutos}`
    }

    return data
}