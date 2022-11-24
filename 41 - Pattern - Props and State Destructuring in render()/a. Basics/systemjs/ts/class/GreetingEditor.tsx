/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

interface GreetingEditorProps {
  greeting: string;
}

interface GreetingEditorState {
  name: string;
}

class GreetingEditor extends React.Component<
  GreetingEditorProps,
  GreetingEditorState
> {
  constructor(props: GreetingEditorProps) {
    super(props);
    this.state = { name: 'World' };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }
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
