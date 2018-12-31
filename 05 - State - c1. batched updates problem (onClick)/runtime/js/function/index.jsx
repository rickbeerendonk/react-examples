/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

function ClickMe() {
  const [count, setCount] = React.useState(0);

  return (
    <a
      onClick={() => {
        setCount(count + 0.4);
        setCount(count + 0.6);
      }}
    >
      {`This link has been clicked ${count} times`}
    </a>
  );
}

ReactDOM.render(<ClickMe />, document.getElementById('app'));
