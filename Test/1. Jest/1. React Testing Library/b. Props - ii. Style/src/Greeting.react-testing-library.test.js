import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Greeting from './Greeting';

/// React Testing Library: https://testing-library.com/docs/react-testing-library/intro ///

describe('Greeting', () => {
  it('renders black when not selected (@testing-library/react)', () => {
    const { container } = render(<Greeting name="World" />);
    const h1 = container.querySelector('h1');

    const style = window.getComputedStyle(h1);
    expect(style.color).toBe('black');
  });

  it('renders red when selected (@testing-library/react)', () => {
    const { container } = render(<Greeting name="World" selected />);
    const h1 = container.querySelector('h1');

    const style = window.getComputedStyle(h1);
    expect(style.color).toBe('red');
  });
});
