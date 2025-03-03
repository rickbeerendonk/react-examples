/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Children } from 'react';

import PropTypes from 'prop-types';
function List({ children }) {
  return (
    <ul>
      {Children.map(children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}
List.propTypes = {
  children: PropTypes.element.isRequired
};

export default List;
