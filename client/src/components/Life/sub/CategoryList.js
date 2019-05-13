import React from 'react';
import { List, Result } from 'antd-mobile';
import * as moment from 'moment';
import service from '../../../service/index';

import './CategoryList.scss';

const Item = List.Item;
const Brief = Item.Brief;

export default class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            list: []
        }
    }
    fetchArticleList(category) {
        service.life.queryByCategory(category)
            .then(list => {
                this.setState({
                    list,
                });
            });
    }
    componentDidMount() {
        this.fetchArticleList(this.props.category);
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.category !== prevState.category) {
            return {
                category: nextProps.category,
            }
        }
        return null;
    }
    showDetail(item) {
        this.props.handleShowDetail(this.props.category, item);
    }
    render() {
        const list = this.state.list;
        return (
            <div className="category-list">
                <List>
                    {
                        list && list.length > 0 && list.map((item, index) => {
                            return (
                                <Item
                                    arrow="horizontal"
                                    multipleLine
                                    thumb={<div className="avator">{item.creater && item.creater.toUpperCase().slice(0, 1)}</div>}
                                    onClick={() => this.showDetail(item)}
                                    key={index}
                                    >
                                    {item.title} <Brief>{ moment(item.time).format('YYYY-MM-DD') } @{item.addr} <br /> {item.content}</Brief>
                                </Item>
                            );
                        })
                    }
                    {
                        (!list || list.length === 0) && (
                            <Result
                                title="啥子都没得"
                                message="好懒啊，小两口勤快点记录哦"
                            />
                        )
                    }
                </List>
            </div>
        )
    }
}