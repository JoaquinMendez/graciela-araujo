import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import './HighlightItem.css';


const HighlightItem = ({ paint }) => {
    const {t} = useTranslation();

    const data = useStaticQuery(query); // Execute the GraphQL query

    // Find the specific image data that matches paint.filename
    const imageData = data.allFile.nodes.find(node => node.relativePath.endsWith(paint.filename));

    const image = getImage(imageData);

    return (
        <div className='hightlight-item'>
            <GatsbyImage
                image={image!} // Pass the image data object
                alt={paint.name}
                className="paint-hightlight"
            />
            <p>{t('HightlightItem_Dim')}: {paint.getDimensions()}</p>
            <div>{paint.name}</div>
            {paint.price > 1 && <div>{paint.getFormattedPrice()}</div>}
        </div>
    );
};

// 1. Define a GraphQL query to get all images from your 'images/paints' directory
// This query runs once at build time and gets data for all files in that path.
const query = graphql`
  query HighlightItemImages {
    allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "paints"}}) {
      nodes {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: CONSTRAINED
          )
        }
      }
    }
  }
`;

export default HighlightItem;
