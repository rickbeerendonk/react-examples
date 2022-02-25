import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import ClickMe from './ClickMe';

configure({ adapter: new Adapter() });

/// Enzyme ///

describe('ClickMe', () => {
  it('renders 0 (enzyme)', () => {
    const wrapper = shallow(<ClickMe />);
    expect(wrapper.find('a').text()).toBe('This link has been clicked 0 times');
  });

  it('renders 0 snapshot (enzyme)', () => {
    const wrapper = shallow(<ClickMe />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders 1 after click (enzyme)', () => {
    const wrapper = shallow(<ClickMe />);
    wrapper.find('a').simulate('click');
    expect(wrapper.find('a').text()).toBe('This link has been clicked 1 times');
  });

  it('renders 1 after click snapshot (enzyme)', () => {
    const wrapper = shallow(<ClickMe />);
    wrapper.find('a').simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
