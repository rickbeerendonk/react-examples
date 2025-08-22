/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from 'react';
import type { ChangeEvent } from 'react';

interface AppProps {}

interface AppState {
  name: string;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { name: 'React' };

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
