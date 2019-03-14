import React from 'react';
import renderer from 'react-test-renderer';
import Greeting from './Greeting';

/// React Test Renderer ///

it('throws when no name is provided (react-test-renderer)', () => {
  expect(() => {
    renderer.create(<Greeting />);
  }).toThrow();
});

it('renders hello world inline snapshot when name is world (react-test-renderer)', () => {
  const component = renderer.create(<Greeting name="World" />);
  let tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
<h1
  className="greeting"
>
  Hello 
  World
  !
</h1>
`);
});

it('renders hello world snapshot when name is world (react-test-renderer)', () => {
  const component = renderer.create(<Greeting name="World" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
