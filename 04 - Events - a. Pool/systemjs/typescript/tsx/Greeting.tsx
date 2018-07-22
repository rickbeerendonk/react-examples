/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class Greeting extends React.Component<undefined, undefined> {
  onChange(e: React.SyntheticEvent<HTMLInputElement>) {
    // Events are pooled. To prevent properties from resetting, remove the
    // event from the pool by calling event.persist(). See error in console.
    e.persist();

    const showHandled = () => {
      const target = e.target as HTMLInputElement;
      alert(`Event handled.
Target: ${target}
Value: ${target.value}`);
    };

    setTimeout(showHandled, 1000);
  }
  render() {
    return <input onChange={this.onChange} value="Hello World!" />;
  }
}
