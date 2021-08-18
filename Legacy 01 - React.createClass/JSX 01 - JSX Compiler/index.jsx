/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global Babel, createReactClass, React, ReactDOM */

var JsxCompiler = createReactClass({
  jsx: 'var HelloMessage = React.createClass({\n\
  render: function() {\n\
    return <div>Hello {this.props.name}</div>;\n\
  }\n\
});\n\
\n\
React.renderComponent(<HelloMessage name="John" />, mountNode);',
  getInitialState: function () {
    return { code: '' };
  },
  handleChange: function (e) {
    this.setState({
      code: Babel.transform(e.target.value, { presets: ['es2015', 'react'] })
        .code
    });
  },
  render: function () {
    return (
      <div>
        <textarea
          style={styles.textarea}
          onChange={this.handleChange}
          defaultValue={this.jsx}
        />
        <textarea
          style={styles.textarea}
          readOnly="readOnly"
          value={this.state.code}
        />
      </div>
    );
  }
});

var styles = {
  textarea: {
    width: '400px',
    height: '400px'
  }
};

ReactDOM.render(<JsxCompiler />, document.getElementById('root'));
