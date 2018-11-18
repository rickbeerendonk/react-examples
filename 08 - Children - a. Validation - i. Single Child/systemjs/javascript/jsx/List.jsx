/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import PropTypes from 'prop-types';
import React from 'react';

const List = props => (
  <ul>
    {React.Children.map(props.children, (child, i) => (
      <li key={i}>{child}</li>
    ))}
  </ul>
);
List.propTypes = {
  children: PropTypes.element.isRequired
};

export default List;
