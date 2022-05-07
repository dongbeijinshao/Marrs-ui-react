// craco.config.js
const path = require(`path`);
// const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
  webpack: {
    alias: {
      '@wemo-ui/marrs': path.resolve('./packages/marrs-ui/src'),
      '@wemo-ui/marrs/*': path.resolve('./packages/marrs-ui/src/*'),
      '@wemo-ui/marrs-icons': path.resolve('./packages/marrs-ui-icons/src'),
      '@wemo-ui/marrs-icons/*': path.resolve('./packages/marrs-ui-icons/src/*'),
      '@wemo-ui/marrs-theming': path.resolve('./packages/marrs-ui-theming/src'),
      '@wemo-ui/marrs-theming/*': path.resolve(
        './packages/marrs-ui-theming/src/*'
      )
    }
  }
};
