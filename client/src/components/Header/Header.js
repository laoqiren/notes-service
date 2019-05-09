import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
    render() {
        const title = this.props.title;
        return (
            <div className="header">
                {title}
            </div>
        )
    }
}