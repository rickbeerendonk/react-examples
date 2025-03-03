/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import Greeting from './Greeting.jsx';
import List from './List.jsx';

function SpecialList({ children }) {
  return (
    <List>
      <Greeting name="first" />
      {children}
      <Greeting name="last" />
    </List>
  );
}

export default SpecialList;
