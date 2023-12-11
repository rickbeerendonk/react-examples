/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
function Sum({ first, second }) {
  return (
    <h1>
      {first} + {second} = {first + second}
    </h1>
  );
}
Sum.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired
};

export default Sum;
