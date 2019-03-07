/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import React from 'react';

interface IClickMeProps {}

interface IClickMeState {
  count: number;
}

class ClickMe extends React.Component<IClickMeProps, IClickMeState> {
  constructor(props: IClickMeProps) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <a onClick={/* () => */ this.setState({ count: this.state.count + 1 })}>
        This link has been clicked {this.state.count} times
      </a>
    );
  }
}

export default ClickMe;
