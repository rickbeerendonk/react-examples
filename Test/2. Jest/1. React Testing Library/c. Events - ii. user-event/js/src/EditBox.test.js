import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('raises onChange event when changed (@testing-library/react)', async () => {
    const user = userEvent.setup();

    const handleChange = jest.fn();
    const { container } = render(
      <EditBox onChange={handleChange} name="World" />
    );

    // trigger the onChange event for the select box
    const input = container.firstChild;
    await user.type(input, 'React');

    expect(handleChange).toHaveBeenCalledTimes(5);
    expect(handleChange).toHaveBeenCalledWith('R');
    expect(handleChange).toHaveBeenCalledWith('e');
    expect(handleChange).toHaveBeenCalledWith('a');
    expect(handleChange).toHaveBeenCalledWith('c');
    expect(handleChange).toHaveBeenCalledWith('t');
  });
});
