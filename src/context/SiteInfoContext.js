import React, { createContext, useState } from 'react';

export const SiteInfoContext = createContext();


export function SiteInfoProvider({ children }) {


    const [contatos] = useState(
        [
            {
                id: 1,
                label: 'Telefone',
                value: '(11) 94628-9761',
                href: 'tel:+5511999999999',
                icon: 'bi-telephone-fill',
            },
            {
                id: 2,
                label: 'Email',
                value: 'contato@exemplo.com',
                href: 'mailto:contato@exemplo.com',
                icon: 'bi-envelope-fill',
            },
            {
                id: 3,
                label: 'Endereço',
                value: 'Rua Exemplo, 123 - São Paulo, SP',
                icon: 'bi-geo-alt-fill',
            },
        ]
    )

    const [redesSociais] = useState(
        [
            {
                name: 'Linkedin',
                url: 'https://linkedin.com',
                icon: 'bi-linkedin'
            },
            {
                name: 'Instagram',
                url: 'https://instagram.com',
                icon: 'bi-instagram'
            },
            {
                name: 'Facebook',
                url: 'https://facebook.com',
                icon: 'bi-facebook'
            },
        ]
    )



    const menuItems = useState([
        { id: 1, label: 'Home', href: '/#hero', icon: 'bi-house-door' },
        { id: 2, label: 'Sobre', href: '/#sobre', icon: 'bi-info-circle' },
        { id: 3, label: 'Atuação', href: '/#atuacao', icon: 'bi-diagram-3' },
        { id: 4, label: 'Contato', href: '/#contato', icon: 'bi-envelope' },
        { id: 5, label: 'Termos e Condições', href: '/termos', icon: 'bi-file-earmark-text' },
    ]);

    const [areas] = useState([
        { id: 1, title: 'Direito Trabalhista Empresarial', description: 'Gestão de riscos trabalhistas, revisão de contratos CLT e PJ, mediação e defesa em ações trabalhistas.', icon: 'bi-people-fill', area: 'Direito Trabalhista Empresarial' },
        { id: 2, title: 'Direito Civil Empresarial', description: 'Consultoria em contratos, responsabilidade civil, direitos de família e resolução de conflitos empresariais.', icon: 'bi-file-earmark-text', area: 'Direito Civil Empresarial' },
        { id: 3, title: 'Direito Empresarial', description: 'Orientação jurídica para abertura e encerramento de empresas, sociedades, planejamento societário e negociações comerciais.', icon: 'bi-building', area: 'Direito Empresarial' },
        { id: 4, title: 'Direito Penal Empresarial', description: 'Defesa e consultoria em processos criminais ligados à atividade empresarial e proteção patrimonial.', icon: 'bi-shield-lock-fill', area: 'Direito Penal Empresarial' },
    ]);

    const atuacaoInfoAll = useState([
        { id: 1, title: 'Consultoria Jurídica Empresarial', description: 'Consultoria preventiva e estratégica para organização, proteção e crescimento sustentável da sua empresa.', icon: 'bi-briefcase-fill', area: 'Direito Empresarial' },
        { id: 2, title: 'Elaboração e Revisão de Contratos', description: 'Contratos de prestação de serviços, compra e venda, parcerias comerciais e demais contratos comerciais.', icon: 'bi-file-earmark-text', area: 'Direito Civil Empresarial' },
        { id: 3, title: 'Planejamento Societário e Acordos de Sócios', description: 'Estruturação societária, alterações contratuais e prevenção de litígios internos.', icon: 'bi-diagram-3-fill', area: 'Direito Empresarial' },
        { id: 4, title: 'Adequação à LGPD e Gestão de Provas', description: 'Assessoria em perícias técnicas, elaboração de pareceres, preservação e validação de evidências jurídicas.', icon: 'bi-shield-lock-fill', area: 'Direito Empresarial' },
        { id: 5, title: 'Jurídico Trabalhista Preventivo', description: 'Gestão de riscos trabalhistas, revisão de contratos CLT e PJ, mediação e defesa em ações trabalhistas.', icon: 'bi-people-fill', area: 'Direito Trabalhista Empresarial' },
        { id: 6, title: 'Expansão e Crescimento Seguro', description: 'Estratégias jurídicas para proteção patrimonial, abertura de novas filiais e estruturação sólida para expansão.', icon: 'bi-bar-chart-fill', area: 'Direito Empresarial' },
    ]);

    // O valor que será compartilhado para os filhos
    const value = {
        contatos,
        redesSociais,
        areas,
        menuItems,
        atuacaoInfoAll
    };

    return (
        <SiteInfoContext.Provider value={value}>
            {children}
        </SiteInfoContext.Provider>
    );
}
