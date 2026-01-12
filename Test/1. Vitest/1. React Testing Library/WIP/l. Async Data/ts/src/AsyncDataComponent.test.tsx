/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen, waitFor } from '@testing-library/react';
import AsyncDataComponent from './AsyncDataComponent';

/// React Testing Library ///

describe('AsyncDataComponent', () => {
  it('shows loading state initially', () => {
    render(<AsyncDataComponent />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders data after loading completes', async () => {
    render(<AsyncDataComponent />);

    // Wait for loading to finish
    await waitFor(() => {
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });

    expect(screen.getByTestId('data-container')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Async Data'
    );
  });

  it('renders fetched data items', async () => {
    render(<AsyncDataComponent />);

    await waitFor(() => {
      expect(screen.getByTestId('item-1')).toBeInTheDocument();
    });

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders all items in list', async () => {
    render(<AsyncDataComponent />);

    await waitFor(() => {
      const items = screen.getAllByRole('listitem');
      expect(items).toHaveLength(2);
    });
  });

  it('displays correct item IDs', async () => {
    render(<AsyncDataComponent />);

    await waitFor(() => {
      expect(screen.getByTestId('item-1')).toBeInTheDocument();
      expect(screen.getByTestId('item-2')).toBeInTheDocument();
    });
  });

  it('removes loading state after data loads', async () => {
    render(<AsyncDataComponent />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });
  });

  it('renders component snapshot after data loads', async () => {
    const { container } = render(<AsyncDataComponent />);

    await waitFor(() => {
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });
});
