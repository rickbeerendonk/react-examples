/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import Greeting from './Greeting';

/// React Testing Library ///

describe('Greeting', () => {
  it('renders hello world snapshot', () => {
    const { container } = render(<Greeting />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
