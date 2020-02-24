/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import EditBox from '../src/EditBox';
import Greeting from '../src/Greeting';
import { GreetingEditor } from '../src/GreetingEditor';

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

storiesOf('EditBox', module)
  .add('with value', () => <EditBox onChange={() => {}} value="Test" />)
  .add('with onChange', () => <EditBox onChange={action('editbox-change')} />);

storiesOf('GreetingEditor', module).add('with name', () => (
  <GreetingEditor name="Storybook" />
));
