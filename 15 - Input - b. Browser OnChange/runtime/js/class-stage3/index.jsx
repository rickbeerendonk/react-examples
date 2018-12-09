/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class MyInput extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  browserChanged = e => {
    this.props.onBrowserChanged(e);
  };

  componentDidMount() {
    this.myInput.addEventListener('change', this.browserChanged);
  }
  componentWillUnmount() {
    this.myInput.removeEventListener('change', this.browserChanged);
  }
  render() {
    /* eslint no-unused-vars:"off" */
    const {
      onBrowserChanged: deleted,
      children,
      ...passthroughProps
    } = this.props;
    return (
      <input {...passthroughProps} ref={ref => (this.myInput = ref)}>
        {children}
      </input>
    );
  }
}

class HelloMessage extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { name: 'World' };
  onBrowserChanged = e => {
    alert(e.target.value);
  };
  onChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <MyInput
            onChange={this.onChange}
            onBrowserChanged={this.onBrowserChanged}
            defaultValue={this.state.name}
          />
        </div>

        <div>
          Controlled by React:
          <MyInput
            autoFocus
            onChange={this.onChange}
            onBrowserChanged={this.onBrowserChanged}
            value={this.state.name}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById('app'));
