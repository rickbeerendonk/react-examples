/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import React from 'react';

interface IAppProps {}

interface IAppState {
  name: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = { name: 'React' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
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

export default App;
