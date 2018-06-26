import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// import * as api from '../../config/api';
// COMPONENTS
import Task from "../Task";
import AddTask from '../AddTask';
import Header from '../Header/';
import Spinner from "../Spinner";
import { schedulerWrapper } from "../HOC/schedulerWrapper";
// STYLES
import Styles from './styles.m.css';

@hot(module)
class Scheduler extends Component {

    state = {
        id:       '',
        messages: [],
        disabled: true,
        created:  '',
        taskText: '',
    };

    // _isTaskFetching = (state) => {
    //     this.setState({
    //         spin: state,
    //     });
    // };

    render () {
        const { spin } = this.state;
        const { tasks, _isTaskFetching, _postTask, _removeTask } = this.props;

        console.log("this is states from Scheduler", this.props);

        return (
            <section className = { Styles.scheduler }>
                <Spinner spin = { spin } />
                <main>
                    <Header />
                    <section>
                        <AddTask
                            _isTaskFetching = { _isTaskFetching }
                            _postTask = { _postTask }
                        />
                        <div className = { Styles.overlay } >
                            <Task
                                _isTaskFetching = { _isTaskFetching }
                                _removeTask = { _removeTask }
                                tasks = { tasks }
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

export default schedulerWrapper(Scheduler);
