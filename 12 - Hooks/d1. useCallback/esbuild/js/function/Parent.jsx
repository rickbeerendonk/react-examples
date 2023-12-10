/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Child from './Child.jsx';

function Parent() {
  const setCount = React.useState(0)[1];
  const handleRerenderClick = () => {
    // Force rerender
    setCount(c => c + 1);
  };

  const handleChildClick = () => {
    alert('Method handler');
  };

  const handleChildClickWithHook = React.useCallback(() => {
    alert('Method handler');
  }, []);

  return (
    <>
      <div style={{ color: 'darkgray' }}>
        Open the console and observe the number of Child renders when clicking
        the button.
      </div>
      <div>
        <button onClick={handleRerenderClick}>Rerender</button>
      </div>
      <Child name="Without Hook" onClick={handleChildClick} />
      <Child name="With Hook" onClick={handleChildClickWithHook} />
    </>
  );
}

export default Parent;
