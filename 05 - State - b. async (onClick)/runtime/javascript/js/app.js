/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class ClickMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Bind all non-react methods to this.
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    // this.state may be updated asynchronously:
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  render() {
    return React.createElement('a', { onClick: this.onClick },
      'This link has been clicked ',
      this.state.count,
      ' times'
    );
  }
}

ReactDOM.render(
  React.createElement(ClickMe),
  document.getElementById('app')
);