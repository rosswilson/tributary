const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const buildDir = path.join(__dirname, 'public/build')
const nodeModulesDir = path.join(__dirname, 'node_modules')
const indexFile = path.join(__dirname, 'src/index.js')

const config = {
  entry: {
    app: indexFile,
    vendor: [
      'react',
      'react-dom',
      'react-tap-event-plugin',
      'react-hot-loader',
      'babel-polyfill',
      'jquery',
      'bootstrap/dist/js/bootstrap.min.js',
      'redux',
      'react-router-redux',
      'redux-logger',
      'redux-thunk',
      'react-router',
      'classnames',
      'axios',
      'js-base64',
      'moment',
      'react-bootstrap',
      'react-modal',
      'react-motion',
      'react-notification'
    ]
  },
  output: {
    path: buildDir,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: nodeModulesDir,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    getImplicitGlobals(),
    setNodeEnv(),
    new ExtractTextPlugin('app.styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'app.vendor.bundle.js'
    }),
    uglify()
  ]
}

function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
}

function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
}

function uglify() {
  return new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    comments: true,
    compress: {
      warnings: false
    },
    mangle: {
      except: ['$'],
      'screw_ie8': true,
      'keep_fnames': false
    }
  })
}

module.exports = config
