/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global Babel, React, ReactDOM */
/* eslint react/prop-types:"off" */

class JsxCompiler extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  state = { code: '' };
  jsx = `class HelloMessageClass extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const HelloMessageFunctional = ({name}) => <div>Hello {name}</div>;

React.renderComponent(<HelloMessageClass name="John" />, mountNode);`;
  onChange = (e) => {
    this.setState({ code: Babel.transform(e.target.value, { presets: ['react'] }).code });
  };
  
  render() {
    return (
      <div>
        <textarea style={styles.textarea} onChange={this.onChange} defaultValue={this.jsx} />
        <textarea style={styles.textarea} readOnly="readOnly" value={this.state.code} />
      </div>);
  }
}

var styles = {
  textarea: {
    width: '400px',
    height: '400px'
  }
};

ReactDOM.render(
  <JsxCompiler />,
  document.getElementById('app')
);
