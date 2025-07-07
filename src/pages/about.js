import React from 'react';
import {graphql} from 'gatsby';
import HeaderComponent from '../components/Header.tsx';
import AboutFirstSectionComponent from '../components/AboutFirstSection.tsx';

const AboutPage = () => {
  return (
    <main>
      <HeaderComponent/>
      <AboutFirstSectionComponent/>
    </main>
  )
}

export default AboutPage

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
