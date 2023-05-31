/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Greeting from './Greeting';

/// React Testing Library ///

describe('Greeting', () => {
  it('renders hello world snapshot when name is world', () => {
    const { container } = render(<Greeting name="World" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
