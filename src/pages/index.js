import React from 'react';
import {graphql} from 'gatsby';
import HeaderComponent from '../components/Header.tsx';

const IndexPage = () => {
  return (
    <main>
      <HeaderComponent/>
      <h1>Graciela Araujo</h1>
      <p>Coming soon.</p>
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
