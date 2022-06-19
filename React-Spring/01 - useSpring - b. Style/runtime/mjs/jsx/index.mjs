/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import { useSpring, animated } from 'react-spring';

function App() {
  const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } });
  return <animated.h1>{props.number}</animated.h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
