/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

import EditBox from './EditBox.jsx';
import Greeting from './Greeting.jsx';

class GreetingEditor extends Component {
  state = { name: 'World' };
  handleChange = name => {
    this.setState({ name });
  };

  render() {
    return (
      <>
        <EditBox onChange={this.handleChange} value={this.state.name} />
        <Greeting name={this.state.name} />
      </>
    );
  }
}

export default GreetingEditor;
