/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

import { useEffect, useState } from 'react';

function JSExecute() {
  const [script, setScript] = useState(`function foo(first, second) {
  return first + second;
}

alert(foo('abc', 'def'));`);

  function handleChange(e) {
    setScript(e.target.value);
  }

  useEffect(() => {
    eval(script);
  }, [script]);

  return (
    <>
      <textarea autoFocus onChange={handleChange} value={script} />
      <pre>{script}</pre>
    </>
  );
}

export default JSExecute;
