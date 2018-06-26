import React, { Component } from 'react';
import { func } from 'prop-types';

import { schedulerWrapper } from "../HOC/schedulerWrapper";

// @schedulerWrapper
class AddTask extends Component {
    static propTypes = {
        _postTask: func.isRequired,
    };

    state = {
        taskText: '',
    };

    _postTask = () => {
        const { taskText } = this.state;

        if (!taskText) {
            return null;
        }

        const { _postTask } = this.props;

        _postTask(taskText);

        this.setState({
            taskText: '',
        });
    };

    _handleChange = (event) => {
        this.setState({
            taskText: event.target.value,
        });
    };

    _handleSubmit = (event) => {
        event.preventDefault();
        this._postTask();
    };

    render () {
        return (
            <form onSubmit = { this._handleSubmit }>
                <input
                    maxLength = '50'
                    placeholder = 'Новая задача'
                    type = 'text'
                    value = { this.state.taskText }
                    onChange = { this._handleChange }
                />
                <button type = 'submit'>Добавить задачу</button>
            </form>
        );
    }
}

export default schedulerWrapper(AddTask);
