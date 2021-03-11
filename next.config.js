const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

const config = {
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: ['node_modules'],
    }
    return config
  },
}

module.exports = process.env.NODE_ENV === 'development' ? config : withPWA(config)
