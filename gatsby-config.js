module.exports = {
  siteMetadata: {
    title: `设计系统`,
    author: `Jun`,
    description: `设计系统相关的教程、文章、书籍、案例和工具。`,
    siteUrl: `https://designsystem.cc/`,
    social: {
      github: `leadream`,
    },
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-stylus',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 640,
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    // 谷歌统计插件
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-121774282-3`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    }
  ]
}