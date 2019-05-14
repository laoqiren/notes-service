import React from 'react';
import { withRouter } from 'react-router-dom';
import { Toast  } from 'antd-mobile';
import FormArticle from './FormArticle';
import service from '../../../service';

class AddArticle extends React.Component {
    handlePublish = (item) => {
        service.life.addArticle(item)
        .then(result => {
            if(result) {
                this.props.history.push('/');
            } else {
                Toast.info("哎呀，好像发表失败啦，重新试一下吧");
            }
        });
    }
    render() {
        return (
            <div>
                <FormArticle type="add" handleSubmit={this.handlePublish} />
            </div>
        )
    }
}

export default withRouter(AddArticle);