/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createRef } from 'react';

class GreetingEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };
    this.inputRef = createRef();

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  componentDidMount() {
    this.inputRef.current.select();
  }
  render() {
    return (
      <>
        <input
          onChange={this.handleChange}
          ref={this.inputRef}
          value={this.state.name}
        />
        {this.state.name && <h1>Hello {this.state.name}!</h1>}
      </>
    );
  }
}

export default GreetingEditor;
