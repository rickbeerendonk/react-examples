/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { useDispatch } from './StateContext.jsx';

function Switch() {
  const dispatch = useDispatch();

  function handleSwitch() {
    dispatch({ type: 'SWITCH' });
  }

  return <button onClick={handleSwitch}>Switch color</button>;
}

export default Switch;
