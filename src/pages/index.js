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
            <p>Pintora abstracta.</p>
            <br/>
            <p>Artista plástica.</p>
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
          <h2>Descripción breve sobre tí o de tu trabajo, que llame la atención del usuario</h2>
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
            <p>Descripción más larga acerca de tí o tu trabajo, algo que quieras transmitir al visitante de la página</p>
            <br/>
            <p>Malesuada id lorem non magna tortor duis sit blandit pulvinar enim turpis dui purus augue nec, eget sit sapien aliquam iaculis at erat sit porttitor massa tristique feugiat aliquam pellentesque vulputate tincidunt augue at duis mauris dictum urna amet ut quisque</p>
            <br/>
            <div className="explore-text">{t('Index_Continue_Reading')}</div>
            <div className="continue-reading-divider"></div>
          </div>
        </div>
      </div>
      <HighlightsComponent/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

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
