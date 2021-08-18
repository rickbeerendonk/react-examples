/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global createReactClass, React, ReactDOM */

var ImportantAnchor = createReactClass({
  render: function () {
    return <a {...this.props}>!!! {this.props.children} !!!</a>;
  }
});

ReactDOM.render(
  <ImportantAnchor
    href="http://www.reactjs.com"
    target="_blank"
    title="Everything about React"
  >
    React website
  </ImportantAnchor>,
  document.getElementById('root')
);
