import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import HeaderComponent from '../components/Header.tsx';
import HighlightsComponent from '../components/Highlights.tsx';

import '../styles/index.css';

const IndexPage = () => {
  const {t} = useTranslation();

  return (
    <main>
      <HeaderComponent/>
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
      <div className="main-content">
        <div className="explore-more-container">
          <div className="explore-text">{t('Index_ViewMore')}</div>
          <div className="scroll-arrow">
             <svg
              className="arrow-svg-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path d='M12 15.5a1.993 1.993 0 0 1-1.414-.585L5.293 9.621 6.707 8.207 12 13.5l5.293-5.293 1.414 1.414-5.293 5.293A1.993 1.993 0 0 1 12 15.5Z'/>
            </svg>
          </div>
        </div>
        <div className="vertical-divider"></div>
        <div className='header-about'>
          <h2>{t('Index_About_Header')}</h2>
        </div>
        <div className='about-container'>
          <StaticImage
            src="../images/paints/nosotras.jpg"
            alt="English"
            width={500}
            height={400}
            placeholder="none"
          />
          <div className='about-text'>
            <p>{t('Index_About_First')}</p>
            <br/>
            <p>{t('Index_About_Second')}</p>
            <br/>
            <div className="explore-text"><a href="/about">{t('Index_Continue_Reading')}</a></div>
            <div className="continue-reading-divider"></div>
          </div>
        </div>
      </div>
      <HighlightsComponent/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Graciela Araujo</title>

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
