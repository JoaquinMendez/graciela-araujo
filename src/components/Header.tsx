import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import LanguageSelector from './LanguageSelector.tsx';
import './Header.css';

const HeaderComponent = () => {
    const {t} = useTranslation();
    
    return (
        <header className="header">
            <div className="topRow">
                <div className="socialAndLang">
                    <a
                        href="https://www.instagram.com/gracielaaraujomatturro/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaInstagram style={{ fontSize: '1.5rem' }} />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=59899926560"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaWhatsapp style={{ fontSize: '1.5rem' }} />
                    </a>
                </div>
                <LanguageSelector/>
            </div>
            <nav className="navigationHeader">
                <a href="/">{t('Header_Home')}</a>
                <a href="/about">{t('Header_About')}</a>
                <a href="/exhibitions">{t('Header_Exibhitions')}</a>
                <a href="/store">{t('Header_Store')}</a>
            </nav>
        </header>
    );
};

export default HeaderComponent;
