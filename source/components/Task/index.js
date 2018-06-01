import React, { Component } from 'react';
import Styles from './styles.m.css';

export default class Task extends Component {
    constructor (props) {
        super(props);
        console.log('props', props);
    }
    render () {

        const listItems = this.props.data.map((number) =>
            (<li className = { Styles.task } key = { number.id }>
                <div className = { Styles.content }>
                    {/*<img alt = 'complete-icon' src = '../../../assets/icons/complete-icon.svg' />*/}
                    <input type = 'text' value = { number.message } />
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
