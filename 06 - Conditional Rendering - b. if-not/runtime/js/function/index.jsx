/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      {// Only render when a name is truthy:
      !name || <h1>Hello {name}!</h1>}
    </React.Fragment>
  );
}

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
