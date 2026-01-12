/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import EditBox from './EditBox';

export default {
  title: 'Components/EditBox',
  component: EditBox,
  argTypes: {
    onChange: { action: 'changed' }
  },
  tags: ['autodocs']
};

// Stories (CSF3)

export const WithValue = {
  args: {
    value: 'Storybook'
  }
};
