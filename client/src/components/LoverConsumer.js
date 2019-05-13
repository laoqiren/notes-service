import React from 'react';

const Consumer = ({Consumer}) => WrappedComponent => {
    return class extends React.PureComponent {
        render() {
            return (
                <Consumer>
                    {data => <WrappedComponent context={data} {...this.props}/>}
                </Consumer>
            );
        }
    };
};

export default Consumer;