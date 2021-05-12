import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Greeting from './Greeting';

/// React Testing Library: https://testing-library.com/docs/react-testing-library/intro ///

describe('Greeting', () => {
  it('throws when no name is provided (@testing-library/react)', () => {
    expect(() => {
      render(<Greeting />);
    }).toThrow();
  });

  it('renders hello world message when name is world [1] (@testing-library/react)', () => {
    const { getByText } = render(<Greeting name="World" />);

    getByText(/hello world!/i);
  });

  it('renders hello world message when name is world [2] (@testing-library/react)', () => {
    const { container } = render(<Greeting name="World" />);

    const h1 = container.querySelector('h1');

    expect(h1).toBeDefined;
    expect(h1).toContainHTML('<h1 class="greeting">Hello World!</h1>');
  });

  it('renders hello world snapshot when name is world (@testing-library/react)', () => {
    const { container } = render(<Greeting name="World" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders hello world inline-snapshot when name is world (@testing-library/react)', () => {
    const { container } = render(<Greeting name="World" />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <h1
        class="greeting"
      >
        Hello 
        World
        !
      </h1>
    `);
  });
});
