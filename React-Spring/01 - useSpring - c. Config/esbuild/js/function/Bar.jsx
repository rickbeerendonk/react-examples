/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import { useSpring, animated, config } from 'react-spring';

function Bar({ configName }) {
  const props = useSpring({
    from: { number: 0 },
    to: { number: 80 },
    config: config[configName]
  });
  return (
    <>
      <animated.progress max={100} value={props.number} /> {configName}
    </>
  );
}

export default Bar;
