/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global React, ReactDOM */

function ImportantAnchor({ highlight, children, ...otherProps }) {
  return React.createElement(
    'a',
    otherProps,
    highlight,
    ' ',
    children,
    ' ',
    highlight
  );
}

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
