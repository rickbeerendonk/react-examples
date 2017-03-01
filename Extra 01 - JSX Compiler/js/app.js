/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global Babel, React, ReactDOM */
/* eslint react/prop-types:"off" */

var JsxCompiler = React.createClass({
  displayName: 'JsxCompiler',
  jsx: 'var HelloMessage = React.createClass({\n\
  render: function() {\n\
    return <div>Hello {this.props.name}</div>;\n\
  }\n\
});\n\
\n\
React.render(<HelloMessage name="John" />, mountNode);',
  getInitialState: function () {
    return { code: '' };
  },
  onChange: function (e) {
    this.setState({ code: Babel.transform(e.target.value, { presets: ['es2015', 'react'] }).code });
  },
  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement('textarea', { style: styles.textarea, onChange: this.onChange, defaultValue: this.jsx }),
      React.createElement('textarea', { style: styles.textarea, readOnly: 'readOnly', value: this.state.code })
    );
  }
});

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
