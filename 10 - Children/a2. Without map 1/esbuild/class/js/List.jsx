/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class List extends Component {
  render() {
    return <ul>{this.props.children}</ul>;
  }
}

export default List;
