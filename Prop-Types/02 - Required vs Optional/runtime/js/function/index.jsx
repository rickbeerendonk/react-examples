/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

function Sum({ first, second = 1 }) {
  return (
    <h1>
      {first} + {second} = {first + second}
    </h1>
  );
}
Sum.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number // Optional
};

ReactDOM.render(<Sum first={2} />, document.getElementById('root'));
