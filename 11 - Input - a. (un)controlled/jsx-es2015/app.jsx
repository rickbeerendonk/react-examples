/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        {/* Not controlled by React */}
        <input onChange={this.onChange.bind(this)} defaultValue={this.state.name} />

        {/* Controlled by React */}
        <input onChange={this.onChange.bind(this)} value={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage />,
  document.getElementById('app')
);