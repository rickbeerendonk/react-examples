/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import HelloMessage from '../src/HelloMessage.jsx';

import React from 'react';
import { JSDOM } from 'jsdom';
import ReactDOM from 'react-dom/client';
import { flushSync } from 'react-dom';
import expect from 'expect';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

describe('HelloMessage', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  it('should render name in message', () => {
    const root = ReactDOM.createRoot(container);
    flushSync(() => {
      root.render(<HelloMessage name="React" />);
    });

    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
    expect(heading.textContent).toEqual('Hello React!');
  });
});
