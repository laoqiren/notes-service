import React from 'react';
import { withRouter } from 'react-router-dom';
import { TabBar, Icon } from 'antd-mobile';

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
                  this.props.history.push('/timeLine')
                }}
                data-seed="logId"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="点滴"
                key="life"
                badge={'new'}
                selected={this.state.selectedTab === 'life'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'life',
                  });
                  this.props.history.push('/');
                }}
                data-seed="logId1"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="懂你"
                key="Friend"
                dot
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'greenTab',
                  });
                  this.props.history.push('/');
                }}
              >
              </TabBar.Item>
              <TabBar.Item
                icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                title="规划"
                key="plan"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'yellowTab',
                  });
                  this.props.history.push('/');
                }}
              >
              </TabBar.Item>
            </TabBar>
        )
    }
}

export default withRouter(Tab);