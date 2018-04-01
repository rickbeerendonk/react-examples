/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class MyInput extends React.Component {
  // Proposal: https://github.com/tc39/proposal-class-fields
  // Support: http://kangax.github.io/compat-table/esnext/#test-class_fields
  browserChanged = (e) => {
    this.props.onBrowserChanged(e);
  };

  componentDidMount() {
    this.myInput.addEventListener('change', this.browserChanged);
  }
  componentWillUnmount() {
    this.myInput.removeEventListener('change', this.browserChanged);
  }
  render() {
    /* eslint no-unused-vars:"off" */
    const {onBrowserChanged: deleted, children, ...passthroughProps} = this.props;
    return (
      <input {...passthroughProps} ref={(ref) => this.myInput = ref}>{children}</input>
    );
  }
}
