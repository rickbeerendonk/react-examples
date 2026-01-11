/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { useSpring, animated } from 'react-spring';

function Custom() {
  const props = useSpring({
    from: { number: 0 },
    to: { number: 80 },
    config: { tension: 170, friction: 26, mass: 5 }
  });
  return (
    <>
      <animated.progress max={100} value={props.number} /> Custom:{' '}
      {'{ tension: 170, friction: 26, mass: 5 }'}
    </>
  );
}

export default Custom;
