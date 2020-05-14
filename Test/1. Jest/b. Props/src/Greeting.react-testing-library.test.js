import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Greeting from './Greeting';

/// React Testing Library: https://testing-library.com/docs/react-testing-library/intro ///

describe('Greeting', () => {
  it('throws when no name is provided (enzyme)', () => {
    expect(() => {
      render(<Greeting />);
    }).toThrow();
  });

  /////// TODO ////////

  /*
  it('renders hello world message when name is world (enzyme)', () => {
    const wrapper = render(<Greeting name="World" />);

    expect(wrapper.type()).toEqual('h1');

    // Use the children...
    expect(wrapper.children().length).toEqual(3);
    expect(wrapper.childAt(0).text()).toEqual('Hello ');
    expect(wrapper.childAt(1).text()).toEqual('World');
    expect(wrapper.childAt(2).text()).toEqual('!');

    // ...or simply the text
    expect(wrapper.text()).toEqual('Hello World!');

    // ...or the whole node
    expect(wrapper.html()).toEqual('<h1 class="greeting">Hello World!</h1>');
  });

  it('renders hello world snapshot when name is world (enzyme)', () => {
    const wrapper = render(<Greeting name="World" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  */
});
