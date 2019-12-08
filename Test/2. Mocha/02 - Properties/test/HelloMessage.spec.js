/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import HelloMessage from '../src/HelloMessage.jsx';

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

describe('HelloMessage', () => {
  it('should render name in message', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HelloMessage name="React" />);
    const actual = renderer.getRenderOutput();

    expect(actual.type).toBe('h1');
    expect(actual.props.children).toEqual(['Hello ', 'React', '!']);
  });
});
