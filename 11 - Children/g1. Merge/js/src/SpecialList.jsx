/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Greeting from './Greeting.jsx';
import List from './List.jsx';

function SpecialList(props) {
  return (
    <List>
      <Greeting name="first" />
      {props.children}
      <Greeting name="last" />
    </List>
  );
}

export default SpecialList;
