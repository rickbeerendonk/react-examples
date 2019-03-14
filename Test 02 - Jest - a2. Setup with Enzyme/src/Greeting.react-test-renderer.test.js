import React from 'react';
import renderer from 'react-test-renderer';
import Greeting from './Greeting';

/// React Test Renderer ///

it('renders hello world snapshot (react-test-renderer)', () => {
  const component = renderer.create(<Greeting />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
