/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from 'react';

import Greeting from './Greeting.jsx';
import List from './List.jsx';

class SpecialList extends Component {
  render() {
    return (
      <List>
        <Greeting name="first" />
        {this.props.children}
        <Greeting name="last" />
      </List>
    );
  }
}

export default SpecialList;
