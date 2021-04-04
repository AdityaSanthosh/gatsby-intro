/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Personal Portfolio Website",
    author: "Santhosh Aditya"
  },
  plugins: ['gatsby-plugin-sass',
  {
    resolve:'gatsby-source-filesystem',
    options:{
      name:'src',
      path:`${__dirname}/src/`
    }
  },
  'gatsby-plugin-sharp',
  {
    resolve:'gatsby-transformer-remark',
    options : {
      plugins : [
        {
          resolve: 'gatsby-source-contentful',
          options:{
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
          }
        },
        'gatsby-remark-relative-images',
        {
          resolve: 'gatsby-remark-images',
          options:{
            maxWidth:550,
            linkImagesToOriginal:false
          }
        }
      ]
    }
  }
  

],
}
