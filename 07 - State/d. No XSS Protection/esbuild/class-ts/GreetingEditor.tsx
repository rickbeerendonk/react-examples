/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

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
    this.state = { name: '<u onmouseover=alert("Hacked!")>Dangerous</u>' };

    // Bind all non-react methods to this.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.name} size={50} />
        <h1>
          Hello <span dangerouslySetInnerHTML={{ __html: this.state.name }} />!
        </h1>
      </div>
    );
  }
}

export default GreetingEditor;
