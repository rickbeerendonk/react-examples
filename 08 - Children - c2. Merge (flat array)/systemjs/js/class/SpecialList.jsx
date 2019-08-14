/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Greeting from './Greeting';
import List from './List';

class SpecialList extends React.Component {
  render() {
    return (
      <List>
        {[
          <Greeting key="special_first" name="first" />,
          ...this.props.children,
          <Greeting key="special_last" name="last" />
        ]}
      </List>
    );
  }
}

export default SpecialList;
