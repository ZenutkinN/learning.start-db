import React, {Component} from 'react';
import ErrorIndicator from './../ErrorIndicator';

export default class ErrorBoundary extends Component {
    state = {
        error: false,
    };

    componentDidCatch(error, info) {
        this.setState({
            error: true,
        });
    };

    render() {
        const {error} = this.state;

        if (error) return <ErrorIndicator/>;

        return this.props.children;
    };
};