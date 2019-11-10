/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

function ClickMe() {
  const [count, setCount] = React.useState(0);

  return (
    <a onClick={/* () => */ setCount(count + 1)}>
      This link has been clicked {count} times
    </a>
  );
}

ReactDOM.render(<ClickMe />, document.getElementById('app'));
