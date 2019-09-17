const path = require('path')

export default {
  entry: {
    app: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'redux',
      'react-router-dom',
      'react-redux',
      'axios'
    ],
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
      names: ['vendor'],
      minChunks: Infinity,
      filename: 'vendor.bundle.js',
    },
    {
      name: 'manifest',
      minChunks: Infinity
    }
  ]
}
