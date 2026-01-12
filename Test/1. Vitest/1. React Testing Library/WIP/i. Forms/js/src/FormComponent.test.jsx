/*! European Union Public License version 1.2 !*/
/*! Copyright © 2024 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormComponent from './FormComponent';

/// React Testing Library ///

describe('FormComponent', () => {
  it('renders form with input fields', () => {
    render(<FormComponent />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Simple Form'
    );
    expect(screen.getByTestId('name-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
  });

  it('renders form labels correctly', () => {
    render(<FormComponent />);

    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Email:')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    render(<FormComponent />);

    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('updates input value on user input', async () => {
    const user = userEvent.setup();
    render(<FormComponent />);

    const nameInput = screen.getByTestId('name-input');
    await user.type(nameInput, 'John Doe');

    expect(nameInput.value).toBe('John Doe');
  });

  it('updates both fields independently', async () => {
    const user = userEvent.setup();
    render(<FormComponent />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
  });

  it('shows success message when both fields are filled', async () => {
    const user = userEvent.setup();
    render(<FormComponent />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');

    expect(screen.getByTestId('success-message')).toBeInTheDocument();
  });

  it('does not show success message when fields are empty', () => {
    render(<FormComponent />);

    expect(screen.queryByTestId('success-message')).not.toBeInTheDocument();
  });

  it('handles form submission', async () => {
    const user = userEvent.setup();
    render(<FormComponent />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const submitButton = screen.getByTestId('submit-button');

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.click(submitButton);

    // Form should still be visible after submission
    expect(screen.getByTestId('success-message')).toBeInTheDocument();
  });

  it('renders form snapshot', () => {
    const { container } = render(<FormComponent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
