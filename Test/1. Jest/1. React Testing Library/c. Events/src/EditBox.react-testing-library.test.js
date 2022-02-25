import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditBox from './EditBox';

/// React Test Renderer ///

describe('EditBox', () => {
  /// -- Property -- ///

  it('does not throw when no name is provided (@testing-library/react)', () => {
    expect(() => {
      render(<EditBox />);
    }).not.toThrow();
  });

  it('renders world inline snapshot when value is world (@testing-library/react)', () => {
    const { container } = render(<EditBox value="World" />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <input
        value="World"
      />
    `);
  });

  it('renders world snapshot when value is world (@testing-library/react)', () => {
    const { container } = render(<EditBox value="World" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  /// -- Event -- ///

  it('raises onChange event when changed (@testing-library/react)', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <EditBox onChange={handleChange} name="World" />
    );

    // trigger the onChange event for the select box
    fireEvent.change(container.firstChild, { target: { value: 'React' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('React');
  });
});
