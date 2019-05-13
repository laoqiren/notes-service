import React from 'react';
import { List, InputItem, Button } from 'antd-mobile';
import Header from '../Header/Header';
import LoverConsumer from '../LoverConsumer';
import LoverContext from '../../loverContext';
import service from '../../service/index';

import './LoverCenter.scss';

class LoverCenter extends React.Component {
    state = {
        lover_id: '',
        password: '',
    }
    handleLogin = () => {
        service.lover.login(this.state)
            .then(json => {
                if(json) {
                    this.props.context.updateContext({
                        hasLogin: true,
                        loverInfo: json,
                    });
                }
            });
    }
    render() {
        const lover = this.props.context;
        return (
            <div className="lover-center">
                <Header title="Lover" />
                {
                    !lover.hasLogin && (
                        <div>
                            <List renderHeader={() => ''}>
                                <InputItem
                                    type="text"
                                    placeholder="输入lover id"
                                    clear={true}
                                    onChange={val => this.setState({
                                        lover_id: val,
                                    })}
                                >lover id</InputItem>
                                <InputItem
                                    type="password"
                                    placeholder="****"
                                    onChange={val => this.setState({
                                        password: val,
                                    })}
                                >password</InputItem>
                            </List>
                            <Button type="primary" onClick={this.handleLogin}>登陆</Button>
                        </div>
                    )
                }
                {
                    lover.hasLogin && (
                        <div className="lover-info">
                            lover_name: {lover.loverInfo.lover_name} <br/>
                            lover_id: {lover.loverInfo.lover_id}
                        </div>
                    )
                }
                
            </div>
        )
    }
}

export default LoverConsumer(LoverContext)(LoverCenter);