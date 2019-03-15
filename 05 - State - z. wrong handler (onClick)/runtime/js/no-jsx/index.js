/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* global React, ReactDOM */

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return React.createElement(
      'a',
      { onClick: /* () => */ this.setState({ count: this.state.count + 1 }) },
      'This link has been clicked ',
      this.state.count,
      ' times'
    );
  }
}

ReactDOM.render(React.createElement(ClickMe), document.getElementById('app'));
