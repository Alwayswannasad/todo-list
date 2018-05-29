import React, { Component } from 'react';

export default class Task extends Component {
    constructor (props) {
        super(props);
        console.log('props', props);
    }
    render () {
        // const a =  this.props;
        // const a = this.props;
        // console.log(this.props.data);
        // const listItems = this.props.data.map((number) =>
        //     <li key = { number.id }>{ number }</li>
        // );
        // const a = message.map((t) => console.log(t));

        return (
            <ul>
                {/*<li>{listItems}</li>*/}
            </ul>
        );
    }
}
