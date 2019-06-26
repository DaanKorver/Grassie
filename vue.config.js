const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    publicPath: '/webshopbox/',
    configureWebpack: {
        plugins: [
          new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            // Required - Routes to render.
            routes: [ '/', '/products', '/about', '/contact'],
          })
        ]
       }
}