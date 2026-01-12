/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Children } from 'react';

import PropTypes from 'prop-types';
function List(props) {
  return (
    <ul>
      {Children.map(props.children, (child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
}
List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default List;
