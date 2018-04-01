/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const HelloWorld = () => 
  <h1 ref={ref => ref.innerHTML = 'Hello <i>React</i>!!!'}>Hello World!</h1>


export default HelloWorld;