import React, { Component } from 'react';
// COMPONENTS
import Checkbox from '../../theme/assets/Checkbox';
import Star from '../../theme/assets/Star';
import Edit from '../../theme/assets/Edit';
import Remove from '../../theme/assets/Remove';
// import Actions from '../Actions/';
// INSTRUMENTS
import Styles from './styles.m.css';
import { array, func, bool } from 'prop-types';
import { schedulerWrapper } from "../HOC/schedulerWrapper";

@schedulerWrapper
export default class Task extends Component {
     static propTypes = {
         _editTask: func.isRequired,
         disabled:  bool.isRequired,
         message:   array.isRequired,
     }

    _removeTask = () => {
        const { _removeTask, id } = this.props;

        _removeTask(id);
    }

    render () {
        const { message, _editTask, disabled } = this.props;
        const listItems = message.map((number) =>
            (<li
                className = { Styles.task }
                id = { number.id }
                key = { number.id }>
                <div className = { Styles.content }>
                    <Checkbox />
                    <input disabled = { disabled } type = 'text' value = { number.message } />
                </div>
                <div className = { Styles.actions }>
                    {/*<Actions _editTask = { this._editTask } styles = { Styles } />*/}
                    <Star className = { Styles.setPriority } />
                    <Edit className = { Styles.edit } onClick = { _editTask } />
                    <Remove onClick = { this._removeTask } />
                </div>
            </li>)
        );


        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}
