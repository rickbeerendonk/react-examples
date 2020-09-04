/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import React from 'react';
import ReactDOM from 'react-dom';

import ImportantAnchor from './ImportantAnchor';

ReactDOM.render(
  React.createElement(
    ImportantAnchor,
    {
      highlight: '!!!',
      href: 'http://www.reactjs.com',
      rel: 'noopener',
      target: '_blank',
      title: 'Everything about React'
    },
    'React website'
  ),
  document.getElementById('app')
);
