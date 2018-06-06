import React, { Component } from 'react';
import * as api from '../../config/api';
// COMPONENTS
import Task from "../Task";
import AddTask from '../AddTask';
import Header from '../Header/';
// STYLES
import Styles from './styles.m.css';
import Spinner from "../Spinner";
import { schedulerWrapper } from "../HOC/schedulerWrapper";

@schedulerWrapper
export default class Scheduler extends Component {
    state = {
        id:       '',
        message:  [],
        task:     [],
        disabled: true,
    };

    componentDidMount () {
        this._fetchTasks();
    }

    _fetchTasks = () => {
        fetch(api.url, api.fetchConfig('GET'))
            .then((response) => response.json())
            .then((data) => data.data.map((task) => {
                return this.setState({ message: data.data, task });
            }
            ));
    };

    _removeTask = async (id) => {
        this._isTaskFetching(true);

        console.log(`${api.url}/${id}`);

        await fetch(`${api.url}/${id}`, {
            method:  'delete',
            headers: {
                'Authorization': api.token,
            },
        })
            .then(() => this._fetchTasks())
            .then(() => this._isTaskFetching(false));
        // .then((response) => response.json())

        //         .then(() => this._isTaskFetching(false));
    }

    _editTask = () => {
        this.setState({
            disabled: false,
        });
    };

    _postTask = (task) => {
        console.log(task);
        const sendData = {
            "message": task.toString(),
        };

        this._isTaskFetching(true);

        fetch(api.url, {
            method:  'post',
            body:    JSON.stringify(sendData),
            headers: {
                'Authorization': api.token,
                'Content-Type':  'application/json',
            }})
            .then((response) => response.json())
            // .then(() => this._fetchTasks())
            .then((data) => console.log(data))
            // .then((data) => this.setState({
            //     message: data.message,
            // }))
            .then(() => this._isTaskFetching(false));
    };

    _isTaskFetching = (state) => {
        this.setState({
            spin: state,
        });
    }

    render () {
        const { message, disabled, spin } = this.state;

        return (
            <section className = { Styles.scheduler }>
                <Spinner spin = { spin } />
                <main>
                    <Header />
                    <section>
                        <AddTask
                            _isTaskFetching = { this._isTaskFetching }
                            _postTask = { this._postTask }
                        />
                        <div className = { Styles.overlay } >
                            <Task
                                _editTask = { this._editTask }
                                _removeTask = { this._removeTask }
                                disabled = { disabled }
                                message = { message }
                            />
                        </div>
                    </section>
                    <footer>
                        <div>
                            <p className = { Styles.completeAllTasks }> Все завершено</p>
                        </div>
                    </footer>
                </main>
            </section>
        );
    }
}
