import React from 'react';
import { storiesOf } from '@storybook/react';

import { GreetingEditor } from './GreetingEditor';

/* global module */

storiesOf('GreetingEditor', module).add('with name', () => (
  <GreetingEditor name="Storybook" />
));
