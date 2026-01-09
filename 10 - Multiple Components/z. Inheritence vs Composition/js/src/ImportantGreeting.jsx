/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import Greeting from './Greeting.jsx';

// Only if Greeting is a Class Component
class ImportantGreeting extends Greeting {
  render() {
    return <strong>!!! {super.render()} !!!</strong>;
  }
}

export default ImportantGreeting;
