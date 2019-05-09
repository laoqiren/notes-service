import React from 'react';
import { List } from 'antd-mobile';

const mockData = {
    trip: [

    ],
    movie: [],
    food: [],
    adventure: [],
}

export default class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        // 请求数据
    }
    render() {
        const category = this.props.category;
        return (
            <div>
                {category}
            </div>
        )
    }
}