/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { Component } from 'react';
import Greeting from './Greeting';
import EditBox from './EditBox';

class GreetingEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };

    // Bind all non-react methods to this.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(name) {
    this.setState({ name });
  }
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
