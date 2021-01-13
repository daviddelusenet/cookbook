module.exports = {
  siteMetadata: {
    title: 'Cookbook',
    description: 'Personal cookbook of David de Lusenet',
    author: 'David de Lusenet',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Cookbook',
        short_name: 'Cookbook',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        icon: 'src/images/icon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/App.tsx`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
  ],
}
