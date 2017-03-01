/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import Greeting from '../src/Greeting.jsx'

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

describe('Greeting', () => {
  it('should render Hello World in a H1', () => {
    const expected = '<h1>\n  Hello World!\n</h1>';
    
    const renderer = TestUtils.createRenderer();
    renderer.render(<Greeting />);
    const actual = renderer.getRenderOutput();
    
    expect(actual).toEqualJSX(expected);
  });
});
