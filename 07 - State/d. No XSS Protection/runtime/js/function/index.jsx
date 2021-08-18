/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>
        Hello <span dangerouslySetInnerHTML={{ __html: name }} />!
      </h1>
    </React.Fragment>
  );
}

ReactDOM.render(<GreetingEditor />, document.getElementById('root'));
