/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Greeting from './Greeting.jsx';
import MouseOver from './MouseOver.jsx';

export default function App() {
  return (
    <>
      <MouseOver>
        {mouseIsOver => <Greeting name="First" highlight={mouseIsOver} />}
      </MouseOver>
      <Greeting name="Second" />
      <MouseOver>
        {mouseIsOver => (
          <h2>
            Subtitle
            {mouseIsOver && ' (with mouse)'}
          </h2>
        )}
      </MouseOver>
    </>
  );
}
