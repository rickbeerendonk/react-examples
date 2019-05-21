/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';
import { Spring, config } from 'react-spring/renderprops';

function Bars() {
  return (
    <React.Fragment>
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.default}>
        {props => (
          <React.Fragment>
            <progress max={100} value={props.number} /> Default
          </React.Fragment>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.gentle}>
        {props => (
          <React.Fragment>
            <progress max={100} value={props.number} /> Gentle
          </React.Fragment>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.molasses}>
        {props => (
          <React.Fragment>
            <progress max={100} value={props.number} /> Molasses
          </React.Fragment>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.slow}>
        {props => (
          <React.Fragment>
            <progress max={100} value={props.number} /> Slow
          </React.Fragment>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.stiff}>
        {props => (
          <React.Fragment>
            <progress max={100} value={props.number} /> Stiff
          </React.Fragment>
        )}
      </Spring>
      <br />
      <Spring from={{ number: 0 }} to={{ number: 80 }} config={config.wobbly}>
        {props => (
          <React.Fragment>
            <progress max={100} value={props.number} /> Wobbly
          </React.Fragment>
        )}
      </Spring>
      <br />
      <Spring
        from={{ number: 0 }}
        to={{ number: 80 }}
        config={{ tension: 170, friction: 26, mass: 5 }}
      >
        {props => (
          <React.Fragment>
            <progress max={100} value={props.number} /> Custom:{' '}
            {'{ tension: 170, friction: 26, mass: 5 }'}
          </React.Fragment>
        )}
      </Spring>
    </React.Fragment>
  );
}

export default Bars;
