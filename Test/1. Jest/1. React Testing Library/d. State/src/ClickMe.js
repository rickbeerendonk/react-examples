import React from 'react';

import './ClickMe.css';

function ClickMe() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(c => c + 1);
  }

  return (
    <a className="clickme" href="#" onClick={handleClick}>
      This link has been clicked {count} times
    </a>
  );
}

export default ClickMe;
