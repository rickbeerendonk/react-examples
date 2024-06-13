/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017-2020 Rick Beerendonk     !*/

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

function JsxCompiler() {
  const jsx = `class HelloMessageClass extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const HelloMessageFunctional = ({name}) => <div>Hello {name}</div>;

React.renderComponent(<HelloMessageClass name="John" />, mountNode);`;

  const [transformedJSX, setTransformedJSX] = React.useState(() =>
    jsxTransformSafe(jsx)
  );

  function handleChange(e) {
    setTransformedJSX(jsxTransformSafe(e.target.value));
  }

  return (
    <div style={styles.div}>
      <textarea className="code" onChange={handleChange} defaultValue={jsx} />
      {transformedJSX.error ? (
        <textarea
          className="code"
          readOnly="readOnly"
          style={styles.error}
          value={transformedJSX.error}
        />
      ) : (
        <textarea
          className="code"
          readOnly="readOnly"
          value={transformedJSX.code}
        />
      )}
    </div>
  );
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

ReactDOM.createRoot(document.getElementById('root')).render(<JsxCompiler />);
