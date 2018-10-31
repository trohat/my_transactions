import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Něco se pokazilo.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
