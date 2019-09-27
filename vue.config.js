module.exports = {

  publicPath: "/",

  outputDir: "dist",

  assetsDir: "static",

  lintOnSave: process.env.NODE_ENV === "development",

  productionSourceMap: false,

  devServer: {

      port: 7000,

      open: true,

      overlay: {

          warnings: false,

          errors: true

      },
      // proxy:'http://127.0.0.1:80/api/test.php'
      // proxy: {

      //     "/devapi": {

      //         target: "http://127.0.0.1:80/api",

      //         changeOrigin: true,

      //         pathRewrite: {

      //             "^/devapi": ""

      //         }

      //     }

      // }

  }

};