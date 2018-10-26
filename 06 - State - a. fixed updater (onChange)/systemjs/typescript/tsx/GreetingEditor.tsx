/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

interface IGreetingEditorState {
  name: string;
}

export default class GreetingEditor extends React.Component<
  unknown,
  IGreetingEditorState
> {
  constructor(props: unknown) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ name: e.currentTarget.value });
  }
  render() {
    return (
      <React.Fragment>
        <input onChange={this.onChange} value={this.state.name} />
        <h1>Hello {this.state.name}!</h1>
      </React.Fragment>
    );
  }
}
