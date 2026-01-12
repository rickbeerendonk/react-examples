/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Greeting from './Greeting';
import ColorContext from './color-context';

/// React Test Renderer ///

describe('Greeting', () => {
  it('renders hello world snapshot with context color (@testing-library/react)', () => {
    const { container } = render(
      <ColorContext value={{ color: 'red' }}>
        <Greeting name="World" />
      </ColorContext>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
