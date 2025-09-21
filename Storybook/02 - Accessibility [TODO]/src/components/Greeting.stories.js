/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

import Greeting from './Greeting';

const Template = args => <Greeting {...args} />;

// Stories

export const WithName = Template.bind({});
WithName.args = { name: 'Storybook' };

export const WithoutName = Template.bind({});
WithoutName.args = {};

// Define title + info for add-ons

export default {
  title: 'Components/Greeting',
  component: Greeting
};
