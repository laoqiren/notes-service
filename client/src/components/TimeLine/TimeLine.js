import React from 'react';
import CountUp from 'react-countup';
import { withRouter } from 'react-router-dom';
import {Timeline, TimelineEvent} from 'react-event-timeline'
import Header from '../Header/Header';

import LoverConsumer from '../LoverConsumer';
import LoverContext from '../../loverContext';

import * as moment from 'moment';
import './TimeLine.scss';

const backColors = ['#FF5959', '#FF8260', '#49BEB7', '#A374D5', '#c40b13', '#bf81ff'];

class TimeLine extends React.Component {
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
                {
                    time: '2019-05-01',
                    title: '我们第一次接吻',
                    addr: '重庆',
                    content: '吻上你的唇'
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
    goToLoverCenter = () => {
        this.props.history.push('/loverCenter');
    }
    getColor() {
        const randomIndex = Math.floor(Math.random() * backColors.length);
        return backColors[randomIndex];
    }
    render() {
        const duration = this.state.duration;
        return (
            <div className="timeline">
                <Header title="时光穿梭机" rightContent={[
                    <img onClick={this.goToLoverCenter} key="0" src={require('../../icons/user.svg')} alt="lover icon" width={20}/>
                ]} />
                <div className="count-up">
                    我们相爱了 {
                        duration.years > 0 && <span>
                            <span className="duration-time"><CountUp end={duration.years} duration={2.75} /></span> 年 </span>
                    } {
                        duration.months > 0 && <span><span className="duration-time"><CountUp end={duration.months} duration={2.75} /></span> 月 </span>
                    } {
                        duration.days > 0 && <span><span className="duration-time"><CountUp end={duration.days} duration={2.75} /></span> 天 </span>
                    }
                </div>
                <Timeline>
                    {
                        this.state.list.length > 0 && this.state.list.map((moment, index) => {
                            const randomColor = this.getColor();
                            return (
                                <TimelineEvent
                                    key={index}
                                    title={moment.title}
                                    createdAt={`${moment.time} @${moment.addr}`}
                                    icon={<span>L&W</span>}
                                    iconColor={randomColor}
                                    container="card"
                                    style={{
                                        borderRadius: 3,
                                    }}
                                    cardHeaderStyle={{backgroundColor: randomColor,color: 'white'}}
                                    >
                                    {moment.content}
                                </TimelineEvent>
                            )
                        })
                    }
                </Timeline>
                
            </div>
        )
    }
}

export default LoverConsumer(LoverContext)(withRouter(TimeLine));