/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global createReactClass, React, ReactDOM */

var HelloMessage = createReactClass({
  getInitialState: function () {
    return { name: 'World' };
  },
  handleChange(e) {
    this.setState({ name: e.target.value });
  },
  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <input onChange={this.handleChange} defaultValue={this.state.name} />
        </div>

        <div>
          Controlled by React:
          <input onChange={this.handleChange} value={this.state.name} />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<HelloMessage />, document.getElementById('root'));
