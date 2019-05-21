/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

/* eslint no-console:"off" */

class List extends React.Component {
  render() {
    console.log(this.props.children);

    return (
      <ul>
        {React.Children.map(this.props.children, (child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    );
  }
}

export default List;
