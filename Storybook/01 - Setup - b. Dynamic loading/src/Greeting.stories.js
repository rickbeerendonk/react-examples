/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global module */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Greeting from './Greeting';

storiesOf('Greeting', module)
  .add('without name', () => <Greeting />, {
    info: {
      text: `
            Component won't show "Hello !" when there is no name, but instead doesn't show *anything* at all.
          `
    }
  })
  .add('with name', () => <Greeting name="Storybook" />)
  .add('knobs', () => <Greeting name={text('Name', 'Storybook')} />);
