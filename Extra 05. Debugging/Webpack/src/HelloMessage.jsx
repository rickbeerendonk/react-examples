'use strict';

import React from 'react';

var NameInput = ({onChange, name}) => (
  <input onChange={onChange} value={name} />
);

var Hello = ({name}) => (
  <h1>Hello {name}!</h1>
);

export default class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: props.name};
  }
  onChange(e) {
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div>
        <NameInput onChange={this.onChange.bind(this)} name={this.state.name} />
        <Hello name={this.state.name} />                
      </div>
      );
  }
};