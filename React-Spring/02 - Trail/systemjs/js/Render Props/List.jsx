/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { Trail, animated } from 'react-spring/renderprops';

/* eslint react/display-name:"off" */

function List({ items }) {
  return (
    <ul>
      <Trail
        items={items}
        keys={item => item.key}
        from={{ opacity: 0, transform: 'translate3d(0, -40px, 0)' }}
        to={{ opacity: 1, transform: 'translate3d(0, 0px, 0)' }}
      >
        {item => props => <animated.li style={props}>{item.text}</animated.li>}
      </Trail>
    </ul>
  );
}

export default List;
