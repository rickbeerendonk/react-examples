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
    this.setState({ code: Babel.transform(e.target.value, { presets: ['es2015', 'react'] }).code });
  }
  render() {
    return (
      <div>
        <textarea style={styles.textarea} onChange={this.onChange} defaultValue={this.jsx} />
        <textarea style={styles.textarea} readOnly="readOnly" value={this.state.code} />
      </div>);
  }
};

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
