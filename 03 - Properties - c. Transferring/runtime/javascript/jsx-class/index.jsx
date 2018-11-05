/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2015 Rick Beerendonk   !*/

/* global React, ReactDOM */

class ImportantAnchor extends React.Component {
  render() {
    const { children, ...otherProps } = this.props;
    return <a {...otherProps}>!!! {children} !!!</a>;
  }
}

ReactDOM.render(
  <ImportantAnchor
    href="http://www.reactjs.com"
    rel="noopener"
    target="_blank"
    title="Everything about React"
  >
    React website
  </ImportantAnchor>,
  document.getElementById('app')
);
