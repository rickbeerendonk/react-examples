/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React, { Component } from 'react';

interface GreetingEditorProps {}

interface GreetingEditorState {
  name: string;
  other: string;
}

class GreetingEditor extends Component<
  GreetingEditorProps,
  GreetingEditorState
> {
  constructor(props: GreetingEditorProps) {
    super(props);
    this.state = { name: 'World', other: 'More state' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <>
        <input onChange={this.handleChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
        <h2>{this.state.other}</h2>
      </>
    );
  }
}

export default GreetingEditor;
