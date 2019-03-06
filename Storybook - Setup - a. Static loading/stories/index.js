import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import EditBox from '../src/EditBox';
import Greeting from '../src/Greeting';
import GreetingEditor from '../src/GreetingEditor';

/* global module */

storiesOf('Greeting', module)
  .addDecorator(withKnobs)
  .add('without name', () => <Greeting />)
  .add('with name', () => <Greeting name="Storybook" />)
  .add('knobs', () => <Greeting name={text('Name', 'Storybook')} />);

storiesOf('EditBox', module)
  .add('with value', () => <EditBox value="Test" />)
  .add('with onChange', () => <EditBox onChange={action('editbox-change')} />);

storiesOf('GreetingEditor', module).add('with name', () => (
  <GreetingEditor name="Storybook" />
));
