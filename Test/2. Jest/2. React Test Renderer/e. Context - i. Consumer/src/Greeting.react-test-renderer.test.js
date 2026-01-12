import React from 'react';
import renderer from 'react-test-renderer';
import Greeting from './Greeting';

/// React Test Renderer ///

describe('Greeting', () => {
  it('renders hello world snapshot with default context color (react-test-renderer)', () => {
    const component = renderer.create(<Greeting name="World" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
