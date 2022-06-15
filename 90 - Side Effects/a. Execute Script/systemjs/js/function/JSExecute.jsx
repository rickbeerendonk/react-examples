/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

import React from 'react';

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

function JSExecute() {
  const [script, setScript] = React.useState(`function foo(first, second) {
  return first + second;
}

alert(foo('abc', 'def'));`);

  function handleChange(e) {
    setScript(e.target.value);
  }

  React.useEffect(() => {
    eval(script);
  }, [script]);

  return (
    <React.Fragment>
      <textarea autoFocus onChange={handleChange} value={script} />
      <pre>{script}</pre>
    </React.Fragment>
  );
}

export default JSExecute;
