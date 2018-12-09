/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global Babel, React, ReactDOM */

function jsxTransform(source) {
  return Babel.transform(source, { presets: ['react'] }).code;
}

function jsxTransformSafe(source) {
  try {
    const code = jsxTransform(source);
    return { code, error: null };
  } catch (error) {
    return { code: null, error };
  }
}

class JsxCompiler extends React.Component {
  constructor(props) {
    super(props);

    this.jsx = `class HelloMessageClass extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const HelloMessageFunctional = ({name}) => <div>Hello {name}</div>;

React.renderComponent(<HelloMessageClass name="John" />, mountNode);`;

    this.state = jsxTransformSafe(this.jsx);

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState(jsxTransformSafe(e.target.value));
  }
  render() {
    return (
      <div style={styles.div}>
        <textarea
          className="code"
          onChange={this.onChange}
          defaultValue={this.jsx}
        />
        {this.state.error ? (
          <textarea
            className="code"
            readOnly="readOnly"
            style={styles.error}
            value={this.state.error}
          />
        ) : (
          <textarea
            className="code"
            readOnly="readOnly"
            value={this.state.code}
          />
        )}
      </div>
    );
  }
}

const styles = {
  div: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '45vh',
    gridGap: '0.5vw'
  },
  error: {
    color: 'red'
  }
};

ReactDOM.render(<JsxCompiler />, document.getElementById('app'));
