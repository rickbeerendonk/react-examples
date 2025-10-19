/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createRef } from 'react';
import type { ChangeEvent } from 'react';

interface GreetingEditorProps {}

interface GreetingEditorState {
  name: string;
}

class GreetingEditor extends Component<
  GreetingEditorProps,
  GreetingEditorState
> {
  inputRef = createRef<HTMLInputElement>();

  constructor(props: GreetingEditorProps) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }
  componentDidMount() {
    this.inputRef.current.select();
  }
  render() {
    return (
      <>
        <input
          autoFocus
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
