import React, { Component } from 'react';
import * as api from "../../config/api";



export default class AddTask extends Component {
    state = {
        taskText: '',
    }

    componentDidMount () {
        // this._postTask();
    }

     _postTask = () => {
         const { taskText } = this.state;
         const sendData = {
             "message": taskText.toString(),
         };

         console.log('taskText', sendData);
         fetch(api.url, {
             method:  'post',
             body:    JSON.stringify(sendData),
             headers: {
                 'Authorization': api.token,
                 'Content-Type':  'application/json',
             }})
             .then((response) => response.json());
     };

    _handleChange = (event) => {
        this.setState({
            taskText: event.target.value,
        });
        console.log('this.s tate', this.state);
    }

    _handleSubmit = (event) => {
        console.log(`A name was submitted:${this.state.taskText}`);
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
