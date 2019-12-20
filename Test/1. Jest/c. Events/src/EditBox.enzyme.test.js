import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import EditBox from './EditBox';

configure({ adapter: new Adapter() });

/// Enzyme ///

/// -- Property -- ///

it('Does not throw when no name is provided (enzyme)', () => {
  const wrapper = shallow(<EditBox />);
  expect(wrapper.html()).toEqual('<input value=""/>');
});

it('renders name when provided (enzyme)', () => {
  const wrapper = shallow(<EditBox value="World" />);

  expect(wrapper.type()).toEqual('input');

  // Use the property...
  expect(wrapper.at(0).props().value).toEqual('World');

  // ...or the whole node
  expect(wrapper.html()).toEqual('<input value="World"/>');
});

it('renders world snapshot when name is world (enzyme)', () => {
  const wrapper = shallow(<EditBox value="World" />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

/// -- Event -- ///

it('raises onChange event when changed (enzyme)', () => {
  const handleChange = jest.fn();
  const wrapper = shallow(<EditBox onChange={handleChange} name="World" />);

  wrapper.find('input').simulate('change', { target: { value: 'React' } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith('React');
});
