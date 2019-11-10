/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingEditorProps {}

interface IGreetingEditorState {
  name: string;
  other: string;
}

class GreetingEditor extends React.Component<
  IGreetingEditorProps,
  IGreetingEditorState
> {
  constructor(props: IGreetingEditorProps) {
    super(props);
    this.state = { name: 'World', other: 'More state' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.currentTarget.value });
  }
  render() {
    return (
      <React.Fragment>
        <input autoFocus onChange={this.handleChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
        <h2>{this.state.other}</h2>
      </React.Fragment>
    );
  }
}

export default GreetingEditor;
