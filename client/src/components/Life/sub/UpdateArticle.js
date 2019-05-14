import React from 'react';
import { withRouter } from 'react-router-dom';
import FormArticle from './FormArticle';
import { Toast } from 'antd-mobile';
import service from '../../../service/index';

class UpdateArticle extends React.Component {
    handleUpdate = (item) => {
        const oldItem = this.props.location.state.item;
        service.life.updateArticle({
            _id: oldItem._id,
            article: item,
        })
            .then(result => {
                if(result) {
                    this.props.history.push('/');
                } else {
                    Toast.info("哎呀，修改出错啦，重新试一下吧");
                }
            });
    }
    render() {
        const oldItem = this.props.location.state.item;
        return (<div>
            <FormArticle type="update" oldItem={oldItem} handleSubmit={this.handleUpdate} />
        </div>)
    }
}

export default withRouter(UpdateArticle);