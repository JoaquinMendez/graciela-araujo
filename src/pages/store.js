import React from 'react';
import {graphql} from 'gatsby';
import HeaderComponent from '../components/Header.tsx';
import StoreCatalogComponent from '../components/StoreCatalog.tsx';
import StoreCarrouselComponent from '../components/StoreCarrouselComponent.tsx';

const StorePage = () => {
  return (
    <main>
      <HeaderComponent/>
      <StoreCarrouselComponent/>
      <StoreCatalogComponent/>
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
