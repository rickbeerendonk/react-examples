/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

/* eslint no-console:"off" */

import React from 'react';

interface Error {
  message?: string;
  stack?: string;
}

interface ErrorBoundaryState {
  error: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Called during "render" phase: No side-effects are allowed.
    // Use to render a fallback UI (setState -> render()).
    // See: https://github.com/reactjs/reactjs.org/pull/1223/files

    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Called during "commit" phase: Side-effects are allowed.
    // Use for side-effects like logging.
    // See: https://github.com/reactjs/reactjs.org/pull/1223/files

    console.log(
      `componentDidCatch() was called with error "${
        error.message
      }" and with info ${JSON.stringify(info)}`
    );
  }

  handleReload = () => {
    this.setState({ error: null });
  };

  render() {
    if (this.state.error) {
      return (
        <div style={{ background: 'pink', padding: 10 }}>
          <h1 style={{ color: 'red' }}>{this.state.error.message}</h1>
          <button onClick={this.handleReload}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
