import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    console.log('?');

    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something Wrong.</h1>;
    } else {
      return this.props.children;
    }
  }
}
export default ErrorBoundary;
