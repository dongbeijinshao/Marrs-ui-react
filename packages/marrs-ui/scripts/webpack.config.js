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
      alias: {
        '@wemo-ui/marrs': path.resolve('./src'),
        '@wemo-ui/marrs-theming': path.resolve('../marrs-ui-theming/src'),
        '@wemo-ui/marrs-icons': path.resolve('../marrs-ui-icons/src')
      },
      extensions: ['.js', '.ts', '.tsx', '.jsx']
    },
    output: {
      path: path.resolve('./dist/lib/umd'),
      filename: 'wemo-ui.marrs.umd.js',
      library: 'WEMOUI_Marrs',
      libraryTarget: 'umd'
    },

    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
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
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript'
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
console.log('开始制作umd bundle');
module.exports = output;
