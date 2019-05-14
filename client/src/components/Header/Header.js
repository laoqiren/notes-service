import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar, Icon } from 'antd-mobile';
import './Header.scss';

class Header extends React.Component {
    handleBack = () => {
        this.props.history.go(-1);
    }
    render() {
        const title = this.props.title;
        return (
            <NavBar
                mode="dark"
                className="nav-header"
                icon={<Icon type="left" />}
                onLeftClick={() => this.handleBack()}
                rightContent={this.props.rightContent || []}
                >{title}</NavBar>
        )
    }
}

export default withRouter(Header);