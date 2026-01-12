/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2025 Rick Beerendonk     !*/

import { Component } from 'react';

import ErrorMessage from './ErrorMessage.jsx';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage
          message={this.state.error?.message || 'An error occurred'}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
