const path = require('path')

export default {
  entry: {
    app: './src/index.js'
  },
  extraBabelPlugins: [
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es", "style": "css" }]
  ],
  define: {
    'process.env':{},
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.API_ENV': process.env.API_ENV,
  },
  hash: true,
  // manifest: {},
  html: {
    "template": "./src/index.ejs"
  },
  commons: [
    {
      deepChildren: true,
      async: 'vendor',
      minChunks: function (module) {
        return /node_modules/.test(module.context);
      }
    },
    {
      name: 'base',
      minChunks: function (module) {
        return /node_modules/.test(module.context);
      }
    },
    // {
    //   name: "react",
    //   minChunks: function (module) {
    //     return /react/.test(module.context);
    //   }
    // },
    {
      name: 'manifest',
      minChunks: Infinity
    }
  ]
}
