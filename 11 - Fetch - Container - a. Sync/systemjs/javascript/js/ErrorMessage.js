/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

const ErrorMessage = ({ message }) =>
  React.createElement('div', { style: { color: 'red' } }, message);

export default ErrorMessage;
