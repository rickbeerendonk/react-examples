/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
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
