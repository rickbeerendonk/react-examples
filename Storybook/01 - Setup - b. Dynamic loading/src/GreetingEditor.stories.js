/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { storiesOf } from '@storybook/react';

import { GreetingEditor } from './GreetingEditor';

storiesOf('GreetingEditor', module).add('with name', () => (
  <GreetingEditor name="Storybook" />
));
