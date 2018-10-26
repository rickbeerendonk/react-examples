/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

const ErrorMessage = ({ message }) => (
  <div style={{ color: 'red' }}>{message}</div>
);

export default ErrorMessage;
