/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

/* global React, ReactDOM */

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.browserChanged = this.browserChanged.bind(this);
  }
  browserChanged(e) {
    this.props.onBrowserChanged(e);
  }
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
  constructor(props) {
    super(props);
    this.state = { name: 'World' };

    // Bind all non-react methods to this.
    this.handleBrowserChanged = this.handleBrowserChanged.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleBrowserChanged(e) {
    alert(e.target.value);
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <MyInput
            autoFocus
            onChange={this.handleChange}
            onBrowserChanged={this.handleBrowserChanged}
            defaultValue={this.state.name}
          />
        </div>

        <div>
          Controlled by React:
          <MyInput
            onChange={this.handleChange}
            onBrowserChanged={this.handleBrowserChanged}
            value={this.state.name}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById('app'));
