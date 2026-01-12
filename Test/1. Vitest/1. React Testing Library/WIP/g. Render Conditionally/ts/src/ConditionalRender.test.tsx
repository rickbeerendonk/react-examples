/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import ConditionalRender from './ConditionalRender';

/// React Testing Library ///

describe('ConditionalRender', () => {
  it('renders message when show is true', () => {
    render(<ConditionalRender show={true} message="Test Message" />);

    expect(screen.getByTestId('conditional-message')).toBeInTheDocument();
    expect(screen.getByText('Test Message')).toBeInTheDocument();
  });

  it('does not render message when show is false', () => {
    render(<ConditionalRender show={false} message="Test Message" />);

    expect(screen.queryByTestId('conditional-message')).not.toBeInTheDocument();
    expect(screen.queryByText('Test Message')).not.toBeInTheDocument();
  });

  it('renders hidden element when show is false', () => {
    render(<ConditionalRender show={false} />);

    expect(screen.getByTestId('hidden-message')).toBeInTheDocument();
  });

  it('uses default message when message prop is not provided', () => {
    render(<ConditionalRender show={true} />);

    expect(screen.getByText('Visible')).toBeInTheDocument();
  });

  it('shows title heading', () => {
    render(<ConditionalRender show={true} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Conditional Rendering'
    );
  });

  it('renders snapshot when show is true', () => {
    const { container } = render(
      <ConditionalRender show={true} message="Snapshot Test" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
