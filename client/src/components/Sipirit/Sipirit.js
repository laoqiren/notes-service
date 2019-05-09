import React from 'react';
import { Accordion, List, WhiteSpace } from 'antd-mobile';
import Header from '../Header/Header';

import './Sipirit.scss';
import { bold } from 'ansi-colors';
export default class Sipirit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: 'W喜欢吃的东西',
                    list: ['青菜', '辣子鸡', '青椒茄子包', '鱼摆摆'],
                },
                {
                    title: 'W喜欢的书',
                    list: ['《小王子》', '《追风筝的人》', '《浮生六记》'],
                }
            ]
        }
    }
    onChange = (key) => {
        console.log(key);
    }
    render() {
        return (
            <div>
                <Header title="走进你的灵魂" />
                <div className="sipirit-container">
                {
                    this.state.data.map((item, index) => {
                        return (
                            <div key={index}>
                                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange} >
                                    <Accordion.Panel
                                        header={
                                            <div style={{fontWeight: 'bold', fontSize: '18px', color: 'gray'}}>{item.title}</div>
                                        }
                                    >
                                        <List>
                                            {
                                                item.list.map((t,index) => {
                                                    return (
                                                        <List.Item key={index}>{t}</List.Item>
                                                    )
                                                })
                                            }
                                        </List>
                                    </Accordion.Panel>
                                </Accordion>
                                <WhiteSpace></WhiteSpace>
                            </div>
                        );
                    })
                }
                </div>
            </div>
        );
    }
}