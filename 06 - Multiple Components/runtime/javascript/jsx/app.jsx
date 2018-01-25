/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

const EditBox = ({onChange, value}) => (
  <input onChange={e => onChange(e.target.value)} value={value} />
);

const Greeting = ({name}) => (
  <h1>Hello {name}!</h1>
);

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(name) {
    this.setState(() => ({ name }));
  }
  render() {
    return (
      <div>
        <EditBox onChange={this.onChange} value={this.state.name} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(
  <GreetingEditor />,
  document.getElementById('app')
);
