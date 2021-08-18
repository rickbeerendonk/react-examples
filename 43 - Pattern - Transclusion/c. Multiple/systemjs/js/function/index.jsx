/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import Container from './Container';

ReactDOM.render(
  <Container slot1={<em>First</em>} slot2={<b>Second</b>} />,
  document.getElementById('root')
);
