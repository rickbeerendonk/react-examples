/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { useTrail, animated } from 'react-spring';

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

export default List_Fall;
