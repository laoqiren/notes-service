import React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import Header from '../Header/Header';
import './Plan.scss';
export default class Plan extends React.Component {
    render() {
        return (
            <div>
                <Header title="未来，我一直在" />
                <div className="plan-container">
                    <div className="plan-header">
                        <div className="photo-container">
                            <div className="photo">
                                <img src={require('../../images/plan_photo.jpeg')} alt="plan" />
                            </div>
                        </div>
                    </div>
                    <div className="plan-content">
                        <WingBlank size="lg">
                            <Card>
                                <Card.Header title="买房子" />
                                <Card.Body>
                                    <div>房下面有书店、花店、甜品店</div>
                                </Card.Body>
                            </Card>
                            <WhiteSpace />
                        </WingBlank>
                    </div>
                </div>
            </div>
        )
    }
}