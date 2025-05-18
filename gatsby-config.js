/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Graciela Araujo`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `locales`,
      path: `./locales`,
    },
    __key: "locales"
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Fraunces`,
          file: `https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600&display=swap`,
        },
        {
          name: `Montserrat`,
          file: `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap`,
        },
      ],
    },
  },
   {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locales`, // name given to `gatsby-source-filesystem` plugin.
      languages: [`en`, `es`],
      defaultLanguage: `es`,
      siteUrl: `https://example.com`,
      // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
      trailingSlash: 'always',
      // you can pass any i18next options
      i18nextOptions: {
        interpolation: {
          escapeValue: false // not needed for react as it escapes by default
        },
        keySeparator: false,
        nsSeparator: false
      }
    }
   }
  ]
};