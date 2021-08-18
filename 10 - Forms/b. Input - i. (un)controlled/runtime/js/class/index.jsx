/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <input
            autoFocus
            onChange={this.handleChange}
            defaultValue={this.state.name}
          />
        </div>

        <div>
          Controlled by React:
          <input onChange={this.handleChange} value={this.state.name} />
        </div>

        <div style={{ color: 'darkgray' }}>State = {this.state.name}</div>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById('root'));
