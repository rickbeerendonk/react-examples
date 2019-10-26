/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import ClickMe from './ClickMe';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    // Bind all non-react methods to this.
    this.setValue = this.setValue.bind(this);
  }
  setValue(newValue) {
    this.setState({ value: newValue });
  }
  render() {
    return <ClickMe value={this.state.value} setValue={this.setValue} />;
  }
}

export default Parent;
