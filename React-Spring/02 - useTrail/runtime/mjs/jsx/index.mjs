/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import { useTrail, animated } from 'react-spring';

/* eslint react/display-name:"off" */

function List_Fall({ items }) {
  const trail = useTrail(items.length, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -40px, 0)'
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0, 0px, 0)'
    }
  });

  return (
    <ul>
      {trail.map((style, index) => (
        <animated.li key={items[index].key} style={style}>
          {items[index].text}
        </animated.li>
      ))}
    </ul>
  );
}

function List_Turn({ items }) {
  const trail = useTrail(items.length, {
    from: {
      transform: 'rotate3d(1, 0, 0, 90deg)'
    },
    to: {
      transform: 'rotate3d(1, 0, 0, 0deg)'
    }
  });

  return (
    <ul>
      {trail.map((style, index) => (
        <animated.li key={items[index].key} style={style}>
          {items[index].text}
        </animated.li>
      ))}
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
