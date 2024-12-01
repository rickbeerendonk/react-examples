import React from 'react';

function ClickMe() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(c => c + 1);
  }

  return (
    <button onClick={handleClick}>
      This button has been clicked {count} times
    </button>
  );
}

export default ClickMe;
