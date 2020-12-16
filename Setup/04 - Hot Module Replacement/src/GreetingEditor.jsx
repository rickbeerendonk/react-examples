/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import { Component } from 'react';
import { hot } from 'react-hot-loader/root';

import EditBox from './EditBox';
import Greeting from './Greeting';

class GreetingEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(newName) {
    this.setState(() => ({ name: newName }));
  }
  render() {
    return (
      <>
        <EditBox onChange={this.handleChange} name={this.state.name} />
        <Greeting name={this.state.name} />
      </>
    );
  }
}

export default hot(GreetingEditor);
