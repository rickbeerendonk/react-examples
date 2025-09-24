/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting.tsx';

/// React Test Renderer ///

describe('Greeting', () => {
  it('renders hello world snapshot with default context color (@testing-library/react)', () => {
    const { container } = render(<Greeting name="World" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
