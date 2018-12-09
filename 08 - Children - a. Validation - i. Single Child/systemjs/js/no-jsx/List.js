/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import PropTypes from 'prop-types';
import React from 'react';

function List(props) {
  return React.createElement(
    'ul',
    null,
    React.Children.map(props.children, function(child, i) {
      return React.createElement('li', { key: i }, child);
    })
  );
}
List.propTypes = {
  children: PropTypes.element.isRequired
};

export default List;
