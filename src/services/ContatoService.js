import  { sanitizeInput } from '../utils/sanitizeInput';
import  { dateFormat } from '../utils/dateFormat';


export function montarMensagem({ nome, mensagem, selecionadas }) {
    const nomeLimpo = sanitizeInput(nome);
    const mensagemLimpa = sanitizeInput(mensagem);

    const areasTexto = selecionadas?.length > 0
        ? `${selecionadas.map(sanitizeInput).join(', ')}.\n`
        : '';

    let texto = `Olá, meu nome é ${nomeLimpo}.\nPreciso de serviços relacionados a ${areasTexto}`;
    if (mensagemLimpa) texto += `\nObservações: ${mensagemLimpa}`;

    const dataFormatada = dateFormat(Date.now());
    texto += `\nData da solicitação: ${dataFormatada.data}, às ${dataFormatada.hora}`;

    return texto;
}