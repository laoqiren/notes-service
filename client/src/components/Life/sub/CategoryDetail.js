import React from 'react';
import Header from '../../Header/Header';

export default class CategoryDetail extends React.Component {
    state = {
        category: '',
        item: {},
    }
    componentDidMount() {
        const status = this.props.location.state;
        this.setState({
            category: status.category,
            item: status.item,
        });
    }
    render() {
        const category = this.state.category;
        const item = this.state.item;
        return (
            <div>
                <Header title={item.title} />
                <div>
                    {item.content}
                </div>
            </div>
        )
    }
}