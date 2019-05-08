import React from 'react';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }
    render() {
        return (
            <div>这是一个测试路由组件</div>
        )
    }
}