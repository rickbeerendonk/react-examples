/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017-2020 Rick Beerendonk     !*/

import React, { Component, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { transform } from '@babel/standalone';

function jsxTransform(source) {
  return transform(source, { presets: [['react', { runtime: 'automatic' }]] })
    .code;
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
  const jsx = `function Greeting ({name}) {
  return <h1>Hello {name}</h1>;
}

createRoot(document.getElementById('root')).render(<Greeting name="React" />);`;

  const [transformedJSX, setTransformedJSX] = useState(() =>
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

createRoot(document.getElementById('root')).render(<JsxCompiler />);
