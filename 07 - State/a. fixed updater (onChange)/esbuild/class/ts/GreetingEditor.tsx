/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';
import type { ChangeEvent } from 'react';

interface GreetingEditorProps {}

interface GreetingEditorState {
  name: string;
}

class GreetingEditor extends Component<
  GreetingEditorProps,
  GreetingEditorState
> {
  constructor(props: GreetingEditorProps) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <>
        <input onChange={this.handleChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
      </>
    );
  }
}

export default GreetingEditor;
