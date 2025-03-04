/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import GreetingWithExtras from './GreetingWithExtras.jsx';
import FooWithExtras from './FooWithExtras.jsx';

export default function App() {
  return (
    <>
      <GreetingWithExtras extraColor="red" name="World" />
      <FooWithExtras extraColor="blue" />
    </>
  );
}
