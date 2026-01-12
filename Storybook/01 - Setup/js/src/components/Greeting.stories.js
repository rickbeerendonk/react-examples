/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import Greeting from './Greeting';

export default {
  title: 'Components/Greeting',
  component: Greeting,
  tags: ['autodocs']
};

// Stories (CSF3)

export const WithName = {
  args: {
    name: 'Storybook'
  }
};

export const WithoutName = {
  args: {}
};
