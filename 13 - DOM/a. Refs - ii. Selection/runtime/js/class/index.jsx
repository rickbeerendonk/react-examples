/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };
    this.inputRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  componentDidMount() {
    this.inputRef.current.select();
  }
  render() {
    return (
      <React.Fragment>
        <input
          onChange={this.handleChange}
          ref={this.inputRef}
          value={this.state.name}
        />
        {this.state.name && <h1>Hello {this.state.name}!</h1>}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
