/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */

function ImportantAnchor({ children, ...otherProps }) {
  return React.createElement('a', otherProps, '!!! ', children, ' !!!');
}

ReactDOM.render(
  React.createElement(
    ImportantAnchor,
    {
      href: 'http://www.reactjs.com',
      rel: 'noopener',
      target: '_blank',
      title: 'Everything about React'
    },
    'React website'
  ),
  document.getElementById('app')
);
