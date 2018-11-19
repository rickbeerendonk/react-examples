/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <input onChange={this.onChange} defaultValue={this.state.name} />
        </div>

        <div>
          Controlled by React:
          <input onChange={this.onChange} value={this.state.name} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById('app'));
