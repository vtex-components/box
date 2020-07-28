const path = require('path')

module.exports = {
  stories: ['../src/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        require.resolve("react-docgen-typescript-loader")
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
