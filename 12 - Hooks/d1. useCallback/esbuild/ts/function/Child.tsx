/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

interface ChildProps {
  name: string;
  onClick: () => void;
}

const Child = ({ name, onClick }: ChildProps) => {
  console.log(name, ' is rendered.');

  return <button onClick={() => onClick()}>Child: {name}</button>;
};

export default React.memo(Child);
