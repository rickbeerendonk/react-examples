import React from 'react';
import renderer from 'react-test-renderer';
import ClickMe from './ClickMe';

/// React Test Renderer ///

describe('ClickMe', () => {
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
});
