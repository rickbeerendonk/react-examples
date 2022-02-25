import React from 'react';
import renderer from 'react-test-renderer';
import Greeting from './Greeting';
import ColorContext from './color-context';

/// React Test Renderer ///

describe('Greeting', () => {
  it('renders hello world snapshot with context color (react-test-renderer)', () => {
    const component = renderer.create(
      <ColorContext.Provider value={{ color: 'red' }}>
        <Greeting name="World" />
      </ColorContext.Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
