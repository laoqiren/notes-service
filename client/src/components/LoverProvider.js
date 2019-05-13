import React from 'react';
import service from '../service/index';

// context高阶组件
const LoverHOC = ({Provider}) => WrappedComponent => {
    return class extends React.Component {
        state = {
            hasLogin: false,
            loverInfo: {}
        };
        componentDidMount() {
            service.lover.queryLoverInfo()
                .then(info => {
                    if(info) {
                        this.setState({
                            hasLogin: true,
                            loverInfo: info,
                        });
                    }
                });
        }
        updateContext = newState => this.setState(newState);
        render() {
            return (
                <Provider value={{ ...this.state, updateContext: this.updateContext }}>
                    <WrappedComponent {...this.props} />
                </Provider>
            );
        }
    };
};

export default LoverHOC;