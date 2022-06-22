module.exports = {
  core: { builder: 'webpack5' },
  stories: ['../src/**/*.stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-postcss'
  ]
};
