import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StaticImage } from 'gatsby-plugin-image';

import './AboutFirstSection.css';

const AboutFirstSectionComponent = () => {
    const {t} = useTranslation();
    
    
    return (
        <div className='header-about-first-section'>
            <div className="vertical-divider"></div>
            <h2>{t("About_First_Section_Title")}</h2>
            <div>
                <StaticImage
                src="../images/about.jpeg"
                alt="English"
                width={1300}
                placeholder="none"
                />
            </div>
            <div className='biography'>
                <h2>{t("Biography_title")}</h2>
                <p>{t("Biography1")}<br/>
                    {t("Biography2")}<br/>
                    {t("Biography3")}<br/>
                    {t("Biography4")}<br/>
                    {t("Biography5")}<br/>
                </p>
                <p>
                    {t("Biography6")}<br/>
                    {t("Biography7")}<br/>
                    {t("Biography8")}<br/>
                    {t("Biography9")}<br/>
                </p>
            </div>
        </div>
    );
};

export default AboutFirstSectionComponent;
