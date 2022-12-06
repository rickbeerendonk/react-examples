/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

import { GreetingEditor } from './GreetingEditor';

const Template = args => <GreetingEditor {...args} />;

// Stories

export const Default = Template.bind({});
Default.args = {};

// Define title + info for add-ons

export default {
  title: 'Containers/GreetingEditor',
  component: GreetingEditor
};
