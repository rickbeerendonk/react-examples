/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import ChildrenComponent from './ChildrenComponent';

/// React Testing Library ///

describe('ChildrenComponent', () => {
  it('renders wrapper component', () => {
    render(
      <ChildrenComponent>
        <p>Test Content</p>
      </ChildrenComponent>
    );

    expect(screen.getByTestId('wrapper')).toBeInTheDocument();
  });

  it('renders children content', () => {
    render(
      <ChildrenComponent>
        <p>Test Content</p>
      </ChildrenComponent>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders children inside container', () => {
    render(
      <ChildrenComponent>
        <span data-testid="child-element">Child</span>
      </ChildrenComponent>
    );

    const container = screen.getByTestId('children-container');
    expect(container).toContainElement(screen.getByTestId('child-element'));
  });

  it('renders default title when not provided', () => {
    render(
      <ChildrenComponent>
        <p>Content</p>
      </ChildrenComponent>
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Wrapper'
    );
  });

  it('renders custom title when provided', () => {
    render(
      <ChildrenComponent title="Custom Title">
        <p>Content</p>
      </ChildrenComponent>
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Custom Title'
    );
  });

  it('renders multiple children', () => {
    render(
      <ChildrenComponent>
        <p>First Child</p>
        <p>Second Child</p>
        <p>Third Child</p>
      </ChildrenComponent>
    );

    expect(screen.getByText('First Child')).toBeInTheDocument();
    expect(screen.getByText('Second Child')).toBeInTheDocument();
    expect(screen.getByText('Third Child')).toBeInTheDocument();
  });

  it('renders complex children structure', () => {
    render(
      <ChildrenComponent title="Complex">
        <div>
          <h3>Nested Content</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
      </ChildrenComponent>
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Nested Content'
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders component snapshot', () => {
    const { container } = render(
      <ChildrenComponent title="Test">
        <p>Content</p>
      </ChildrenComponent>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
