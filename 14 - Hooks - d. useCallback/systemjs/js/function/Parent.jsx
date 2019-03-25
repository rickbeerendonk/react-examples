/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

import Child from './Child';

function Parent() {
  const [, setCount] = React.useState(0);
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
    <React.Fragment>
      <div style={{ color: 'darkgray' }}>
        Open the console and observe the number of Child renders when clicking
        the button.
      </div>
      <div>
        <button onClick={handleRerenderClick}>Rerender</button>
      </div>
      <Child name="Without Hook" onClick={handleChildClick} />
      <Child name="With Hook" onClick={handleChildClickWithHook} />
    </React.Fragment>
  );
}

export default Parent;
