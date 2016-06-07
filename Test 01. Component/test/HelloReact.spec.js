import HelloReact from '../src/HelloReact.jsx'

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

describe('HelloReact', () => {
  it('should show Hello React in a H1', () => {
    const expected = '<h1> Hello React! </h1>';
    
    const renderer = TestUtils.createRenderer();
    renderer.render(<HelloReact />);
    const actual = renderer.getRenderOutput();
    
    expect(actual).toIncludeJSX(expected);
  });
});
