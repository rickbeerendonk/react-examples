/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MemoDemo from './MemoComponent';

/// React Testing Library ///

describe('MemoComponent', () => {
  it('renders memo component initially', () => {
    render(<MemoDemo />);

    expect(screen.getByTestId('memo-component')).toBeInTheDocument();
    expect(screen.getByText('Hello Memo')).toBeInTheDocument();
  });

  it('displays initial render count', () => {
    render(<MemoDemo />);

    expect(screen.getByTestId('render-count')).toHaveTextContent(
      'Render Count: 0'
    );
  });

  it('renders parent counter button', () => {
    render(<MemoDemo />);

    expect(screen.getByTestId('increment-parent-btn')).toBeInTheDocument();
  });

  it('renders update message button', () => {
    render(<MemoDemo />);

    expect(screen.getByTestId('update-message-btn')).toBeInTheDocument();
  });

  it('updates parent counter when button clicked', async () => {
    const user = userEvent.setup();
    render(<MemoDemo />);

    const button = screen.getByTestId('increment-parent-btn');
    await user.click(button);

    expect(screen.getByTestId('parent-counter')).toHaveTextContent(
      'Parent Counter: 1'
    );
  });

  it('updates render count when parent counter changes', async () => {
    const user = userEvent.setup();
    render(<MemoDemo />);

    const button = screen.getByTestId('increment-parent-btn');
    await user.click(button);

    expect(screen.getByTestId('render-count')).toHaveTextContent(
      'Render Count: 1'
    );
  });

  it('updates message when message button clicked', async () => {
    const user = userEvent.setup();
    render(<MemoDemo />);

    const button = screen.getByTestId('update-message-btn');
    await user.click(button);

    expect(screen.getByText('Message Updated')).toBeInTheDocument();
  });

  it('memo component receives updated props', async () => {
    const user = userEvent.setup();
    render(<MemoDemo />);

    expect(screen.getByText('Hello Memo')).toBeInTheDocument();

    const updateBtn = screen.getByTestId('update-message-btn');
    await user.click(updateBtn);

    expect(screen.getByText('Message Updated')).toBeInTheDocument();
  });

  it('renders component snapshot', () => {
    const { container } = render(<MemoDemo />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
