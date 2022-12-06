/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

import EditBox from './EditBox';

const Template = args => <EditBox {...args} />;

// Stories

export const WithValue = Template.bind({});
WithValue.args = { value: 'Storybook' };

// Define title + info for add-ons

export default {
  title: 'Components/EditBox',
  component: EditBox,
  argTypes: { onChange: { action: 'changed' } }
};
