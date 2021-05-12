import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClickMe from './ClickMe';

/// React Test Renderer ///

describe('ClickMe', () => {
  it('renders 0 snapshot (@testing-library/react)', () => {
    const { container } = render(<ClickMe />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders 1 after click snapshot (@testing-library/react)', () => {
    const { container } = render(<ClickMe />);
    // trigger the onChange event for the select box
    fireEvent.click(container.firstChild);
    expect(container.firstChild).toMatchSnapshot();
  });
});
