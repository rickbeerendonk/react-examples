import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Greeting from './Greeting';
import ColorContext from './color-context';

/// React Test Renderer ///

describe('Greeting', () => {
  it('renders hello world snapshot with context color (@testing-library/react)', () => {
    const { container } = render(
      <ColorContext.Provider value={{ color: 'red' }}>
        <Greeting name="World" />
      </ColorContext.Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
