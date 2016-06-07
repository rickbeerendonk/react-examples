import HelloMessage from '../src/HelloMessage.jsx'

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

describe('HelloMessage', () => {
  it('should render name in message', () => {
    const expected = 'Hello React!';
    
    const renderer = TestUtils.createRenderer();
    renderer.render(<HelloMessage name="React" />);
    const actual = renderer.getRenderOutput();
    
    expect(actual).toIncludeJSX(expected);
  });
});
