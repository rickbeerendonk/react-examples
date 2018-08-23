/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

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
  constructor(props: IGreetingEditorProps) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ name: e.currentTarget.value });
  }
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
