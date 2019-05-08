import React from 'react';
import { List, WingBlank, Card, WhiteSpace } from 'antd-mobile';

import * as moment from 'moment';

export default class TimeLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    time: '2019-01-23',
                    title: '时隔多年的再次相遇',
                    addr: '川外校门',
                    content: '川外校门再次见你。。。'
                },
                {
                    time: '2019-03-11',
                    title: '那天，L对W表白',
                    addr: '重庆，北京',
                    content: '诉说心肠'
                },
                {
                    time: '2019-04-30',
                    title: '那天，我们第一次拥抱',
                    addr: '重庆',
                    content: '感受你的温度'
                },
            ],
            duration: {
                years: 0,
                months: 0,
                days: 0,
            }
        }
    }
    componentDidMount() {
        const duration = moment.duration(moment.now() - moment("2019-04-30 22:00", "YYYY-MM-DD HH:mm"), 'ms');
        this.setState({
            duration: {
                years: duration.get('years'),
                months: duration.get('months'),
                days: duration.get('days'),
            }
        })
    }
    render() {
        return (
            <List renderHeader={() => '相遇->相识->相知->相爱->修炼在路上'}>
                {
                    this.state.list.map(moment => {
                        return (
                            <WingBlank>
                                <WhiteSpace size="lg" />
                                <Card>
                                    <Card.Header
                                        title={moment.title}
                                        extra={moment.time}
                                    >
                                    </Card.Header>
                                    <Card.Body>
                                        {moment.content}
                                    </Card.Body>
                                    <Card.Footer>
                                        {moment.addr}
                                    </Card.Footer>
                                </Card>
                            </WingBlank>
                        );
                    })
                }
            </List>
        )
    }
}