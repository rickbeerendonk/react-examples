/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global Babel, React, ReactDOM */
/* eslint react/prop-types:"off" */

class JsxCompiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: '' };

    this.jsx = `class HelloMessageClass extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const HelloMessageFunctional = ({name}) => <div>Hello {name}</div>;

React.renderComponent(<HelloMessageClass name="John" />, mountNode);`;

    // Bind all non-react methods to this.
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ code: Babel.transform(e.target.value, { presets: ['react'] }).code });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('textarea', { style: styles.textarea, onChange: this.onChange, defaultValue: this.jsx }),
      React.createElement('textarea', { style: styles.textarea, readOnly: 'readOnly', value: this.state.code })
    );
  }
}

var styles = {
  textarea: {
    width: '400px',
    height: '400px'
  }
};

ReactDOM.render(
  React.createElement(JsxCompiler),
  document.getElementById('app')
);
