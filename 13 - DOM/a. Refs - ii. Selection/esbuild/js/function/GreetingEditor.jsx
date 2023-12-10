/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function GreetingEditor() {
  const inputRef = React.useRef();
  const [name, setName] = React.useState('World');

  React.useLayoutEffect(
    () => inputRef.current.select(),
    [] /* Only run on mount */
  );

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <>
      <input onChange={handleChange} ref={inputRef} value={name} />
      {name && <h1>Hello {name}!</h1>}
    </>
  );
}

export default GreetingEditor;
