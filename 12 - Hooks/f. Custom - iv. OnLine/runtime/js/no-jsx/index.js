/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

function useIsOnLine() {
  // OnLine state variable
  const [isOnLine, setIsOnLine] = React.useState(navigator.onLine);

  // Connect event handlers (side-effects)
  React.useEffect(() => {
    // Functions to change state
    function handleOnLine() {
      setIsOnLine(true);
    }
    function handleOffLine() {
      setIsOnLine(false);
    }

    window.addEventListener('online', handleOnLine);
    window.addEventListener('offline', handleOffLine);
    return () => {
      window.removeEventListener('online', handleOnLine);
      window.removeEventListener('offline', handleOffLine);
    };
  }, []);

  // Return current state
  return isOnLine;
}

function App() {
  const isOnLine = useIsOnLine();
  return React.createElement(
    'h1',
    null,
    'Browser is ',
    isOnLine ? 'OnLine' : 'OffLine',
    '!'
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
