/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LifecycleComponent from './LifecycleComponent';

/// React Testing Library ///

describe('LifecycleComponent', () => {
  it('renders with title prop', () => {
    render(<LifecycleComponent title="Test Component" />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Test Component'
    );
  });

  it('sets mounted status on initial render', () => {
    render(<LifecycleComponent title="Test" />);

    expect(screen.getByTestId('mounted-status')).toHaveTextContent(
      'Component is mounted'
    );
  });

  it('displays initial count value', () => {
    render(<LifecycleComponent title="Test" />);

    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 0');
  });

  it('renders increment button', () => {
    render(<LifecycleComponent title="Test" />);

    expect(screen.getByTestId('increment-button')).toBeInTheDocument();
  });

  it('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    render(<LifecycleComponent title="Test" />);

    const button = screen.getByTestId('increment-button');
    await user.click(button);

    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 1');
  });

  it('increments count multiple times', async () => {
    const user = userEvent.setup();
    render(<LifecycleComponent title="Test" />);

    const button = screen.getByTestId('increment-button');
    await user.click(button);
    await user.click(button);
    await user.click(button);

    expect(screen.getByTestId('count-display')).toHaveTextContent('Count: 3');
  });

  it('calls useEffect hook on mount', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    render(<LifecycleComponent title="Test" />);

    expect(consoleSpy).toHaveBeenCalledWith('Component mounted');

    consoleSpy.mockRestore();
  });

  it('calls useEffect dependency on count change', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log');
    render(<LifecycleComponent title="Test" />);

    const button = screen.getByTestId('increment-button');
    await user.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('Count updated:', 1);

    consoleSpy.mockRestore();
  });

  it('renders component snapshot', () => {
    const { container } = render(<LifecycleComponent title="Test" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
