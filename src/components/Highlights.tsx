import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import './Highlights.css';
import HighlightItem from './HighlightItem';
import { paints } from '../classes/paints';

const hightlightsFilenames = [
    "amor.jpg", 
    "escaleras.jpg",
    "nosotras.jpg",
    "anonimo.jpg"
];

const HighlightsComponent = () => {
    const {t} = useTranslation();
    const highlightPaints = paints.filter(paint => hightlightsFilenames.includes(paint.filename));
    
    return (
        <div>
            <div className='header-hightlights'>
                <h2>{t('Highlights_Title')}</h2>
                <div className='header-content-hightlights'>
                    <p>{t('Hightlights_Subtitle')}</p>
                    <div className="explore-text">
                        <a href="/store">{t('Hightlights_SeeAll')}</a>
                        <div className="horizontal-divider-hightlights"></div>
                    </div>
                </div>
            </div>
            <div className='body-hightlights'>
                {highlightPaints.map((paint) => (
                    <HighlightItem key={paint.filename} paint={paint} />
                ))}
            </div>
        </div>
    );
};

export default HighlightsComponent;
