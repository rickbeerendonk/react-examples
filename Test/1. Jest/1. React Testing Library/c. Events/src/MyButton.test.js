import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyButton from './MyButton';

/// React Test Renderer ///

describe('MyButton', () => {
  /// -- Event -- ///

  it('raises onClick event when changed (@testing-library/react)', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<MyButton onClick={handleClick} />);

    // trigger the onChange event for the select box
    const button = getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
