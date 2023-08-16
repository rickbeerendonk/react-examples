import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import ClickMe from './ClickMe';

/// React Test Renderer ///

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
