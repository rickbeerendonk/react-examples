/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import Greeting from '../src/Greeting.jsx';

import React from 'react';
import { JSDOM } from 'jsdom';
import ReactDOM from 'react-dom/client';
import { flushSync } from 'react-dom';
import expect from 'expect';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

describe('Greeting', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should render Hello World in a H1', () => {
    const root = ReactDOM.createRoot(container);
    flushSync(() => {
      root.render(<Greeting />);
    });

    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toEqual('Hello World!');
  });
});
