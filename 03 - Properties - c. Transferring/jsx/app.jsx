/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

var ImportantAnchor = React.createClass({
  render: function () {
    return (
      <a {...this.props}>!!! {this.props.children} !!!</a>
    );
  }
});

ReactDOM.render(
  <ImportantAnchor href="http://www.reactjs.com" target="_blank" title="Everything about React">
    React website
  </ImportantAnchor>,
  document.getElementById('app')
);