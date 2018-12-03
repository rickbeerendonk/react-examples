import React from 'react';
import { storiesOf } from '@storybook/react';

import Greeting from '../src/Greeting';

/* global module */

storiesOf('Greeting', module)
  .add('without name', () => <Greeting />)
  .add('with name', () => <Greeting name="Storybook" />);
