/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import { createElement } from 'react';

function Greeting(props) {
  return createElement('h1', null, 'Hello ', props.name, '!');
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default Greeting;
