const path = require('path');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

const WebpackDevServer = require('webpack-dev-server');

const base = require('../webpack/webpack.config.base');

const chalk = require('chalk');

const baseDir = path.resolve(__dirname, '..');

const isBuild = process.env.DOCS_ENV === 'build';

const APP_NAME = process.env.APP_NAME || 'desktop';

const APP_PORT = process.env.APP_PORT || 3000;

const getConfig = () => {
  const config = {
    entry: [path.resolve(baseDir, `./docs/${APP_NAME}/index.jsx`)],
    output: {
      path: path.join(baseDir, `dist/${APP_NAME}/static`),
      filename: 'bundle.js',
      publicPath: !isBuild ? '/' : '/static/'
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(baseDir, `./docs/common/image/`),
            to: path.resolve(baseDir, `./dist/${APP_NAME}/public/`)
          }
        ]
      }),
      new HtmlWebpackPlugin({
        inject: 'body',
        filename: !isBuild ? 'index.html' : '../index.html',
        template: path.resolve(baseDir, `./docs/${APP_NAME}/index.html`)
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(`${!isBuild ? 'development' : 'production'}`)
        }
      })
    ],
    target: 'web',
    mode: !isBuild ? 'development' : 'production'
  };
  return { ...base, ...config };
};

const runCompiler = (compiler) => {
  const devServer = new WebpackDevServer(compiler, {
    open: true,
    stats: {
      colors: true
    },
    contentBase: baseDir,
    historyApiFallback: true
  });
  devServer.listen(APP_PORT, '0.0.0.0', (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(
      chalk.cyan('启动开发服务器...\n', `http://localhost:${APP_PORT}/`)
    );
    console.log(APP_NAME);
    if (APP_NAME === 'desktop') {
      console.log(
        chalk.yellowBright.underline(
          `请另开控制台,执行命令:yarn start:docs:mobile，开启mobile应用`
        )
      );
    }
  });
  return;
};

const init = () => {
  const compiler = webpack(getConfig());
  if (!isBuild) {
    runCompiler(compiler);
  } else {
    compiler.run((err) => {
      if (!err) {
        console.log(`✨ ${APP_NAME} 完成打包`);
      } else {
        console.log(`💣  ${APP_NAME} 打包失败, ${err}`);
      }
    });
  }
};

init();
