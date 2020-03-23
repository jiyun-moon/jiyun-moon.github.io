const pkg = require('./package')
const src = 'client'

module.exports = {
  mode: 'universal',

  srcDir: src,
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'pageNotFound',
        path: '*',
        component: resolve(__dirname, src + '/pages/404.vue')
      })
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://banananuxtapp.firebaseio.com'
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('페이지 트랜지션 진입', el)
    }
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '바나나케찹의 기술블로그',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: pkg.description }
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js 프레임워크를 활용한 블로그 서비스'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Noto+Sans+KR'
      },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Changa:200'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/styles/main.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/globalComponents.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: true }
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
