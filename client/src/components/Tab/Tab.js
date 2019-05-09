import React from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

import './Tab.scss';
class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'timeLine',
          hidden: false,
          fullScreen: false,
        };
    }
    render() {
        return (
            <div className="tab-bar">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="时光"
                        key="timeLine"
                        icon={{uri: require('../../icons/time.svg')}}
                        selectedIcon={{uri: require('../../icons/time_blue.svg')}}
                        selected={this.state.selectedTab === 'timeLine'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'timeLine',
                            });
                            this.props.history.push('/timeLine');
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{uri: require('../../icons/video.png')}}
                        selectedIcon={{uri: require('../../icons/video_blue.png')}}
                        title="点滴"
                        key="life"
                        badge={'new'}
                        selected={this.state.selectedTab === 'life'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'life',
                            });
                            this.props.history.push('/life');
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{uri: require('../../icons/heart-shape.svg')}}
                        selectedIcon={{uri: require('../../icons/heart-shape_blue.svg')}}
                        title="懂你"
                        key="sipirit"
                        dot
                        selected={this.state.selectedTab === 'sipirit'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'sipirit',
                            });
                            this.props.history.push('/sipirit');
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{uri: require('../../icons/plan.svg')}}
                        selectedIcon={{uri: require('../../icons/plan_blue.svg')}}
                        title="规划"
                        key="plan"
                        selected={this.state.selectedTab === 'plan'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'plan',
                            });
                            this.props.history.push('/plan');
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
            
        )
    }
}

export default withRouter(Tab);