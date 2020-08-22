/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global module */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { GreetingEditor } from './GreetingEditor';

storiesOf('Containers/GreetingEditor', module).add('Default', () => (
  <GreetingEditor />
));
