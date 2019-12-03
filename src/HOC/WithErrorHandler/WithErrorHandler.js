import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });

                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                });
            });
        }

        componentWillUnmount () {
            console.log('willUnmount', this.reqInterceptor, this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({
                error: null
            });
        }

        render() {
            return (
                <React.Fragment>
                    <Modal
                        isVisible={this.state.error}
                        onModalClose={this.errorConfirmedHandler}>
                        {this.state.error && this.state.error.message}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            )
        }
    }
}

export default WithErrorHandler;
