/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Greeting from './Greeting.jsx';
import MouseOver from './MouseOver.jsx';

export default function App() {
  return (
    <>
      <MouseOver
        render={mouseIsOver => (
          <Greeting name="First" highlight={mouseIsOver} />
        )}
      />
      <Greeting name="Second" />
      <MouseOver
        render={mouseIsOver => (
          <h2>
            Subtitle
            {mouseIsOver && ' (with mouse)'}
          </h2>
        )}
      />
    </>
  );
}
