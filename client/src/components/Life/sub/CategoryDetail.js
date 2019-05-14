import React from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, Toast } from 'antd-mobile';
import Header from '../../Header/Header';
import * as moment from 'moment';
import service from '../../../service/index';

import './CategoryDetail.scss';

const Alert = Modal.alert;

class CategoryDetail extends React.Component {
    state = {
        category: '',
        item: {},
    }
    componentDidMount() {
        const status = this.props.location.state;
        this.setState({
            category: status.category,
            item: status.item,
        });
    }
    handleDelete = () => {
        const item = this.state.item;
        service.life.deleteArticle(item._id)
            .then(result => {
                if(result) {
                    this.props.history.push('/');
                } else {
                    Toast.info("看来它不想让你删除，待会儿再试一下吧");
                }
            });
    }
    render() {
        const item = this.state.item;
        const showDeleteAlert = () => {
            Alert('删除文章', 'Are you sure???', [
              { text: '点错啦', onPress: () => {}, style: 'default' },
              { text: '残忍删除', onPress: this.handleDelete },
            ]);
        };
        return (
            <div>
                <Header title={item.title} />
                <div className="category-detail">
                    <div className="content-header">
                        {moment(item.time).format('YYYY-MM-DD')} @ {item.addr} By: {item.creater}
                    </div>
                    <div className="centent-operation">
                        <img src={require('../../../icons/edit_blue.svg')} alt="edit" style={{ width: '22px', marginRight: '15px' }} />
                        <img src={require('../../../icons/delete.svg')} onClick={showDeleteAlert} alt="delete" style={{ width: '20px', marginRight: '15px' }} />
                    </div>
                    {item.content}
                </div>
            </div>
        )
    }
}

export default withRouter(CategoryDetail);