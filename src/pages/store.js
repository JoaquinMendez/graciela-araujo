import React, { useState, useRef} from 'react';
import {graphql} from 'gatsby';
import HeaderComponent from '../components/Header.tsx';
import StoreCatalogComponent from '../components/StoreCatalog.tsx';
import StoreCarrouselComponent from '../components/StoreCarrouselComponent.tsx';

const StorePage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleCatalogClick = (index) => {
    console.log(index);
    setSelectedIndex(index);
    if (carouselRef.current) {
      carouselRef.current.slickGoTo(index);
    }
  };

  return (
    <main>
      <HeaderComponent/>
      <StoreCarrouselComponent ref={carouselRef}/>
      <StoreCatalogComponent onPaintSelect={handleCatalogClick}/>
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
