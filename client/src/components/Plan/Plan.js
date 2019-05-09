import React from 'react';

export default class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    render() {
        return (
            <div>规划未来</div>
        )
    }
}