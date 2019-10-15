import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Greeting from './Greeting';
import ColorContext from './color-context';

configure({ adapter: new Adapter() });

/// Enzyme ///
it('renders hello world with default context color (enzyme) (enzyme)', () => {
  const wrapper = render(<ColorContext.Provider value={{ color: 'red' }}><Greeting name="World" /></ColorContext.Provider>);
  expect(wrapper.prop('style').color).toEqual('red');
});

it('renders hello world snapshot with default context color (enzyme)', () => {
  const wrapper = render(<ColorContext.Provider value={{ color: 'red' }}><Greeting name="World" /></ColorContext.Provider>);
  expect(toJson(wrapper)).toMatchSnapshot();
});
