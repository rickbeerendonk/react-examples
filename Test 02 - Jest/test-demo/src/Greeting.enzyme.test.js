import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Greeting from './Greeting';

/* eslint-env jest */

configure({ adapter: new Adapter() });

/// Enzyme ///

it('renders without crashing (enzyme)', () => {
  shallow(<Greeting />);
});

it('renders hello world message (enzyme)', () => {
  const wrapper = shallow(<Greeting />);

  expect(wrapper.type()).toEqual('h1');
  expect(wrapper.children().length).toEqual(1);
  expect(wrapper.childAt(0).text()).toEqual('Hello World!');

  expect(wrapper.html()).toEqual('<h1>Hello World!</h1>');
});

it('renders hello world snapshot (enzyme)', () => {
  const wrapper = shallow(<Greeting />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
