/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import GreetingEditor from './props/GreetingEditor';
import Parent from './children/Parent';
import Child from './children/Child';
import useMousePosition from './hooks/mouse-position-hook';
import Top from './context/Top';
import Memo_ComponentStack from './memo_component-stack/Memo_ComponentStack';

export default function () {
  const mousePosition = useMousePosition();

  return (
    <>
      <h1>Props/Events</h1>
      <GreetingEditor name="World" />
      <hr />
      <h1>Children</h1>
      <Parent>
        <Child />
      </Parent>
      <hr />
      <h1>Custom Hooks</h1>
      <h2>Mouse Position</h2>
      <p>
        X: {mousePosition.X} <br />
        Y: {mousePosition.Y}
      </p>
      <hr />
      <h1>Context</h1>
      <Top />
      <hr />
      <h1>Memo &amp; Component Stack</h1>
      <Memo_ComponentStack />
    </>
  );
}
