import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ClickMe from './ClickMe';

/* eslint-env jest */

/// Enzyme ///

it('renders 0 snapshot (enzyme)', () => {
  const wrapper = shallow(<ClickMe />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders 1 after click snapshot (enzyme)', () => {
  const wrapper = shallow(<ClickMe />);
  wrapper.find('a').simulate('click');
  expect(toJson(wrapper)).toMatchSnapshot();
});
