import React, { createContext, useState } from 'react';

export const SiteInfoContext = createContext();


export function SiteInfoProvider({ children }) {


    const [contatos] = useState(
        [
            {
                id: 1,
                label: 'Telefone',
                value: '(11) 99999-9999',
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

    const [areas] = useState([
        {
            id: 1,
            title: 'Direito Trabalhista',
            description: 'Assessoria completa em relações trabalhistas, contratos e direitos do trabalhador.',
            icon: 'bi-briefcase-fill',
            area: 'Direito Trabalhista'
        },
        {
            id: 2,
            title: 'Direito Civil',
            description: 'Consultoria em contratos, responsabilidades, direitos de família e mais.',
            icon: 'bi-file-earmark-text',
            area: 'Direito Civil'
        },
        {
            id: 3,
            title: 'Direito Empresarial',
            description: 'Orientação jurídica para empresas, sociedades e negociações comerciais.',
            icon: 'bi-building',
            area: 'Direito Empresarial'
        },
        {
            id: 4,
            title: 'Direito Penal',
            description: 'Defesa e consultoria em casos criminais e processos penais.',
            icon: 'bi-shield-lock',
            area: 'Direito Penal',
        }
    ]
    );

    const menuItems = useState([
        { id: 1, label: 'Home', href: '/#hero', icon: 'bi-house-door' },
        { id: 2, label: 'Sobre', href: '/#sobre', icon: 'bi-info-circle' },
        { id: 3, label: 'Atuação', href: '/#atuacao', icon: 'bi-diagram-3' },
        { id: 4, label: 'Contato', href: '/#contato', icon: 'bi-envelope' },
        { id: 5, label: 'Termos e Condições', href: '/termos', icon: 'bi-file-earmark-text' },
    ]);

    // O valor que será compartilhado para os filhos
    const value = {
        contatos,
        redesSociais,
        areas,
        menuItems
    };

    return (
        <SiteInfoContext.Provider value={value}>
            {children}
        </SiteInfoContext.Provider>
    );
}
