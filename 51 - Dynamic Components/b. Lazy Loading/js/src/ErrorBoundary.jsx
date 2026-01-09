/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, lastKey: props.resetKey };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  static getDerivedStateFromProps(props, state) {
    // Reset error state when the key changes (new user input)
    if (props.resetKey !== state.lastKey) {
      return { hasError: false, lastKey: props.resetKey };
    }
    return null;
  }
  componentDidCatch(error) {
    // Optional: console.debug(error);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

export default ErrorBoundary;
