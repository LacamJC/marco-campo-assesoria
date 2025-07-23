import React, { createContext, useState } from 'react';

export const SiteInfoContext = createContext();


export function SiteInfoProvider({ children }) {


    const [contatos] = useState(
        [
            {
                id: 1,
                label: 'Telefone',
                value: '(11) 94628-9761',
                href: 'tel:+5511988882680',
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


    // Itens do menu sidebar
    const menuItems = useState([
        { id: 1, label: 'Home', href: '/#hero', icon: 'bi-house-door' },
        { id: 2, label: 'Sobre', href: '/#sobre', icon: 'bi-info-circle' },
        { id: 3, label: 'Atuação', href: '/#atuacao', icon: 'bi-diagram-3' },
        { id: 4, label: 'Contato', href: '/#contato', icon: 'bi-envelope' },
        { id: 5, label: 'Termos e Condições', href: '/termos', icon: 'bi-file-earmark-text' },
    ]);

    // items da seção areas de atuação
    const [areas] = useState([
        {
            id: 1,
            title: 'Direito do Consumidor',
            icon: 'bi-bag-check-fill',
            area: 'Direito do Consumidor',
            tipo: 'PF',
            description: 'Orientações e soluções para questões relativas a compras, cobranças indevidas e contratos de consumo.'
        },
        {
            id: 2,
            title: 'Direito Trabalhista',
            icon: 'bi-briefcase-fill',
            area: 'Direito Trabalhista',
            tipo: 'PJ',
            description: 'Apoio na defesa de direitos em casos de rescisões contratuais, dispensa injustificada e demais litígios trabalhistas.'
        },
        {
            id: 3,
            title: 'Direito de Família',
            icon: 'bi-people-fill',
            area: 'Direito de Família',
            tipo: 'PF',
            description: 'Assessoria para processos de divórcio, guarda dos filhos e elaboração de acordos de pensão alimentícia.'
        },
        {
            id: 4,
            title: 'Direito Criminal',
            icon: 'bi-shield-lock-fill',
            area: 'Direito Criminal',
            tipo: 'PF',
            description: 'Defesa técnica em processos criminais, manifestações em queixas e procedimentos judiciais penais.'
        },
        {
            id: 5,
            title: 'Direito Empresarial',
            icon: 'bi-building',
            area: 'Direito Empresarial',
            tipo: 'PJ',
            description: 'Consultoria jurídica para negócios, elaboração e análise de contratos comerciais e societários.'
        },
        {
            id: 6,
            title: 'Direito Tributario',
            icon: 'bi-building',
            area: 'Direito Tributario',
            tipo: 'PJ',
            description: 'Consultoria jurídica para negócios, elaboração e análise de contratos comerciais e societários.'
        }
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
