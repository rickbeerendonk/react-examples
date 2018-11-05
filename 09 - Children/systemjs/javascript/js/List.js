/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class List extends React.Component {
  render() {
    return React.createElement(
      'ul',
      null,
      React.Children.map(this.props.children, function(child, i) {
        return React.createElement('li', { key: i }, child);
      })
    );
  }
}
