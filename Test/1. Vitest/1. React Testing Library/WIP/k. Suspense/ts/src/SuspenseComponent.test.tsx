/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor } from '@testing-library/react';
import SuspenseDemo from './SuspenseComponent';

/// React Testing Library ///

describe('SuspenseComponent', () => {
  it('renders suspense wrapper', () => {
    render(<SuspenseDemo />);

    expect(screen.getByTestId('suspense-wrapper')).toBeInTheDocument();
  });

  it('renders heading', () => {
    render(<SuspenseDemo />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Suspense Demo'
    );
  });

  it('shows fallback while loading', async () => {
    render(<SuspenseDemo />);

    // Fallback should be visible initially
    const fallbackElement = screen.getByTestId('fallback-content');
    expect(fallbackElement).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for lazy component to load
    await waitFor(() => {
      expect(screen.getByTestId('lazy-content')).toBeInTheDocument();
    });
  });

  it('renders lazy component after loading completes', async () => {
    render(<SuspenseDemo />);

    await waitFor(() => {
      expect(screen.getByTestId('lazy-content')).toBeInTheDocument();
    });

    expect(screen.getByText('Lazy Loaded Content')).toBeInTheDocument();
  });

  it('removes fallback after lazy component loads', async () => {
    render(<SuspenseDemo />);

    // Initially might see fallback (depending on timing)
    // Wait for lazy component to load and replace fallback
    await waitFor(() => {
      expect(screen.queryByTestId('fallback-content')).not.toBeInTheDocument();
      expect(screen.getByTestId('lazy-content')).toBeInTheDocument();
    });
  });

  it('renders component snapshot after loading', async () => {
    const { container } = render(<SuspenseDemo />);

    await waitFor(() => {
      expect(screen.getByTestId('lazy-content')).toBeInTheDocument();
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
