/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ClickMe from './ClickMe.jsx';

describe('ClickMe', () => {
  it('renders 0 snapshot (@testing-library/react)', () => {
    const { getByRole } = render(<ClickMe />);
    const btn = getByRole('button');
    expect(btn).toMatchSnapshot();
  });

  it('renders 1 after click snapshot (@testing-library/react)', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<ClickMe />);
    const btn = getByRole('button');
    await user.click(btn);
    expect(btn).toMatchSnapshot();
  });

  it('renders 0 (@testing-library/react)', () => {
    const { getByText } = render(<ClickMe />);
    expect(
      getByText('This button has been clicked 0 times')
    ).toBeInTheDocument();
  });

  it('renders 1 after click (@testing-library/react)', async () => {
    const user = userEvent.setup();
    const { getByRole, getByText } = render(<ClickMe />);
    const btn = getByRole('button');
    await user.click(btn);
    expect(
      getByText('This button has been clicked 1 times')
    ).toBeInTheDocument();
  });
});
