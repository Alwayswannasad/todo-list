import React, { Component } from 'react';
import * as api from '../../config/api';
// COMPONENTS
import Task from "../Task";
// STYLES
import Styles from './styles.m.css';

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
             .then((data) => data.data.map((task) => {
                 // return <Task key = { task.id } { ...task } />;
                 console.log(task);

                 return this.setState({ message: data.data });
                 //     console.log('task', task)
             }
             ));
         console.log('this.state', this.state);
     };
    // sendTask()
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
                         <form action = ''>
                             <input type = 'text' />
                             <button>Send</button>
                         </form>
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
