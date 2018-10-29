'use strict';
// Template version: 1.2.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

http://192.168.1.27:10008/boot-pub-survey-video/survey_single/v1/query/boot-xcx-survey-api
module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/acdnt-cert': {
        // target: 'http://192.168.1.69:18081',      // 志猛个人服务器
        // target: 'http://192.168.1.154:80',      // 和鹏个人服务器
        //target: 'http://172.16.1.225:8080',//元鹏
        target: 'https://sgrds.bjjtgl.gov.cn', // 生产
        //target: 'https://mock.zhongchebaolian.com', // 测试
        changeOrigin: true,
        pathRewrite: {
          '^/acdnt-cert': '/acdnt-cert'
        }
      }
    },

    // Various Dev Server settings
    // host: 'localhost', // can be overwritten by process.env.HOST
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8084, // can be overwritten by process.env.HOST, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/electrocar/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist/electrocar'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/electrocar/',

    /**
     * Source Maps
     */
    

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static images for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
