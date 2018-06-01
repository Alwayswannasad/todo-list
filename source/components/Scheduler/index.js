import React, { Component } from 'react';
import * as api from '../../config/api';
// COMPONENTS
import Task from "../Task";
// STYLES
import Styles from './styles.m.css';
import AddTask from "../AddTask";

export default class Scheduler extends Component {
    state = {
        message: [],
    };

    componentDidMount () {
        this._fetchTasks();
    }

    _fetchTasks = () => {
        fetch(api.url, api.fetchConfig('GET'))
            .then((response) => response.json())
            .then((data) => data.data.map(() => {
                return this.setState({ message: data.data });
            }
            ));
    };

    render () {
        const { message } = this.state;

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1> My List</h1>
                        {/*<Task />*/}
                        <input type = 'text' />
                    </header>
                    {/*<input placeholder = 'enter your task here' type = 'text' />*/}
                    <section>
                        <AddTask _fetchTasks = { this._fetchTasks } />
                        <div className = { Styles.overlay } >
                            <Task data = { message } />
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
