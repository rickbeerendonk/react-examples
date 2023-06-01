/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

function GreetingEditor() {
  const [name, setName] = React.useState(
    '<u onmouseover="alert(\'XSS testing!\')">World</u>'
  );

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} size="50" />
      <h1>
        Hello <span dangerouslySetInnerHTML={{ __html: name }} />!
      </h1>
    </React.Fragment>
  );
}

export default GreetingEditor;
