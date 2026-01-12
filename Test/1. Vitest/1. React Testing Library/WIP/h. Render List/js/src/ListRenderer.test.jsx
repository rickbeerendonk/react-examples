/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import ListRenderer from './ListRenderer';

/// React Testing Library ///

describe('ListRenderer', () => {
  const mockItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  it('renders list with items', () => {
    render(<ListRenderer items={mockItems} />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Item List'
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('renders all items in the list', () => {
    render(<ListRenderer items={mockItems} />);

    mockItems.forEach(item => {
      expect(screen.getByTestId(`item-${item.id}`)).toHaveTextContent(
        item.name
      );
    });
  });

  it('renders correct number of list items', () => {
    render(<ListRenderer items={mockItems} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  it('renders empty message when no items provided', () => {
    render(<ListRenderer items={[]} />);

    expect(screen.getByTestId('empty-list')).toBeInTheDocument();
    expect(screen.getByText('No items available')).toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('renders single item correctly', () => {
    render(<ListRenderer items={[{ id: 1, name: 'Single Item' }]} />);

    expect(screen.getByText('Single Item')).toBeInTheDocument();
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
  });

  it('renders snapshot with items', () => {
    const { container } = render(<ListRenderer items={mockItems} />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders snapshot with empty list', () => {
    const { container } = render(<ListRenderer items={[]} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
