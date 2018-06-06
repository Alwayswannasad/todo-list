import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

const schedulerWrapper = (Enhanceable) => {
    return class SchedulerWrapper extends Component {
        render () {
            return (
                <Consumer>
                    {(context) => <Enhanceable { ...context } { ...this.props } />}
                </Consumer>
            );
        }
    };
};

export { Provider, Consumer, schedulerWrapper };
