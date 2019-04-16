var webpackConfig = require('./webpack.config.js');
var config = function(config) {
  var pathx = 'src/**/*.spec.js/';
  return config.set({
    basePath: '',
    // browsers: [
    //   'PhantomJS',
    // ],
    browsers: ['PhantomJS2'],
    frameworks: [
      'jasmine',
    ],
    files: [
      pathx
    ],

    preprocessors: {
      'src/**/*.js': [
        'webpack',
        'sourcemap',
      ],
      pathx : [
        'webpack',
        'sourcemap'
      ],
    },
    /**
     *  1) We need to define that these variables are available globally.
     */
    webpack: Object.assign(
      {},
      webpackConfig,
      {
        externals: {
          'react/addons': true,
          'react/lib/ExecutionEnvironment': true,
          'react/lib/ReactContext': true,
        },
      }
    ),
    /**
     *  2) Even if you're using express, the webpackServer option is required to compile code through karma-webpack.
     */
    webpackServer: {
      noInfo: true,
    },
    reporters: [
      'progress',
    ],
    colors: true,
    autoWatch: true,
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-phantomjs2-launcher',
    ],
  });
};
module.exports = config;
