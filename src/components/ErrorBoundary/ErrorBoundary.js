import { Component } from "react";
import ErrorMessage from "../ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        isError: false,
    };

    static getDerivedStateFromError(error) {
        return {
            isError: true,
        };
    }

    render() {
        if (this.state.isError) {
            return <ErrorMessage />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
