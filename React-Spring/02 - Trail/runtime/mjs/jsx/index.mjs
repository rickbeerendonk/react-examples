/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import { Trail, animated } from 'react-spring';

/* eslint react/display-name:"off" */

function List_Fall({ items }) {
  return (
    <ul>
      <Trail
        items={items}
        from={{
          opacity: 0,
          transform: 'translate3d(0, -40px, 0)'
        }}
        to={{
          opacity: 1,
          transform: 'translate3d(0, 0px, 0)'
        }}
      >
        {item => props =>
          (
            <animated.li key={item.key} style={props}>
              {item.text}
            </animated.li>
          )}
      </Trail>
    </ul>
  );
}

function List_Turn({ items }) {
  return (
    <ul>
      <Trail
        items={items}
        from={{
          transform: 'rotate3d(1, 0, 0, 90deg)'
        }}
        to={{
          transform: 'rotate3d(1, 0, 0, 0deg)'
        }}
      >
        {item => props =>
          (
            <animated.li key={item.key} style={props}>
              {item.text}
            </animated.li>
          )}
      </Trail>
    </ul>
  );
}

const items = [
  { key: 1, text: 'One' },
  { key: 2, text: 'Two' },
  { key: 3, text: 'Three' }
];

ReactDOM.render(
  <>
    <List_Fall items={items} />
    <List_Turn items={items} />
  </>,
  document.getElementById('root')
);
