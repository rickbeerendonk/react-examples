/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global React, ReactDOM */

function ImportantAnchor({ highlight, children, ...otherProps }) {
  return (
    <a {...otherProps}>
      {highlight} {children} {highlight}
    </a>
  );
}

ReactDOM.render(
  <ImportantAnchor
    highlight="!!!"
    href="http://www.reactjs.com"
    rel="noopener noreferrer"
    target="_blank"
    title="Everything about React"
  >
    React website
  </ImportantAnchor>,
  document.getElementById('app')
);
