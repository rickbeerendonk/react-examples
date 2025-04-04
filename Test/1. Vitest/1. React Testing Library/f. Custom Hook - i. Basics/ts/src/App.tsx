/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import useBoolean from './hooks/boolean-hook.ts';

function App() {
  const [value, toggleValue] = useBoolean(true);

  function handleClick() {
    toggleValue();
  }

  return (
    <>
      <button onClick={handleClick}>{value ? 'Hide' : 'Show'}</button>
      {value && <h1>Click the button to hide this text.</h1>}
    </>
  );
}

export default App;
