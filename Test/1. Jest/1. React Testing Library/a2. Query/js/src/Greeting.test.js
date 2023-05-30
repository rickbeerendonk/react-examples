import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Greeting from './Greeting';

/// React Testing Library ///

describe('Greeting', () => {
  it('Query examples - h1', () => {
    const { container, getByRole, getByText, getByTestId } = render(
      <Greeting name="World" />
    );

    expect(getByRole('heading')).toBeInTheDocument();

    expect(getByText('Hello World!')).toBeInTheDocument();

    expect(getByTestId('greeting-testid')).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      <h1
        class="greeting"
        data-testid="greeting-testid"
      >
        Hello World!
      </h1>
    `);
  });

  it('Query examples - input', () => {
    const { getByRole, getByLabelText } = render(<Greeting name="World" />);

    expect(getByRole('textbox')).toBeInTheDocument();

    expect(getByLabelText('Name:')).toBeInTheDocument();
  });
});
