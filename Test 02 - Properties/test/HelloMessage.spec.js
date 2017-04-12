/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import HelloMessage from '../src/HelloMessage.jsx'

import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

describe('HelloMessage', () => {
  it('should render name in message', () => {
    const expected = 'Hello React!';
    
    const renderer = createRenderer();
    renderer.render(<HelloMessage name="React" />);
    const actual = renderer.getRenderOutput();
    
    expect(actual).toIncludeJSX(expected);
  });
});
