import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Greeting from './Greeting';

configure({ adapter: new Adapter() });

/// Enzyme ///

it('renders hello world snapshot (react-test-renderer)', () => {
  const component = shallow(<Greeting />);
  let tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
