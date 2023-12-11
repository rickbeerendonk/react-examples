/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { createElement } from 'react';

function ErrorMessage({ message }) {
  return createElement('div', { style: { color: 'red' } }, message);
}

export default ErrorMessage;
