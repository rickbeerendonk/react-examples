/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM, PropTypes */

class Sum extends React.Component {
  render() {
    return (
      <h1>
        {this.props.first} + {this.props.second} ={' '}
        {this.props.first + this.props.second}
      </h1>
    );
  }
}
Sum.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Sum first={1} second={2} />
);
