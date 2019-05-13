import React from 'react';
import { List, Result } from 'antd-mobile';
import * as moment from 'moment';
import service from '../../../service/index';

import './CategoryList.scss';

const Item = List.Item;
const Brief = Item.Brief;

const mockData = {
    trip: [
        { 
            id: '001',
            title: '一起去了磁器口、歌乐山',
            time: '2019-01-23',
            addr: '重庆',
            content: '小吃呀什么的，待记录。。。。。。。。。。。。。。。。。。。'
        },
        { 
            id: '002',
            title: '一起去爬歌乐山',
            time: '2019-05-01',
            addr: '重庆',
            content: '一起登山，待记录。。。。。。。。。。。。。。。。。。。'
        },
        { 
            id: '0003',
            title: '三峡人民广场',
            time: '2019-05-02',
            addr: '重庆',
            content: '在三峡人民广场溜达待记录。。。。。。。。。。。。。。。。。。。'
        },
        { 
            id: '004',
            title: '重庆->天津->北京',
            time: '2019-05-03',
            addr: '重庆->天津->北京',
            content: '跨越三个直辖市，待记录。。。。。。。。。。。。。。。。。。。'
        }
    ],
    movie: [
        {
            id: '0101',
            title: '《流浪地球》',
            time: '2019-02-10 20:00',
            addr: '石柱太平洋影城',
            content: '第一次一起看电影，待记录。。。。。。。。。。。。。。。'
        },{
            id: '0102',
            title: '《复联4》',
            time: '2019-05-01 20:00',
            addr: '沙坪坝金逸珠江影城',
            content: '晚上看完了还在下雨，待记录。。。。。。。。。。。。。。。'
        }
    ],
    food: [
        {
            id: '0201',
            title: '未婚鸡洋芋饭',
            time: '2019-05-01',
            addr: '三峡广场',
            content: '超级辣，待记录。。。。。。。。。。。。'
        }
    ],
    adventure: [],
}

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
                                    onClick={() => this.showDetail(item)}
                                    key={index}
                                    >
                                    {item.title} <Brief>{ moment(item.time).format('YYYY-MM-DD') } @{item.addr} <br /> {item.content}</Brief>
                                </Item>
                            );
                        })
                    }
                    {
                        list.length === 0 && (
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