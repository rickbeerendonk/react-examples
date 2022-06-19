/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import { Spring, animated } from 'react-spring';

function App() {
  return (
    <Spring from={{ number: 0 }} to={{ number: 1 }}>
      {props => <animated.h1>{props.number}</animated.h1>}
    </Spring>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
