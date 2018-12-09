/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

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
    this.onBrowserChanged = this.onBrowserChanged.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onBrowserChanged(e) {
    alert(e.target.value);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <div>
          Not controlled by React:
          <MyInput
            autoFocus
            onChange={this.onChange}
            onBrowserChanged={this.onBrowserChanged}
            defaultValue={this.state.name}
          />
        </div>

        <div>
          Controlled by React:
          <MyInput
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
