/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import EditBox from './EditBox';

// Default export: Story metadata
export default {
  title: 'Components/EditBox',

  component: EditBox,

  // tags: Enable auto-generated documentation
  tags: ['autodocs']
};

// Stories using CSF3 (Component Story Format 3.0)

// Story: EditBox with an initial value
export const WithValue = {
  // args: Props to pass to the component
  args: {
    value: 'Storybook'
  }
};
