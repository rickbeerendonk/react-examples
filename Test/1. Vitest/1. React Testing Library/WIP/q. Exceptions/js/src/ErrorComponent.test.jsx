/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import ErrorComponent from './ErrorComponent';

/// React Testing Library ///

describe('ErrorComponent', () => {
  it('renders content when no error', () => {
    render(
      <ErrorComponent hasError={false}>
        <p>Success Content</p>
      </ErrorComponent>
    );

    expect(screen.getByTestId('error-component')).toBeInTheDocument();
    expect(screen.getByText('Success Content')).toBeInTheDocument();
  });

  it('throws error when hasError is true', () => {
    expect(() => {
      render(
        <ErrorComponent hasError={true}>
          <p>This should not render</p>
        </ErrorComponent>
      );
    }).toThrow('Component error: Something went wrong');
  });

  it('throws specific error message', () => {
    expect(() => {
      render(
        <ErrorComponent hasError={true}>
          <p>Content</p>
        </ErrorComponent>
      );
    }).toThrow(new Error('Component error: Something went wrong'));
  });

  it('renders without throwing when error condition is false', () => {
    expect(() => {
      render(
        <ErrorComponent hasError={false}>
          <p>No error here</p>
        </ErrorComponent>
      );
    }).not.toThrow();
  });

  it('renders multiple children when no error', () => {
    render(
      <ErrorComponent hasError={false}>
        <p>First</p>
        <p>Second</p>
        <p>Third</p>
      </ErrorComponent>
    );

    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('renders component snapshot when no error', () => {
    const { container } = render(
      <ErrorComponent hasError={false}>
        <p>Content</p>
      </ErrorComponent>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
