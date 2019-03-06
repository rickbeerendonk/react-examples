import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Greeting from '../src/Greeting';

/* global module */

storiesOf('Greeting', module)
  .add('without name', () => <Greeting />)
  .add('with name', () => <Greeting name="Storybook" />)

  .addDecorator(withKnobs)
  .add('knobs', () => <Greeting name={text('Name', 'Storybook')} />);
