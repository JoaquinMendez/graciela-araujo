import React from 'react';
import { graphql } from 'gatsby';

import HeaderComponent from '../components/Header.tsx';
import HighlightsComponent from '../components/Highlights.tsx';
import IndexIntroductionComponent from '../components/IndexIntroduction.tsx';
import IndexAboutSectionComponent from '../components/IndexAboutSection.tsx';

import '../styles/index.css';

const IndexPage = () => {
  return (
    <main>
      <HeaderComponent/>
      <IndexIntroductionComponent/>
      <IndexAboutSectionComponent/>
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
