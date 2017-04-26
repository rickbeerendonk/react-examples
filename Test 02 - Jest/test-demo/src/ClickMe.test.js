import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ClickMe from './ClickMe';

/// Enzyme ///

it('renders 0 snapshot (enzyme)', () => {
  const wrapper = shallow(<ClickMe />);
  expect(wrapper).toMatchSnapshot();
});

it('renders 1 after click snapshot (enzyme)', () => {
  const wrapper = shallow(<ClickMe />);
  wrapper.find('a').simulate('click');
  expect(wrapper).toMatchSnapshot();
});

/// React Test Renderer ///

it('renders 0 snapshot (react-test-renderer)', () => {
  const component = renderer.create(<ClickMe />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders 1 after click snapshot (react-test-renderer)', () => {
  const component = renderer.create(<ClickMe />);
  let tree = component.toJSON();
  tree.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

