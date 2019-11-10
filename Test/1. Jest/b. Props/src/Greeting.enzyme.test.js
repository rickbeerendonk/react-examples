import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Greeting from './Greeting';

configure({ adapter: new Adapter() });

/// Enzyme ///

it('throws when no name is provided (enzyme)', () => {
  expect(() => {
    shallow(<Greeting />);
  }).toThrow();
});

it('renders hello world message when name is world (enzyme)', () => {
  const wrapper = shallow(<Greeting name="World" />);

  expect(wrapper.type()).toEqual('h1');

  // Use the children...
  expect(wrapper.children().length).toEqual(3);
  expect(wrapper.childAt(0).text()).toEqual('Hello ');
  expect(wrapper.childAt(1).text()).toEqual('World');
  expect(wrapper.childAt(2).text()).toEqual('!');

  // ...or simply the text
  expect(wrapper.text()).toEqual('Hello World!');

  expect(wrapper.html()).toEqual('<h1 class="greeting">Hello World!</h1>');
});

it('renders hello world snapshot when name is world (enzyme)', () => {
  const wrapper = shallow(<Greeting name="World" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
