/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global describe, it */

import Greeting from '../src/Greeting.jsx';

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

describe('Greeting', () => {
  it('should render Hello World in a H1', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Greeting />);
    const actual = renderer.getRenderOutput();

    expect(actual.type).toBe('h1');
    expect(actual.props.children).toEqual('Hello World!');
  });
});
