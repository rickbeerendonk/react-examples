/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global module */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import EditBox from './EditBox';

storiesOf('Components/EditBox', module)
  .add('with value', () => <EditBox onChange={() => {}} value="Test" />)
  .add('with onChange', () => <EditBox onChange={action('editbox-change')} />);
