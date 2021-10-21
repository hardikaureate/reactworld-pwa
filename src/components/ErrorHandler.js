import React, { Component } from "react";

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // logErrorStack(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div id="main" class="alt">
                    <section id="one">
                        <div class="inner">
                            <div class="row">
                                <div class="col-12 col-12-small">
                                    <div className="error-msg-screen">
                                        <h2 className="text-uppercase">Oops!</h2>
                                        <h3 className="text-uppercase mb-3">Something went wrong</h3>
                                        <p className="mb-4">
                                            Brace yourself till we get the error fixed.<br />
                                            You may also refresh the page or try again later.
                                        </p>
                                        <button type="button" class="btn btn-secondary btn-sm mr-2"><a href="/"> Go Back</a></button>
                                        {/* <button type="button" class="btn btn-secondary btn-sm">Try Again</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorHandler;