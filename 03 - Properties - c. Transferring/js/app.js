/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class ImportantAnchor extends React.Component {
  render() {
    return React.createElement('a', this.props, '!!! ', this.props.children, ' !!!');
  }
}

ReactDOM.render(React.createElement(
  ImportantAnchor,
  { href: 'http://www.reactjs.com', target: '_blank', title: 'Everything about React' },
  'React website'
), document.getElementById('app'));