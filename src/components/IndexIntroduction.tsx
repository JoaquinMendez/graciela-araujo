import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

import './IndexIntroduction.css';

const IndexIntroductionComponent = () => {
    const {t} = useTranslation();
    
    
    return (
        <div className="introduction">
            <div>
                <h1>Graciela Araujo</h1>
                <p>{t('Index_Painter')}</p>
                <br/>
                <p>{t('Index_Plastic')}</p>
            </div>
            <div>
                <StaticImage
                src="../images/paints/portada.jpg"
                alt="English"
                width={1000}
                height={1000}
                placeholder="none"
                />
            </div>
            <div className="secondary-text">
                <div className="horizontal-divider"></div>
                <p>{t('Index_Long_Front')}</p>
            </div>
        </div>
    );
};

export default IndexIntroductionComponent;
