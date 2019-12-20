import React from 'react';
import renderer from 'react-test-renderer';
import EditBox from './EditBox';

/// React Test Renderer ///

/// -- Property -- ///

it('does not throw when no name is provided (react-test-renderer)', () => {
  const component = renderer.create(<EditBox />);
  let tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
<input
  onChange={[Function]}
  value=""
/>
`);
});

it('renders world inline snapshot when value is world (react-test-renderer)', () => {
  const component = renderer.create(<EditBox value="World" />);
  let tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
<input
  onChange={[Function]}
  value="World"
/>
`);
});

it('renders world snapshot when value is world (react-test-renderer)', () => {
  const component = renderer.create(<EditBox value="World" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

/// -- Event -- ///

it('raises onChange event when changed (enzyme)', () => {
  const handleChange = jest.fn();
  const component = renderer.create(
    <EditBox onChange={handleChange} name="World" />
  );
  const instance = component.root;

  // find the input
  const input = instance.find(el => el.type == 'input');

  // trigger the onChange event for the select box
  input.props.onChange({ target: { value: 'React' } });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith('React');
});
