/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class GreetingEditor extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onChange = e => {
    const value = e.target.value;
    this.setState(() => ({ name: value }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name === 'Error') {
      throw new Error('Error');
    }

    return true;
  }
  render() {
    const { name } = this.state;

    if (name === 'renderException') {
      throw new Error('render exception');
    }

    return (
      <React.Fragment>
        <input key="input" onChange={this.onChange} value={name} />
        {name && <h1 key="output">Hello {name}!</h1>}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
