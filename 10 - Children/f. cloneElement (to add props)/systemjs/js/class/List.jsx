/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

class List extends React.Component {
  render() {
    return (
      <ul>
        {React.Children.map(this.props.children, (child, i) => (
          <li key={i}>
            {child.props.greeting
              ? child
              : // child is readonly.
                // To changes props/children on the child, use React.cloneElement.
                // New props (2nd argument) will overwrite existing props.
                React.cloneElement(child, { greeting: this.props.greeting })}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
