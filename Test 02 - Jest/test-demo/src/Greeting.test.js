import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Greeting from './Greeting';

/// Enzyme ///

it('renders without crashing (enzyme)', () => {
  shallow(<Greeting />);
});

it('renders hello world message (enzyme)', () => {
  const wrapper = shallow(<Greeting />);

  expect(wrapper.type()).toEqual('h1');
  expect(wrapper.children().length).toEqual(1);
  expect(wrapper.childAt(0).node).toEqual('Hello World!');
  
  expect(wrapper.html()).toEqual('<h1>Hello World!</h1>');
});

it('renders hello world snapshot (enzyme)', () => {
  const wrapper = shallow(<Greeting />);
  expect(wrapper).toMatchSnapshot();
});

/// React Test Renderer ///

it('renders hello world snapshot (react-test-renderer)', () => {
  const component = renderer.create(<Greeting />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

