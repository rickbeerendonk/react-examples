/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { useCallback, useState } from 'react';

import Child from './Child.jsx';

function Parent() {
  const [, setCount] = useState(0);
  const handleRerenderClick = () => {
    // Force rerender
    setCount(c => c + 1);
  };

  const handleChildClick = useCallback(() => {
    alert('Method handler');
  }, []);

  return (
    <>
      <div>
        <button onClick={handleRerenderClick}>Rerender</button>
      </div>
      <Child onClick={handleChildClick} />
    </>
  );
}

export default Parent;
