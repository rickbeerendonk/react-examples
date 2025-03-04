/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import PropTypes from 'prop-types';
import { Children, Component } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
        {Children.map(this.props.children, (child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    );
  }
}
List.propTypes = {
  children: PropTypes.element.isRequired
};

export default List;
