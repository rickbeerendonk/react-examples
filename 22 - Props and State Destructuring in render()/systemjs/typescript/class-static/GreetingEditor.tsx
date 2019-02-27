/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface IGreetingEditorProps {
  greeting: string;
}

interface IGreetingEditorState {
  name: string;
}

class GreetingEditor extends React.Component<
  IGreetingEditorProps,
  IGreetingEditorState
> {
  state = { name: 'World' };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.currentTarget.value });
  };
  render() {
    // Destructure props & state
    const { greeting } = this.props;
    const { name } = this.state;

    return (
      <React.Fragment>
        <input autoFocus onChange={this.handleChange} value={name} />
        <h1>
          {greeting} {name}!
        </h1>
      </React.Fragment>
    );
  }
}

export default GreetingEditor;
