import React, { Component } from 'react';
import { schedulerWrapper } from "../HOC/schedulerWrapper";

@schedulerWrapper
export default class AddTask extends Component {
    state = {
        taskText: '',
    }

    componentDidMount () {
        // this._postTask();
    }

    // _postTask = () => {
    //     const { taskText } = this.state;
    //     const sendData = {
    //         "message": taskText.toString(),
    //     };
    //
    //     this.props._isTaskFetching(true);
    //
    //     fetch(api.url, {
    //         method:  'post',
    //         body:    JSON.stringify(sendData),
    //         headers: {
    //             'Authorization': api.token,
    //             'Content-Type':  'application/json',
    //         }})
    //         .then((response) => response.json())
    //         .then((data) => console.log('data', data))
    //         .then(() => this.props._isTaskFetching(false));
    // };
    _postTask = () => {
        const { taskText } = this.state;
        const { _postTask } = this.props;

        _postTask(taskText);
    }

    _handleChange = (event) => {
        this.setState({
            taskText: event.target.value,
        });
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this._postTask();
        this.setState({
            taskText: '',
        });
    }

    render () {
        return (
            <form onSubmit = { this._handleSubmit }>
                <input
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
