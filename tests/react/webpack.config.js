const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StringReplacePlugin = require("string-replace-webpack-plugin");
const path = require('path')
const kendoTasks = require('@telerik/kendo-common-tasks');

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = kendoTasks.webpackThemeConfig({
  entry: {
    app: ['./src/index']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: /src/,
        loaders: [
            ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
        ]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  plugins: [
    new StringReplacePlugin(),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['', '.js', '.sass'],
    root: [path.join(__dirname, './src')]
  }
})

// insert string replace before style loader
// tightly coupled to the order in commonTasks.webpackThemeConfig
const loaders = config.module.loaders;
loaders[loaders.length-3].loaders.splice(1, 0,
    StringReplacePlugin.replace({
        replacements: [
            {
                pattern: /:(hover|focus|active)/ig,
                replacement: function (_, state) {
                    return '.__pseudo-' + state;
                }
            }
        ]
    })
);

module.exports = config
