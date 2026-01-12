/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ParentComponent from './MultipleComponents';

/// React Testing Library ///

describe('MultipleComponents', () => {
  it('renders parent component', () => {
    render(<ParentComponent />);

    expect(screen.getByTestId('parent')).toBeInTheDocument();
  });

  it('renders parent heading', () => {
    render(<ParentComponent />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Parent Component'
    );
  });

  it('renders multiple child components', () => {
    render(<ParentComponent />);

    const buttons = screen.getAllByTestId('child-button');
    expect(buttons).toHaveLength(2);
  });

  it('renders child component with correct titles', () => {
    render(<ParentComponent />);

    expect(
      screen.getByRole('button', { name: /Child 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Child 2/i })
    ).toBeInTheDocument();
  });

  it('calls parent handler when child is clicked', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log');
    render(<ParentComponent />);

    const buttons = screen.getAllByTestId('child-button');
    await user.click(buttons[0]);

    expect(consoleSpy).toHaveBeenCalledWith('Child clicked');

    consoleSpy.mockRestore();
  });

  it('handles multiple child clicks', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log');
    render(<ParentComponent />);

    const buttons = screen.getAllByTestId('child-button');
    await user.click(buttons[0]);
    await user.click(buttons[1]);

    expect(consoleSpy).toHaveBeenCalledTimes(2); // 2 clicks

    consoleSpy.mockRestore();
  });

  it('renders component snapshot', () => {
    const { container } = render(<ParentComponent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
