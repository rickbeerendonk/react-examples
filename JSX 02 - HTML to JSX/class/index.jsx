/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/* global HTMLtoJSX, React, ReactDOM */

function jsxTransform(source) {
  const converter = new HTMLtoJSX({
    createClass: false
  });
  return converter.convert(source);
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

    this.html = `<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>`;

    this.state = jsxTransformSafe(this.html);

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
          defaultValue={this.html}
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
