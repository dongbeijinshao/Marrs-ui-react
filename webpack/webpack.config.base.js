const path = require('path');
const baseDir = path.resolve(__dirname, '..');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  context: path.resolve(__dirname, '..'),
  resolve: {
    alias: {
      '@wemo-ui/marrs': path.resolve(baseDir, './packages/marrs-ui/src'),
      '@wemo-ui/marrs-theming': path.resolve(
        baseDir,
        './packages/marrs-ui-theming/src'
      ),
      '@wemo-ui/marrs-icons': path.resolve(
        baseDir,
        './packages/marrs-ui-icons/src'
      ),
      '@wemo-ui/marrs-docs': path.resolve(baseDir, './docs')
    },
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  },
  output: {
    path: path.join(baseDir, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
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
            plugins: [
              isDev && 'react-refresh/babel',
              '@babel/plugin-transform-runtime'
            ].filter(Boolean)
          }
        }
      },
      {
        test: /\.(css)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000000,
              name: 'images/[name]_[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          },
          'titian-markdown-loader'
        ]
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ]
};
