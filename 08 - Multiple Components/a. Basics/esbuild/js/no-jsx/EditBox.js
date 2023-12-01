/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';

function EditBox({ onChange, value }) {
  return createElement('input', {
    autoFocus: true,
    onChange: e => onChange(e.target.value),
    value: value
  });
}

export default EditBox;
