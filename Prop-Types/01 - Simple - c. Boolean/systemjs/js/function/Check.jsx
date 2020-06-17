/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import React from 'react';

function Check({ checked }) {
  return <h1>Checked = {String(checked)}</h1>;
}
Check.propTypes = {
  checked: PropTypes.bool.isRequired
};

export default Check;
