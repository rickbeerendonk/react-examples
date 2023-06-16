/*! European Union Public License version 1.2 !*/

/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

function GreetingEditor() {
  const inputRef = React.useRef();
  const [name, setName] = React.useState('World');
  React.useEffect(() => inputRef.current.select(), [] /* Only run on mount */);

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <React.Fragment>
      <input onChange={handleChange} ref={inputRef} value={name} />
      {name && <h1>Hello {name}!</h1>}
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GreetingEditor />);
