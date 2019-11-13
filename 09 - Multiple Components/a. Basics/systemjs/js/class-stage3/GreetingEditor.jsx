/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import EditBox from './EditBox';
import Greeting from './Greeting';

class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-instance_class_fields
  state = { name: 'World' };
  handleChange = name => {
    this.setState({ name });
  };

  render() {
    return (
      <React.Fragment>
        <EditBox onChange={this.handleChange} value={this.state.name} />
        <Greeting name={this.state.name} />
      </React.Fragment>
    );
  }
}

export default GreetingEditor;
