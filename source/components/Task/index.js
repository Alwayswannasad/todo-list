import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
// COMPONENTS
// import Checkbox from '../../theme/assets/Checkbox';
// import Star from '../../theme/assets/Star';
// import Edit from '../../theme/assets/Edit';
// import Remove from '../../theme/assets/Remove';
// import Actions from '../Actions/';
// INSTRUMENTS
// import Styles from './styles.m.css';
import { array, func, bool, string } from 'prop-types';
import { schedulerWrapper } from "../HOC/schedulerWrapper";
import TaskItems from "../TaskItems";
// import * as api from "../../config/api";

// @schedulerWrapper
@hot(module)
class Task extends Component {
     static propTypes = {
         _editTask: func.isRequired,
         created:   string.isRequired,
         disabled:  bool.isRequired,
         tasks:     array.isRequired,
     };

     render () {
         const { tasks, _removeTask } = this.props;
         // const { disabled } = this.state;
         const listItems = tasks.map((task) =>
             (<TaskItems
                 _removeTask = { _removeTask }
                 created = { task.created }
                 key = { task.id }
                 message = { task.message }
                 { ...task }
             />));


         return (
             <ul>
                 { listItems }
             </ul>
         );
     }
}

export default schedulerWrapper(Task);
