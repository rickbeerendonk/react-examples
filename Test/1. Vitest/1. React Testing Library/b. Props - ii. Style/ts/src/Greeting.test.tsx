import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Greeting from './Greeting.tsx';

/// React Testing Library: https://testing-library.com/docs/react-testing-library/intro ///

describe('Greeting', () => {
  it('renders black when not selected (@testing-library/react)', () => {
    const { container } = render(<Greeting name="World" />);
    const h1 = container.querySelector('h1');

    expect(h1).toHaveStyle('color: rgb(0, 0, 0)');
  });

  it('renders red when selected (@testing-library/react)', () => {
    const { container } = render(<Greeting name="World" selected />);
    const h1 = container.querySelector('h1');

    expect(h1).toHaveStyle('color: rgb(255, 0, 0)');
  });
});
