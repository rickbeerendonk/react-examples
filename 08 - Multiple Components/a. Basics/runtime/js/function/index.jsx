/*! European Union Public License version 1.2 !*/
/*! Copyright © 2014 Rick Beerendonk          !*/

/* global React, ReactDOM */

function EditBox({ onChange, value }) {
  return (
    <input autoFocus onChange={e => onChange(e.target.value)} value={value} />
  );
}

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}

function GreetingEditor() {
  const [name, setName] = React.useState('World');

  return (
    <React.Fragment>
      <EditBox onChange={setName} value={name} />
      <Greeting name={name} />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GreetingEditor />);
