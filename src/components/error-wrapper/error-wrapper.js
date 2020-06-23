import React, { Component } from 'react';

export default class ErrorWrapper extends Component {

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    render() {

        if (this.state.hasError) {
            return (
                <h1>Error Happend</h1>
            )
        }

        return this.props.children;
    }
}
