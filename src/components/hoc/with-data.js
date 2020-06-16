import React, { Component } from 'react';
import { AuthContext } from "../../services";

const withData = (WrappedComponent, getDataFunction, getLimitedDataFunction) => {

    return class extends Component {

        state = {
            data: null
        };

        static contextType = AuthContext;

        componentDidMount() {
            (this.context ?
                getDataFunction(this.props.apiData) :
                getLimitedDataFunction(this.props.apiData))
                .then((data) => {
                    this.setState({
                        data
                    });
                });
        }

        render() {
            const { data } = this.state;

            if (!data) {
                return null;
            }

            return <WrappedComponent {...this.props} data={data} />;
        }
    };
};

export default withData;