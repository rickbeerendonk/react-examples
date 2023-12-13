/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { useTrail, animated } from 'react-spring';

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

export default List_Turn;
