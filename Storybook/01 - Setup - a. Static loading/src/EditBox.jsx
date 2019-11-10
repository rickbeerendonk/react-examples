/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import React from 'react';

function EditBox({ onChange, value }) {
  return <input onChange={e => onChange(e.target.value)} value={value} />;
}
EditBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default EditBox;
