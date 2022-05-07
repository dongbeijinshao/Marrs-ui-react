const path = require('path');
const { merge } = require('webpack-merge');

const output = merge(
  {
    performance: {
      maxEntrypointSize: 400000,
      maxAssetSize: 400000
    }
  },
  {
    entry: [path.resolve('./src/index.js')],
    mode: 'production',
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.d.ts', '.jsx']
    },
    output: {
      path: path.resolve('./dist/lib/umd'),
      filename: 'wemo-ui.marrs-icon.umd.js',
      library: 'WEMOUI_MarrsIcon',
      libraryTarget: 'umd'
    },

    externals: {
      react: 'React'
    },

    module: {
      rules: [
        {
          test: /\.(js|ts|tsx|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }]
              ],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.(css)$/,
          exclude: /(node_modules|bower_components)/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  }
);

module.exports = output;
