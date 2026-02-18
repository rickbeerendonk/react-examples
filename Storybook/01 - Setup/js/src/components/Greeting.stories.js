/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import Greeting from './Greeting';

// Default export: Story metadata
export default {
  title: 'Components/Greeting',

  component: Greeting,

  // tags: Enable auto-generated documentation
  tags: ['autodocs']
};

// Stories using CSF3 (Component Story Format 3.0)

// Story: Greeting with a name prop
export const WithName = {
  // args: Props to pass to the component
  args: {
    name: 'Storybook'
  }
};

// Story: Greeting without a name
export const WithoutName = {
  args: {
    // Empty args object - name will be undefined
  }
};
