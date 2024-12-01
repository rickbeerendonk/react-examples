/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClickMe from './ClickMe';

describe('ClickMe', () => {
  it('renders 0 snapshot (@testing-library/react)', () => {
    const { getByRole } = render(<ClickMe />);
    const btn = getByRole('button');
    expect(btn).toMatchSnapshot();
  });

  it('renders 1 after click snapshot (@testing-library/react)', () => {
    const { getByRole } = render(<ClickMe />);
    const btn = getByRole('button');
    fireEvent.click(btn);
    expect(btn).toMatchSnapshot();
  });

  it('renders 0 (@testing-library/react)', () => {
    const { getByText } = render(<ClickMe />);
    getByText(/this button has been clicked 0 times/i);
  });

  it('renders 1 after click (@testing-library/react)', () => {
    const { getByRole, getByText } = render(<ClickMe />);
    const btn = getByRole('button');
    fireEvent.click(btn);
    getByText(/this button has been clicked 1 times/i);
  });
});
