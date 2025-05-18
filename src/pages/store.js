import React from 'react';
import {graphql} from 'gatsby';
import HeaderComponent from '../components/Header.tsx';

const StorePage = () => {
  return (
    <main>
      <HeaderComponent/>
      <h1>Coming soon</h1>
    </main>
  )
}

export default StorePage

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
