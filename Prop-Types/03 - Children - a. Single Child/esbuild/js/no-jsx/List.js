/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import { Children, createElement } from 'react';

function List(props) {
  return createElement(
    'ul',
    null,
    Children.map(props.children, function (child, i) {
      return createElement('li', { key: i }, child);
    })
  );
}
List.propTypes = {
  children: PropTypes.element.isRequired
};

export default List;
