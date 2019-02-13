/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

function useIsOnLine() {
  // OnLine state variable
  const [isOnLine, setIsOnLine] = React.useState(navigator.onLine);

  // Functions to change state
  function setOnLine() {
    setIsOnLine(true);
  }
  function setOffLine() {
    setIsOnLine(false);
  }

  // Connect event handlers (side-effects)
  React.useEffect(() => {
    window.addEventListener('online', setOnLine);
    window.addEventListener('offline', setOffLine);
    return () => {
      window.removeEventListener('online', setOnLine);
      window.removeEventListener('offline', setOffLine);
    };
  }, []);

  // Return current state
  return isOnLine;
}

function Greeting() {
  const isOnLine = useIsOnLine();
  return React.createElement(
    'h1',
    null,
    'Hello ',
    isOnLine ? 'OnLine' : 'OffLine',
    '!'
  );
}

ReactDOM.render(React.createElement(Greeting), document.getElementById('app'));
