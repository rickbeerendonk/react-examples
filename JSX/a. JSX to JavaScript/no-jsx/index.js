/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

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

    this.jsx = `class HelloMessageClass extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const HelloMessageFunctional = ({name}) => <div>Hello {name}</div>;

React.renderComponent(<HelloMessageClass name="John" />, mountNode);`;

    this.state = jsxTransformSafe(this.jsx);

    // Bind all non-react methods to this.
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState(jsxTransformSafe(e.target.value));
  }
  render() {
    return React.createElement(
      'div',
      { style: styles.div },
      React.createElement('textarea', {
        className: 'code',
        onChange: this.handleChange,
        defaultValue: this.jsx
      }),
      this.state.error
        ? React.createElement('textarea', {
            className: 'code',
            readOnly: 'readOnly',
            style: styles.error,
            value: this.state.error
          })
        : React.createElement('textarea', {
            className: 'code',
            readOnly: 'readOnly',
            value: this.state.code
          })
    );
  }
}

var styles = {
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

ReactDOM.render(
  React.createElement(JsxCompiler),
  document.getElementById('root')
);
