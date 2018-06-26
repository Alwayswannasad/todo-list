// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Scheduler from "../../components/Scheduler";
import { Provider } from "../../components/HOC/schedulerWrapper";
import * as api from "../../config/api";

@hot(module)
export default class App extends Component {
    state = {
        tasks: [],
        spin:  false,
    };

    async componentDidMount () {
        await api.getTasks()
            .then((response) => response.json())
            .then((data) =>
                this.setState({ tasks: data.data })
            );
    }
    _isTaskFetching = (state) => {
        this.setState({
            spin: state,
        });
    };

    _postTask = async (task) => {
        const sendData = {
            "message": task.toString(),
        };

        this._isTaskFetching(true);

        await api.postTask(sendData)
            .then((response) => response.json())
            .then((data) =>
                this.setState({
                    tasks: [data.data, ...this.state.tasks],
                })
            )
            .then(() => this._isTaskFetching(false));
    };

    _removeTask = async (id) => {
        this._isTaskFetching(true);
        await fetch(`${api.url}/${id}`, {
            method:  'delete',
            headers: {
                'Authorization': api.token,
            },
        })
            .then(() => this.setState(({ tasks }) => ({
                tasks: tasks.filter((task) =>
                    task.id !== id
                ),
            })))
            .then(() => this._isTaskFetching(false));

    };

    render () {
        console.log('state from app', this.state);
        const { tasks } = this.state;

        return (
            <Provider>
                <Scheduler
                    _isTaskFetching = { this._isTaskFetching }
                    _postTask = { this._postTask }
                    _removeTask = { this._removeTask }
                    tasks = { tasks }
                />
            </Provider>
        );
    }
}
