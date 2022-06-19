/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import { Spring, animated, config } from 'react-spring';

function App() {
  return (
    <>
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.default}>
        {props => (
          <>
            <animated.progress max={100} value={props.number} /> Default
          </>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.gentle}>
        {props => (
          <>
            <animated.progress max={100} value={props.number} /> Gentle
          </>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.molasses}>
        {props => (
          <>
            <animated.progress max={100} value={props.number} /> Molasses
          </>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.slow}>
        {props => (
          <>
            <animated.progress max={100} value={props.number} /> Slow
          </>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.stiff}>
        {props => (
          <>
            <animated.progress max={100} value={props.number} /> Stiff
          </>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.wobbly}>
        {props => (
          <>
            <animated.progress max={100} value={props.number} /> Wobbly
          </>
        )}
      </Spring>
      <br />
      <Spring
        from={{ number: 0 }}
        to={{ number: 80 }}
        config={{ tension: 170, friction: 26, mass: 5 }}
      >
        {props => (
          <>
            <animated.progress max={100} value={props.number} /> Custom:{' '}
            {'{ tension: 170, friction: 26, mass: 5 }'}
          </>
        )}
      </Spring>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
