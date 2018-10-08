/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import PropTypes from 'prop-types';
import React from 'react';

const List = ({ children }) => (
  <ul>
    {React.Children.map(children, (child, i) => (
      <li key={i}>{child}</li>
    ))}
  </ul>
);
List.propTypes = {
  children: PropTypes.element.isRequired
};

export default List;
