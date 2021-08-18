/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

function ClickMe() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={/* () => */ setCount(count + 1)}>
      This button has been clicked {count} times
    </button>
  );
}

ReactDOM.render(<ClickMe />, document.getElementById('root'));
