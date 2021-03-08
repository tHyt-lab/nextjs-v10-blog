const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = (phase) => {
  return withPWA({
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
  })
}
