import React from 'react';
import Header from '../Header/Header';

export default class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    render() {
        return (
            <div>
                <Header title="未来，我一直在" />
            </div>
        )
    }
}