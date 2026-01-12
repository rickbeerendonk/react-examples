/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018-2025 Rick Beerendonk     !*/

import { Component } from 'react';

import ErrorMessage from './ErrorMessage.tsx';

interface Error {
  message?: string;
  stack?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
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
