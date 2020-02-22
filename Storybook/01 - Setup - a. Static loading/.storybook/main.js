/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

module.exports = {
  stories: ['../stories/index.(js|ts|mdx)'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register'
  ]
};
