/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';
import type { ChangeEvent } from 'react';

interface GreetingEditorProps {
  greeting: string;
}

interface GreetingEditorState {
  name: string;
}

class GreetingEditor extends Component<
  GreetingEditorProps,
  GreetingEditorState
> {
  state = { name: 'World' };
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };
  render() {
    // Destructure props & state
    const { greeting } = this.props;
    const { name } = this.state;

    return (
      <>
        <input onChange={this.handleChange} value={name} />
        <h1>
          {greeting} {name}!
        </h1>
      </>
    );
  }
}

export default GreetingEditor;
