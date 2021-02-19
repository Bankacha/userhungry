import React from 'react';
import { Redirect, Route } from 'react-router';
import { getLoggedUserprofile } from '../api/login';

export class PrivateRoute extends React.Component {
    state = {
        success: false,
        loaded: false,
    }

    componentDidMount() {
        getLoggedUserprofile()
            .then(() => {
                this.setState({
                    success: true,
                    loaded: true
                });
            })
            .catch(() => {
                this.setState({
                    success: false,
                    loaded: true
                });
            });
    }

    render() {
        const { component: Component, ...rest } = this.props;
        const { loaded, success } = this.state;

        if (!loaded) return null;

        return (
            <Route
                {...rest}
                render={props => {
                    return success
                        ? <Component {...props} />
                        : <Redirect to={{ pathname: '/login' }} />;
                }}
            />
        );
    }
}