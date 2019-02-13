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
  return <h1>Hello {isOnLine ? 'OnLine' : 'OffLine'}!</h1>;
}

ReactDOM.render(<Greeting />, document.getElementById('app'));
