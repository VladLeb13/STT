const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
      loaderOptions: {
        sass: {
          additionalData: '@import "@/disigns/index.scss";'
        }
      }
    },
  chainWebpack(config) {

    // Don't allow importing .vue files without the extension, as
		// it's necessary for some Vetur autocompletions.
		config.resolve.extensions.delete(".vue")
  }
})
