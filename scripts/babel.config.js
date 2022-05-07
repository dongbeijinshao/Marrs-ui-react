// const path = require('path');

let defaultPresets;

if (process.env.BABEL_ENV === 'es') {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        bugfixes: true,
        modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV)
          ? false
          : 'commonjs'
      }
    ]
  ];
}

// console.log("path.resolve('')", path.resolve('../marrs-ui-icons'));

// const defaultAlias = {
//   '@wemo-ui/marrs': './src',
//   '@wemo-ui/marrs-icons': '../marrs-ui-icons',
//   '@wemo-ui/marrs-theming': '../marrs-ui-theming'
// };

const productionPlugins = [
  '@babel/plugin-transform-react-constant-elements'
  // [
  //   'babel-plugin-module-resolver',
  //   {
  //     root: ['./'],
  //     alias: defaultAlias
  //   }
  // ]
  // 'babel-plugin-transform-dev-warning',
  // ['babel-plugin-react-remove-properties', { properties: ['data-test'] }],
  // [
  //   'babel-plugin-transform-react-remove-prop-types',
  //   {
  //     mode: 'unsafe-wrap'
  //   }
  // ]
];

module.exports = {
  comments: false,
  presets: defaultPresets.concat([
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript'
  ]),
  plugins: [
    // ['babel-plugin-macros'],
    'babel-plugin-optimize-clsx',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    // any package needs to declare 7.4.4 as a runtime dependency. default is ^7.0.0
    ['@babel/plugin-transform-runtime', { version: '^7.4.4' }],
    // for IE 11 support
    '@babel/plugin-transform-object-assign'
  ],
  ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
  env: {
    cjs: {
      plugins: productionPlugins
    },
    development: {
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            alias: {
              modules: './modules'
            }
          }
        ]
      ]
    },

    esm: {
      plugins: [
        ...productionPlugins,
        ['@babel/plugin-transform-runtime', { useESModules: true }]
      ]
    },
    es: {
      plugins: [
        ...productionPlugins,
        ['@babel/plugin-transform-runtime', { useESModules: true }]
      ]
    },
    production: {
      plugins: [
        ...productionPlugins,
        ['@babel/plugin-transform-runtime', { useESModules: true }]
      ]
    },
    'production-umd': {
      plugins: [
        ...productionPlugins,
        ['@babel/plugin-transform-runtime', { useESModules: true }]
      ]
    }
  }
};
