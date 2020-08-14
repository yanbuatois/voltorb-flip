const path = require('path');

module.exports = ['source-map'].map(devtool => ({
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'voltorbFlip',
    libraryTarget: 'commonjs2',
  },
  devtool,
  optimization: {
    runtimeChunk: true,
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "browsers": [">0.25%", "not ie 11", "not op_mini all"],
                    "node": "8",
                  },
                },
              ],
            ],
            plugins: ["@babel/plugin-syntax-class-properties", "@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
}));
