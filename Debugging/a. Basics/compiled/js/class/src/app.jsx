/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import GreetingEditor from './GreetingEditor';
import useMousePosition from './mouse-position-hook';
import Parent from './Parent';
import Child from './Child';

function App() {
  const mousePosition = useMousePosition();

  return (
    <>
      <GreetingEditor name="World" />
      <hr />
      <h1>Mouse Position</h1>
      <p>
        X: {mousePosition.X} <br />
        Y: {mousePosition.Y}
      </p>
      <hr />
      <Parent>
        <Child />
      </Parent>
    </>
  );
}

export default App;
