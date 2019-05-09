import React from 'react';
import { Accordion, List, WhiteSpace } from 'antd-mobile';

export default class Sipirit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    title: '喜欢吃的东西',
                    list: ['青菜', '辣子鸡', '青椒茄子包'],
                },
                {
                    title: '喜欢的书',
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
                {
                    this.state.data.map(item => {
                        return (
                            <div>
                                <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                                    <Accordion.Panel header={item.title}>
                                        <List className="my-list">
                                            {
                                                item.list.map(t => {
                                                    return (
                                                        <List.Item>{t}</List.Item>
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
        );
    }
}