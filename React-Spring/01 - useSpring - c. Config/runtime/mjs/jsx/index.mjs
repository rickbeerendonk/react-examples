/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

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

function App() {
  return (
    <>
      <Bar configName="default" />
      <br />
      <Bar configName="gentle" />
      <br />
      <Bar configName="molasses" />
      <br />
      <Bar configName="slow" />
      <br />
      <Bar configName="stiff" />
      <br />
      <Bar configName="wobbly" />
      <br />
      <Custom />
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
