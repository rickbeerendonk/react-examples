/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

interface IGreetingEditorProps {
  greeting: string;
}

interface IGreetingEditorState {
  name: string;
}

export default class GreetingEditor extends React.Component<
  IGreetingEditorProps,
  IGreetingEditorState
> {
  state = { name: 'World' };
  onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value });
  };
  render() {
    // Destructure props & state
    const { greeting } = this.props;
    const { name } = this.state;

    return (
      <React.Fragment>
        <input onChange={this.onChange} value={name} />
        <h1>
          {greeting} {name}!
        </h1>
      </React.Fragment>
    );
  }
}
