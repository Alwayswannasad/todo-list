import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

const schedulerWrapper = (Enhanceable) => {
    return class SchedulerWrapper extends Component {
        render () {
            // const { tasks } = this.state;
            return (
                <Consumer>
                    {(context) => (<Enhanceable
                        // tasks = { tasks }
                        { ...context }
                        { ...this.props }
                        // _isTaskFetching = { this._isTaskFetching }
                        // _postTask = { this._postTask }
                    />) }
                </Consumer>
            );
        }
    };
};

export { Provider, Consumer, schedulerWrapper };
