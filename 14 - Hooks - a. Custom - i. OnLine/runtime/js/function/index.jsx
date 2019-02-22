/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

function useIsOnLine() {
  // OnLine state variable
  const [isOnLine, setIsOnLine] = React.useState(navigator.onLine);

  // Functions to change state
  function handleOnLine() {
    setIsOnLine(true);
  }
  function handleOffLine() {
    setIsOnLine(false);
  }

  // Connect event handlers (side-effects)
  React.useEffect(() => {
    window.addEventListener('online', handleOnLine);
    window.addEventListener('offline', handleOffLine);
    return () => {
      window.removeEventListener('online', handleOnLine);
      window.removeEventListener('offline', handleOffLine);
    };
  }, [handleOnLine, handleOffLine]);

  // Return current state
  return isOnLine;
}

function App() {
  const isOnLine = useIsOnLine();
  return <h1>Browser is {isOnLine ? 'OnLine' : 'OffLine'}!</h1>;
}

ReactDOM.render(<App />, document.getElementById('app'));
