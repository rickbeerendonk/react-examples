import React from 'react';
import renderer from 'react-test-renderer';
import Greeting from './Greeting';

/// React Test Renderer ///

describe('Greeting', () => {
  it('renders hello world snapshot', () => {
    const component = renderer.create(<Greeting />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
