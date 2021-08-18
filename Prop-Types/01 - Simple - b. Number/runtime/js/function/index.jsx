/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

function Sum({ first, second }) {
  return (
    <h1>
      {first} + {second} = {first + second}
    </h1>
  );
}
Sum.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired
};

ReactDOM.render(<Sum first={1} second={2} />, document.getElementById('root'));
