/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2014 Rick Beerendonk   !*/

/* global React, ReactDOM */

function GreetingEditor() {
  const [name, setName] = React.useState('World');
  const [other /*, setOther */] = React.useState('More state');

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input autoFocus onChange={handleChange} value={name} />
      <h1>Hello {name}!</h1>
      <h2>{other}</h2>
    </React.Fragment>
  );
}

ReactDOM.render(<GreetingEditor />, document.getElementById('app'));
