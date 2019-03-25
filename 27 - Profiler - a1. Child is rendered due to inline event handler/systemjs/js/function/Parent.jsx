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

  return (
    <React.Fragment>
      <div>
        <button onClick={handleRerenderClick}>Rerender</button>
      </div>
      <Child onClick={handleChildClick} />
    </React.Fragment>
  );
}

export default Parent;
