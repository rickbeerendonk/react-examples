import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import MyButton from './MyButton';

/// React Test Renderer ///

describe('MyButton', () => {
  /// -- Event -- ///

  it('raises onClick event when changed (@testing-library/react)', async () => {
    const user = userEvent.setup();

    const handleClick = jest.fn();
    const { getByRole } = render(<MyButton onClick={handleClick} />);

    // trigger the onChange event for the select box
    const button = getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
