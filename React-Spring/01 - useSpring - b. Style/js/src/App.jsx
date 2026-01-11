/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { useSpring, animated } from 'react-spring';

export default function App() {
  const contentProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });
  return <animated.h1 style={contentProps}>Hello World!</animated.h1>;
}
