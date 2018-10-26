/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint no-console:"off" */
/* eslint react/prop-types:"off" */

import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    // Called during "render" phase: No side-effects are allowed.
    // Use to render a fallback UI (setState -> render()).
    // See: https://github.com/reactjs/reactjs.org/pull/1223/files

    return { error };
  }

  componentDidCatch(error, info) {
    // Called during "commit" phase: Side-effects are allowed.
    // Use for side-effects like logging.
    // See: https://github.com/reactjs/reactjs.org/pull/1223/files

    console.log(
      `componentDidCatch() was called with error "${
        error.message
      }" and with info ${JSON.stringify(info)}`
    );
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ color: 'red' }}>
          <h1>{this.state.error.message}</h1>
          <pre>{this.state.error.stack}</pre>
        </div>
      );
    }

    return this.props.children;
  }
}
