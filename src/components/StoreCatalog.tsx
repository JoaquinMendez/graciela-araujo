import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import './StoreCatalog.css';
import { paints } from '../classes/paints';

const StoreCatalogComponent = () => {
    const {t} = useTranslation();
    const images = useStaticQuery(query); // Execute the GraphQL query
    
    return (
        <div className='store-catalog'>
            {paints.map((paint) => {
                const imageData = images.allFile.nodes.find(node => node.relativePath.endsWith(paint.filename));

                const image = getImage(imageData);

                return (
                    <div className="paint-card" key={paint.filename}> {/* Add a class for styling each paint item */}
                        {image ? (
                            <GatsbyImage
                                image={image}
                                alt={paint.name} // Use paint.name for accessibility
                                className="paint-card-image" // Add a class for styling the image
                            />
                        ) : (
                            <img
                                src="https://via.placeholder.com/400x300?text=Image+Missing" // Generic placeholder for missing images
                                alt={`Image for ${paint.name} not found`}
                                style={{ width: '400px', height: '300px', objectFit: 'cover' }} // Match GatsbyImage dimensions
                            />
                        )}
                        <div>{paint.name}</div>
                        <p>{t('HightlightItem_Dim')}: {paint.getDimensions()}</p>
                    </div>
                );
            })}

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

export default StoreCatalogComponent;
