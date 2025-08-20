/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import GreetingEditor from './props/GreetingEditor.jsx';
import Parent from './children/Parent.jsx';
import Child from './children/Child.jsx';
import useMousePosition from './hooks/mouse-position-hook.js';
import Top from './context/Top.jsx';
import Memo_ComponentStack from './memo_component-stack/Memo_ComponentStack.jsx';

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
        X: {mousePosition.x} <br />
        Y: {mousePosition.y}
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
