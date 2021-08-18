/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */

function ImportantAnchor({ children, ...otherProps }) {
  return <a {...otherProps}>!!! {children} !!!</a>;
}

ReactDOM.render(
  <ImportantAnchor
    href="http://www.reactjs.com"
    rel="noopener noreferrer"
    target="_blank"
    title="Everything about React"
  >
    React website
  </ImportantAnchor>,
  document.getElementById('root')
);
