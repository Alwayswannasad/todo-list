import React, { Component } from 'react';
import Checkbox from "../../theme/assets/Checkbox";
import Star from "../../theme/assets/Star";
import Edit from "../../theme/assets/Edit";
import Styles from '../Task/styles.m.css';
import Remove from "../../theme/assets/Remove";
export default class TaskItems extends Component {
    state = {
        disabled: true,
    };
    _removeTask = () => {
        const { _removeTask, id } = this.props;

        _removeTask(id);
    };

    _editTask = (id) => {
        if (id === this.props.id) {
            return this.setState({
                disabled: false,
            });
        }
    };

    render () {
        const { id, created, message } = this.props;
        const { disabled } = this.state;

        return (
            (<li
                className = { Styles.task }
                key = { id }>
                <div className = { Styles.content }>
                    <Checkbox />
                    <input
                        disabled = { disabled }
                        tabIndex = '0'
                        type = 'text'
                        value = { message }
                    />
                    <small> { created } </small>
                </div>
                <div className = { Styles.actions }>
                    {/*<Actions _editTask = { this._editTask } styles = { Styles } />*/}
                    <Star className = { Styles.setPriority } />
                    <Edit className = { Styles.edit } onClick = { () => this._editTask(id) } />
                    <Remove onClick = { this._removeTask } />
                </div>
            </li>)
        );
    }
}
