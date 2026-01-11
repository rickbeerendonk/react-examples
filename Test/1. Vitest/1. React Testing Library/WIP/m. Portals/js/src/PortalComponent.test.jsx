/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PortalComponent from './PortalComponent';

/// React Testing Library ///

describe('PortalComponent', () => {
  it('renders portal demo container', () => {
    render(<PortalComponent />);

    expect(screen.getByTestId('portal-demo')).toBeInTheDocument();
  });

  it('renders heading', () => {
    render(<PortalComponent />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Portal Demo'
    );
  });

  it('renders open modal button', () => {
    render(<PortalComponent />);

    expect(screen.getByTestId('open-modal-btn')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Open Modal/i })
    ).toBeInTheDocument();
  });

  it('does not show modal initially', () => {
    render(<PortalComponent />);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('shows modal when button is clicked', async () => {
    const user = userEvent.setup();
    render(<PortalComponent />);

    const openButton = screen.getByTestId('open-modal-btn');
    await user.click(openButton);

    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });

  it('renders modal content in portal', async () => {
    const user = userEvent.setup();
    render(<PortalComponent />);

    const openButton = screen.getByTestId('open-modal-btn');
    await user.click(openButton);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Modal Content'
    );
    expect(
      screen.getByText('This is rendered in a portal')
    ).toBeInTheDocument();
  });

  it('renders close button in portal', async () => {
    const user = userEvent.setup();
    render(<PortalComponent />);

    await user.click(screen.getByTestId('open-modal-btn'));

    expect(screen.getByTestId('close-modal-btn')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Close/i })).toBeInTheDocument();
  });

  it('closes modal when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<PortalComponent />);

    await user.click(screen.getByTestId('open-modal-btn'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    await user.click(screen.getByTestId('close-modal-btn'));
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  it('renders component snapshot with modal open', async () => {
    const user = userEvent.setup();
    const { container } = render(<PortalComponent />);

    await user.click(screen.getByTestId('open-modal-btn'));

    expect(container.firstChild).toMatchSnapshot();
  });
});
