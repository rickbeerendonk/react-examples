/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import ImportantAnchor from './ImportantAnchor';

ReactDOM.render(
  React.createElement(
    ImportantAnchor,
    {
      href: 'https://react.dev',
      rel: 'noopener',
      target: '_blank',
      title: 'Everything about React'
    },
    'React website'
  ),
  document.getElementById('root')
);
