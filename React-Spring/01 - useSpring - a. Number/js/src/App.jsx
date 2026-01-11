/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { useSpring, animated } from 'react-spring';

export default function App() {
  const props = useSpring({
    from: { number: 0 },
    to: { number: 1 }
  });
  return <animated.h1>{props.number}</animated.h1>;
}
