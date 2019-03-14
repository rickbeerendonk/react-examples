import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Greeting from './Greeting';

configure({ adapter: new Adapter() });

/// Enzyme ///
it('renders hello world snapshot with default context color (enzyme)', () => {
  const wrapper = render(<Greeting name="World" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
