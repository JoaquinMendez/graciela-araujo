import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { FaWhatsapp } from 'react-icons/fa';

import './StoreCarrouselComponent.css';
import { paints } from '../classes/paints';

const StoreCarrouselComponent = () => {
    const {t} = useTranslation();
    const images = useStaticQuery(query); // Execute the GraphQL query
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {paints.map((paint) => {
                    const imageData = images.allFile.nodes.find(node => node.relativePath.endsWith(paint.filename));
    
                    const image = getImage(imageData);
    
                    return (
                        <div key={paint.filename} className="carrousel-item">
                            {image ? (
                                <GatsbyImage
                                    image={image}
                                    alt={paint.name} // Use paint.name for accessibility
                                />
                            ) : (
                                <img
                                    src="https://via.placeholder.com/400x300?text=Image+Missing" // Generic placeholder for missing images
                                    alt={`Image for ${paint.name} not found`}
                                    style={{ width: '400px', height: '300px', objectFit: 'cover' }} // Match GatsbyImage dimensions
                                />
                            )}
                            <div className='carrousel-info'>
                                <h1>{paint.name}</h1>
                                <p>{t('HightlightItem_Dim')}: {paint.getDimensions()}</p>
                                <p>{paint.description}</p>
                                <div className='divider-carrousel'></div>
                                <div className='price-section-carrousel'>
                                    <div>{paint.getFormattedPrice()}</div>
                                    <div className='consult-button'>
                                        <a
                                            href="https://api.whatsapp.com/send?phone=59899926560"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <FaWhatsapp style={{ fontSize: '2rem' }} />
                                             <span className="consult-text">Consultar sobre esta obra</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

// 1. Define a GraphQL query to get all images from your 'images/paints' directory
// This query runs once at build time and gets data for all files in that path.
const query = graphql`
  query CarrouselImages {
    allFile(filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "paints"}}) {
      nodes {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
            layout: FIXED
          )
        }
      }
    }
  }
`;

export default StoreCarrouselComponent;

