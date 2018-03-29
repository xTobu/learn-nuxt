module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
  //   loaders: [
  //     {
  //   test: /\.(png|jpe?g|gif|svg)$/,
  //   loader: 'url-loader',
  //   query: {
  //     limit: 1000, // 1kB
  //     name: 'img/[name].[hash:7].[ext]'
  //   }
  // },
  // {
  //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  //   loader: 'url-loader',
  //   query: {
  //     limit: 1000, // 1kB
  //     name: 'fonts/[name].[hash:7].[ext]'
  //   }
  // }
  //   ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
