import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Greeting from './Greeting';

/// React Test Renderer ///

describe('Greeting', () => {
  it('renders hello world snapshot when name is world', () => {
    const { container } = render(<Greeting name="World" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});