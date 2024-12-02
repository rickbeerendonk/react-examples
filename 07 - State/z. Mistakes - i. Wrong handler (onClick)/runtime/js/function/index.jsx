/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

/* eslint-disable react-compiler/react-compiler */

function ClickMe() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={/* () => */ setCount(count + 1)}>
      This button has been clicked {count} times
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClickMe />);
