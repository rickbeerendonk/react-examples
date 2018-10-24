/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off" */

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
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

ReactDOM.render(
  <GreetingEditor greeting="Hello" />,
  document.getElementById('app')
);
