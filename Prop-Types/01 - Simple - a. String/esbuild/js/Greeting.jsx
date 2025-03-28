/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import PropTypes from 'prop-types';

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired
};

export default Greeting;
