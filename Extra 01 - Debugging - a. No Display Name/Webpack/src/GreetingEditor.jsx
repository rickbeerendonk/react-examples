/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

import React from 'react';
import Greeting from './Greeting';
import EditBox from './EditBox';

export default class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <EditBox onChange={this.onChange} name={this.state.name} />
        <Greeting name={this.state.name} />
      </React.Fragment>
    );
  }
}
