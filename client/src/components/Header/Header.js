import React from 'react';
import { NavBar } from 'antd-mobile';
import './Header.scss';

class Header extends React.Component {
    render() {
        const title = this.props.title;
        return (
            <NavBar
            mode="dark"
            rightContent={this.props.rightContent || []}
            >{title}</NavBar>
        )
    }
}

export default Header;